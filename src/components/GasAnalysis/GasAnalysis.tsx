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
  const checkIcon = <i className="fa-solid fa-check"></i>;
  const magnifierIcon = <i className="fa-solid fa-magnifying-glass-chart"></i>;

  const RenderedPP02Array = depthArray.map((depth) => {
    const oxygenPartialPressure =
      Math.round(tankGases.oxygen.percentage * (depth / 10 + 1)) / 100;

    const equivalentNarcoticDepth = getEquivalentNarcosisDepthForDepth(
      depth,
      tankGases.nitrogen.percentage,
      tankGases.oxygen.percentage,
      appData.appSettings.isOxygenNarcotic
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
      <S.TableCard opacity={isGasMixSafe ? 1 : 1}>
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
          zones={PPO2zones}
          title="Oxygen Safe zones with PPO2"
          dangerIcon={DeathIcon}
          editParameterUnit="ATM"
          HelpMessage={
            <div>
              <h3>Target PP02</h3>
              <p>
                Use the slider to select your highest acceptable oxygen partial
                pressure.
              </p>
              <p>
                You can go up to 1.8 ATM in this app, but this value should
                generally not be higher than 1.4 ATM for "active" bottom phases,
                and 1.6 ATM for static phases like decompression stops.
              </p>
              <p>
                This value will impact the depth at which a specific mix can be
                used. The higher the PPO2 target, the deeper the gas can take
                you
              </p>
              <p>
                Beyond those limits, oxygen toxicity can occur, leading to
                potential strokes, loss of consciousness and death by drowning.
              </p>
            </div>
          }
          editParameterComponent={MaxPPO2Editor}
        />

        <SimpleBarGraph
          key="nitrogen"
          zones={narcosisZones}
          editParameterUnit="m"
          title={`Narcosis Safe zones with END`}
          dangerIcon={NarcosisIcon}
          HelpMessage={
            <div>
              <h3>Target END</h3>
              <p>
                Use the Slider to select your target maximum Equivalent Narcotic
                Depth
              </p>
              <p>
                This Value is very specific to each diver. You should select a
                depth at which, on air, you don't get the effects of nitrogen
                narcosis.
              </p>
              <p>
                The higher the Equivalent Narcotic Depth, the deeper a specific
                mix can take you safely
              </p>
              <p>
                For a specific dive at a given depth, if you accept a deeper
                END, then you can use a mix with less Helium and more Nitrogen
              </p>
              <p>
                This app lets you choose wether or not you want to consider
                oxygen narcotic.
              </p>
            </div>
          }
          editParameterComponent={EquivalentNarcosisDepthEditor} //onChangeValue={handleChangeEND}
        />
      </S.BarGraphsContainer>
      <S.PPO2ENDSection>
        <S.SectionTitle>
          <S.TitleLabelContainer>
            <S.ColorLetter>PP02</S.ColorLetter> and{" "}
            <S.ColorLetter>E</S.ColorLetter>quivalent{" "}
            <S.ColorLetter>N</S.ColorLetter>arcotic{" "}
            <S.ColorLetter>D</S.ColorLetter>epth 0-100m
          </S.TitleLabelContainer>
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
