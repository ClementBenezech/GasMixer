import MODcomponent from "../MODcomponent/MODcomponent";
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

const OxygenPartialPressure = ({
  oxygenPercentage,
  tankGases,
}: {
  oxygenPercentage: number;
  tankGases: { percentage: number; color: string; name: string }[];
}) => {
  const depthArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const currentGasNitrogenPercentage = tankGases[0].percentage;

  const NarcosisIcon = <i className="fa-solid fa-face-dizzy"></i>;
  const ToxicityIcon = <i className="fa-solid fa-biohazard"></i>;
  const ArrowDownIcon = <i className="fa-solid fa-arrow-down"></i>;
  const DeathIcon = <i className="fa-solid fa-ghost"></i>;
  const WarningIcon = <i className="fa-solid fa-triangle-exclamation"></i>;
  const ValidIcon = <i class="fa-solid fa-circle-check"></i>;

  const PPO2Data = [];
  const RenderedPP02Array = depthArray.map((depth) => {
    const oxygenPartialPressure =
      Math.round(tankGases[1].percentage * (depth / 10 + 1)) / 100;

    const isPartialPressureSafe =
      oxygenPartialPressure >= minSafePPO2 &&
      oxygenPartialPressure <= maxSafePPO2;

    const NARCOTIC_DEPTH_TARGET = 40;

    PPO2Data.push({ x: oxygenPartialPressure, y: depth });

    const equivalentNarcoticDepth = getEquivalentNarcosisDepthForDepth(
      depth,
      currentGasNitrogenPercentage
    );
    const isDepthNarcotic = equivalentNarcoticDepth > NARCOTIC_DEPTH_TARGET;

    const PPN2Color = isDepthNarcotic ? dangerColor : nitrogenColor;
    const PPO2Color = isPartialPressureSafe ? oxygenColor : dangerColor;

    const isGasMixSafe = !isDepthNarcotic && isPartialPressureSafe;

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

  const shallowestSafeOperatingDepth = Math.max(
    getMODforTargetPPO2(0.18, tankGases[1].percentage),
    0
  );

  const deepestSafeOperatingDepth = getMODforTargetPPO2(
    1.4,
    tankGases[1].percentage
  );
  const PPO2zones = [
    {
      start: 0,
      end: shallowestSafeOperatingDepth,
      color: "linear-gradient(180deg, #6f00ff 70%, #e1e1e1 100%)",
      danger: true,
    },
    {
      start: shallowestSafeOperatingDepth,
      end: deepestSafeOperatingDepth,
      color: "linear-gradient(180deg, #a2ff8f 80%, #e1e1e1 100%)",
    },
    {
      start: deepestSafeOperatingDepth,
      end: 300,
      color: "linear-gradient(180deg, #ff6e6e 70% 70%, #e1e1e1 100%)",
      danger: true,
    },
  ];

  const maxNarcosisDepth = Math.round(
    getDepthForEquivalentNarcosisDepth(40, currentGasNitrogenPercentage)
  );

  const NarcosisZones = [
    {
      start: 0,
      end:
        currentGasNitrogenPercentage > 0 && maxNarcosisDepth < 300
          ? maxNarcosisDepth
          : 300,
      color: "linear-gradient(180deg, #a2ff8f 80%, #e1e1e1 100%)",
    },
    {
      start:
        currentGasNitrogenPercentage > 0 && maxNarcosisDepth < 300
          ? maxNarcosisDepth
          : 300,
      end: 300,
      color: "linear-gradient(180deg, #ff6e6e 70%, #e1e1e1 100%)",
      danger: true,
    },
  ];

  return (
    <>
      <S.DiveTankAndGraphContainer>
        {/*<PPO2graph PPO2DataSet={PPO2Data}></PPO2graph>*/}
        <SimpleBarGraph
          zones={PPO2zones}
          title="Oxygen Toxicity / Hypoxia"
          dangerIcon={DeathIcon}
        />
        <SimpleBarGraph
          zones={NarcosisZones}
          title="Nitrogen Narcosis"
          dangerIcon={NarcosisIcon}
        />
      </S.DiveTankAndGraphContainer>
      <S.PPO2ENDTable>
        <S.TableRow>
          <S.StandardTableCell color="black">
            <i className="fa-solid fa-arrow-down"></i>
            <div>DEPTH</div>
          </S.StandardTableCell>
          <S.TableCell color={nitrogenColor}>
            <i className="fa-solid fa-bullseye"></i>
            <div>E.N.D</div>
          </S.TableCell>
          <S.TableCell color={oxygenColor}>
            <i className="fa-solid fa-biohazard"></i>
            <div>PPO2</div>
          </S.TableCell>
        </S.TableRow>
        {RenderedPP02Array}
      </S.PPO2ENDTable>
      {/* <MODcomponent OxygenPercentage={oxygenPercentage} /> */}
    </>
  );
};
export default OxygenPartialPressure;
