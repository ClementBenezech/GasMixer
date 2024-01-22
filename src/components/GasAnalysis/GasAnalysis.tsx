import { useContext } from "react";
import SimpleBarGraph from "../SimpleBarGraph/SimpleBarGraph";

import * as S from "./GasAnalysis.style";
import { AppContext } from "../../AppContext";
import useGasAnalysis from "./useGasAnalysis";
import useEditParametersComponentsProps from "./useEditParametersComponentsProps";
import useThemeColors from "../utils/hooks/useThemeColors";
import ToxicityHelpMessage from "./HelpMessages/ToxicityHelpMessage";
import NarcosisHelpMessage from "./HelpMessages/NarcosisHelpMessage";
import { getGasAnalysisForDepth } from "./functions";

const OxygenPartialPressure = () => {
  const { appData } = useContext(AppContext);

  const { dangerColor, safeColor } = useThemeColors();

  const { tankGases, appSettings } = appData;

  const { narcosisZones, PPO2zones } = useGasAnalysis();

  const depthArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const NarcosisIcon = <i className="fa-solid fa-face-dizzy"></i>;
  const DeathIcon = <i className="fa-solid fa-ghost"></i>;
  const checkIcon = <i className="fa-solid fa-check"></i>;
  const magnifierIcon = <i className="fa-solid fa-magnifying-glass-chart"></i>;

  const RenderedPP02Array = depthArray.map((depth) => {
    const {
      equivalentNarcoticDepth,
      isPartialPressureSafe,
      isDepthNarcotic,
      isGasMixSafe,
      oxygenPartialPressure,
    } = getGasAnalysisForDepth({ depth, appSettings, tankGases });

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
          HelpMessage={<ToxicityHelpMessage />}
          editParameterComponent={MaxPPO2Editor}
        />

        <SimpleBarGraph
          key="nitrogen"
          zones={narcosisZones}
          editParameterUnit="m"
          title={`Narcosis Safe zones with END`}
          dangerIcon={NarcosisIcon}
          HelpMessage={<NarcosisHelpMessage />}
          editParameterComponent={EquivalentNarcosisDepthEditor} //onChangeValue={handleChangeEND}
        />
      </S.BarGraphsContainer>
      <S.PPO2ENDSection>
        <S.SectionTitle>
          <S.TitleLabelContainer>
            <S.ColorLetter color={dangerColor}>PP02</S.ColorLetter> and{" "}
            <S.ColorLetter color={dangerColor}>E</S.ColorLetter>quivalent{" "}
            <S.ColorLetter color={dangerColor}>N</S.ColorLetter>arcotic{" "}
            <S.ColorLetter color={dangerColor}>D</S.ColorLetter>epth 0-100m
          </S.TitleLabelContainer>
        </S.SectionTitle>
        <S.PPO2ENDTable>
          <S.FillerIcon>{magnifierIcon}</S.FillerIcon>
          {RenderedPP02Array}
        </S.PPO2ENDTable>
      </S.PPO2ENDSection>
    </>
  );
};
export default OxygenPartialPressure;
