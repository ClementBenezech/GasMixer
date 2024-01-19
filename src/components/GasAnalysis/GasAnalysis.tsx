import { useContext } from "react";
import SimpleBarGraph from "../SimpleBarGraph/SimpleBarGraph";

import { dangerColor, safeColor } from "../utils/constants";
import { getEquivalentNarcosisDepthForDepth } from "../utils/functions";
import * as S from "./GasAnalysis.style";
import { AppContext } from "../../AppContext";
import useGasAnalysis from "./useGasAnalysis";
import useEditParametersComponentsProps from "./useEditParametersComponentsProps";

const OxygenPartialPressure = () => {
  const { appData } = useContext(AppContext);

  const { tankGases, appSettings } = appData;

  const { narcosisZones, PPO2zones } = useGasAnalysis();

  const depthArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const NarcosisIcon = <i className="fa-solid fa-face-dizzy"></i>;

  const DeathIcon = <i className="fa-solid fa-ghost"></i>;
  const WarningIcon = <i className="fa-solid fa-triangle-exclamation"></i>;
  const checkIcon = <i className="fa-solid fa-check"></i>;
  const magnifierIcon = <i className="fa-solid fa-magnifying-glass-chart"></i>;

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
      PPN2: isDepthNarcotic ? dangerColor : safeColor,
      PPO2: isPartialPressureSafe ? safeColor : dangerColor,
      cell: isGasMixSafe ? safeColor : dangerColor,
    };

    return (
      <S.TableCard opacity={isGasMixSafe ? 1 : 0.8}>
        <S.StandardTableCell color={CellColors.cell}>
          <S.DepthValue>{`${depth} m`}</S.DepthValue>
          {isDepthNarcotic && NarcosisIcon}
          {!isPartialPressureSafe && DeathIcon}
          {isGasMixSafe && checkIcon}
        </S.StandardTableCell>
        <S.TableCardRow>
          <S.TableCell color={CellColors.PPN2}>END</S.TableCell>
          <S.TableCell color={CellColors.PPO2}>PPO2</S.TableCell>
        </S.TableCardRow>
        <S.TableCardRow>
          <S.TableCell color={CellColors.PPN2}>
            <div>{`${equivalentNarcoticDepth}`}</div>
          </S.TableCell>
          <S.TableCell color={CellColors.PPO2}>
            <div>{`${oxygenPartialPressure}`}</div>
          </S.TableCell>
        </S.TableCardRow>
      </S.TableCard>
    );
  });

  const { editMaxOxygen, editMaxNitrogen } = useEditParametersComponentsProps();

  const MaxPPO2Editor: JSX.Element = <S.ParameterInput {...editMaxOxygen} />;
  const EquivalentNarcosisDepthEditor: JSX.Element = (
    <S.ParameterInput {...editMaxNitrogen} />
  );
  return (
    <>
      <S.BarGraphsContainer>
        {/*<PPO2graph PPO2DataSet={PPO2Data}></PPO2graph>*/}

        <SimpleBarGraph
          key="oxygen"
          targetName="PPO2"
          zones={PPO2zones}
          title="Oxygen Safe zones"
          dangerIcon={DeathIcon}
          editParameterComponent={MaxPPO2Editor}
        />

        <SimpleBarGraph
          key="nitrogen"
          targetName="END"
          zones={narcosisZones}
          title={`Nitrogen Safe zones`}
          dangerIcon={NarcosisIcon}
          editParameterComponent={EquivalentNarcosisDepthEditor} //onChangeValue={handleChangeEND}
        />
      </S.BarGraphsContainer>
      <S.PPO2ENDSection>
        <S.SectionTitle>
          PP02 and equivalent Narcotic depth table
        </S.SectionTitle>
        <S.PPO2ENDTable>
          <S.FillerIcon>{magnifierIcon}</S.FillerIcon>
          {RenderedPP02Array}
        </S.PPO2ENDTable>
      </S.PPO2ENDSection>
      {/* <MODcomponent OxygenPercentage={oxygenPercentage} /> */}
    </>
  );
};
export default OxygenPartialPressure;
