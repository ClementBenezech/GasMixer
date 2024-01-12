import SimpleBarGraph from "../SimpleBarGraph/SimpleBarGraph";

import {
  dangerColor,
  maxSafePPO2,
  minSafePPO2,
  nitrogenColor,
  oxygenColor,
  safeColor,
} from "../utils/constants";
import {
  getDepthForEquivalentNarcosisDepth,
  getEquivalentNarcosisDepthForDepth,
  getMODforTargetPPO2,
} from "../utils/functions";
import * as S from "./OxygenPartialPressure.style";
import { getNarcosisZones, getPPO2ZOnes } from "./functions";

const OxygenPartialPressure = ({
  tankGases,
}: {
  tankGases: { percentage: number; color: string; name: string }[];
}) => {
  const depthArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const currentGasNitrogenPercentage = tankGases[0].percentage;

  const NarcosisIcon = <i className="fa-solid fa-face-dizzy"></i>;
  const ToxicityIcon = <i className="fa-solid fa-biohazard"></i>;
  const ArrowDownIcon = <i className="fa-solid fa-arrow-down"></i>;
  const DeathIcon = <i className="fa-solid fa-ghost"></i>;
  const WarningIcon = <i className="fa-solid fa-triangle-exclamation"></i>;
  const ValidIcon = <i className="fa-solid fa-circle-check"></i>;

  const shallowestSafeOperatingDepth = Math.max(
    getMODforTargetPPO2(0.18, tankGases[1].percentage),
    0
  );

  const deepestSafeOperatingDepth = getMODforTargetPPO2(
    1.4,
    tankGases[1].percentage
  );

  const PPO2zones = getPPO2ZOnes(
    shallowestSafeOperatingDepth,
    deepestSafeOperatingDepth
  );

  const maxNarcosisDepth = Math.round(
    getDepthForEquivalentNarcosisDepth(40, currentGasNitrogenPercentage)
  );

  const NarcosisZones = getNarcosisZones(
    currentGasNitrogenPercentage,
    maxNarcosisDepth
  );

  const NARCOTIC_DEPTH_TARGET = 40;

  const PPO2Data = [];
  const RenderedPP02Array = depthArray.map((depth) => {
    const oxygenPartialPressure =
      Math.round(tankGases[1].percentage * (depth / 10 + 1)) / 100;

    PPO2Data.push({ x: oxygenPartialPressure, y: depth });

    const equivalentNarcoticDepth = getEquivalentNarcosisDepthForDepth(
      depth,
      currentGasNitrogenPercentage
    );

    //Assessing if gas is safe
    const isPartialPressureSafe =
      oxygenPartialPressure >= minSafePPO2 &&
      oxygenPartialPressure <= maxSafePPO2;
    const isDepthNarcotic = equivalentNarcoticDepth > NARCOTIC_DEPTH_TARGET;
    const isGasMixSafe = !isDepthNarcotic && isPartialPressureSafe;

    //Defining appropriate color
    const PPN2Color = isDepthNarcotic ? dangerColor : nitrogenColor;
    const PPO2Color = isPartialPressureSafe ? oxygenColor : dangerColor;

    return (
      <S.TableRow>
        <S.StandardTableCell color={isGasMixSafe ? safeColor : dangerColor}>
          {isGasMixSafe ? ValidIcon : WarningIcon}
          <div>{`${depth} m`}</div>
        </S.StandardTableCell>
        <S.TableCell color={PPN2Color}>
          {NarcosisIcon}
          <div>{`${equivalentNarcoticDepth} m`}</div>
        </S.TableCell>
        <S.TableCell color={PPO2Color}>
          {ToxicityIcon}
          <div>{oxygenPartialPressure}</div>
        </S.TableCell>
      </S.TableRow>
    );
  });

  return (
    <>
      <S.BarGraphsContainer>
        {/*<PPO2graph PPO2DataSet={PPO2Data}></PPO2graph>*/}
        <SimpleBarGraph
          zones={PPO2zones}
          title="Oxygen Toxicity / Hypoxia"
          dangerIcon={DeathIcon}
        />
        <SimpleBarGraph
          zones={NarcosisZones}
          title={`Narcosis with E.N.D = ${NARCOTIC_DEPTH_TARGET} m`}
          dangerIcon={NarcosisIcon}
        />
      </S.BarGraphsContainer>
      <S.PPO2Section>
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
      </S.PPO2Section>
      {/* <MODcomponent OxygenPercentage={oxygenPercentage} /> */}
    </>
  );
};
export default OxygenPartialPressure;
