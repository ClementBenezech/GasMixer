import { useContext, useState } from "react";
import SimpleBarGraph from "../SimpleBarGraph/SimpleBarGraph";

import {
  dangerColor,
  nitrogenColor,
  oxygenColor,
  safeColor,
} from "../utils/constants";
import { getEquivalentNarcosisDepthForDepth } from "../utils/functions";
import * as S from "./GasAnalysis.style";
import { AppContext } from "../../AppContext";
import useGasAnalysis from "./useGasAnalysis";

const OxygenPartialPressure = () => {
  const { appData, setAppData } = useContext(AppContext);

  const { tankGases, appSettings } = appData;

  const { narcosisZones, PPO2zones } = useGasAnalysis();

  const depthArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const NarcosisIcon = <i className="fa-solid fa-face-dizzy"></i>;
  const ToxicityIcon = <i className="fa-solid fa-biohazard"></i>;
  const ArrowDownIcon = <i className="fa-solid fa-arrow-down"></i>;
  const DeathIcon = <i className="fa-solid fa-ghost"></i>;
  const WarningIcon = <i className="fa-solid fa-triangle-exclamation"></i>;
  const ValidIcon = <i className="fa-solid fa-circle-check"></i>;
  const xMarkIcon = <i className="fa-solid fa-xmark"></i>;
  const checkIcon = <i className="fa-solid fa-check"></i>;

  const RenderedPP02Array = depthArray.map((depth) => {
    const oxygenPartialPressure =
      Math.round(tankGases.oxygen.percentage * (depth / 10 + 1)) / 100;

    const equivalentNarcoticDepth = getEquivalentNarcosisDepthForDepth(
      depth,
      tankGases.nitrogen.percentage
    );

    //Assessing if gas is safe
    const isPartialPressureSafe =
      oxygenPartialPressure >= appSettings.lowestOxygenPartialPressure &&
      oxygenPartialPressure <= appSettings.highestOxygenPartialPressure;
    const isDepthNarcotic =
      equivalentNarcoticDepth > appSettings.equivalentNarcoticDepth;
    const isGasMixSafe = !isDepthNarcotic && isPartialPressureSafe;

    const CellColors = {
      PPN2: isDepthNarcotic ? dangerColor : nitrogenColor,
      PPO2: isPartialPressureSafe ? oxygenColor : dangerColor,
      cell: isGasMixSafe ? safeColor : dangerColor,
    };

    return (
      <S.TableRow>
        <S.StandardTableCell color={CellColors.cell}>
          {isGasMixSafe ? ValidIcon : WarningIcon}
          <div>{`${depth} m`}</div>
        </S.StandardTableCell>
        <S.TableCell color={CellColors.PPN2}>
          {isDepthNarcotic ? xMarkIcon : checkIcon}
          <div>{`${equivalentNarcoticDepth} m`}</div>
        </S.TableCell>
        <S.TableCell color={CellColors.PPO2}>
          {isPartialPressureSafe ? checkIcon : xMarkIcon}
          <div>{`${oxygenPartialPressure} ATM`}</div>
        </S.TableCell>
      </S.TableRow>
    );
  });

  const [maxOxygenPartialPressure, setMaxOxygenPartialPressure] = useState(
    appSettings.highestOxygenPartialPressure
  );
  const [maxEquivalentNarcoticDepth, setMaxEquivalentNarcoticDepth] = useState(
    appSettings.equivalentNarcoticDepth
  );

  const editEquivalentNarcosisDepthProps = {
    value: maxEquivalentNarcoticDepth,
    step: 5,
    min: 10,
    max: 120,
    type: "range",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
      const newSettings = {
        ...appData.appSettings,
        equivalentNarcoticDepth: parseInt(e.target.value),
      };
      console.log(newSettings);
      const newContext = { ...appData, appSettings: newSettings };
      setMaxEquivalentNarcoticDepth(parseInt(e.target.value));
      setAppData(newContext);
    },
  };

  const editMaxPPO2Props = {
    value: maxOxygenPartialPressure,
    type: "range",
    step: "0.01",
    min: 1.2,
    max: 1.8,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(parseFloat(e.target.value));
      console.log(appData.appSettings.highestOxygenPartialPressure);
      if (
        (e.target.value.includes(".") &&
          e.target.value.indexOf(".") + 1 === e.target.value.length) ||
        e.target.value.length === 0
      ) {
        setMaxOxygenPartialPressure(e.target.value);
      } else {
        const newSettings = {
          ...appData.appSettings,
          highestOxygenPartialPressure: parseFloat(e.target.value),
        };
        const newContext = { ...appData, appSettings: newSettings };
        setAppData(newContext);
        setMaxOxygenPartialPressure(parseFloat(e.target.value));
      }
    },
  };

  const MaxPPO2Editor: JSX.Element = <S.ParameterInput {...editMaxPPO2Props} />;
  const EquivalentNarcosisDepthEditor: JSX.Element = (
    <S.ParameterInput {...editEquivalentNarcosisDepthProps} />
  );
  return (
    <>
      <S.BarGraphsContainer>
        {/*<PPO2graph PPO2DataSet={PPO2Data}></PPO2graph>*/}

        <SimpleBarGraph
          key="oxygen"
          zones={PPO2zones}
          title="Oxygen Safe zones with target PPO2"
          dangerIcon={DeathIcon}
          editParameterComponent={MaxPPO2Editor}
        />

        <SimpleBarGraph
          key="nitrogen"
          zones={narcosisZones}
          title={`Nitrogen Safe zones with target END`}
          dangerIcon={NarcosisIcon}
          editParameterComponent={EquivalentNarcosisDepthEditor} //onChangeValue={handleChangeEND}
        />
      </S.BarGraphsContainer>
      <S.PPO2ENDSection>
        <S.SectionTitle>
          PP02 and equivalent Narcotic depth table
        </S.SectionTitle>
        <S.PPO2ENDTable>
          <S.TableRow>
            <S.StandardTableCell color="blue">
              {ArrowDownIcon}
              <div>DEPTH</div>
            </S.StandardTableCell>
            <S.TableCell color={nitrogenColor}>
              {NarcosisIcon}
              <div>E.N.D</div>
            </S.TableCell>
            <S.TableCell color={oxygenColor}>
              {ToxicityIcon}
              <div>PPO2</div>
            </S.TableCell>
          </S.TableRow>
          {RenderedPP02Array}
        </S.PPO2ENDTable>
      </S.PPO2ENDSection>
      {/* <MODcomponent OxygenPercentage={oxygenPercentage} /> */}
    </>
  );
};
export default OxygenPartialPressure;
