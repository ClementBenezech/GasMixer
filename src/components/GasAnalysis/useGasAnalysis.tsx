import { useContext } from "react";
import {
  getDepthForEquivalentNarcosisDepth,
  getMODforTargetPPO2,
} from "../utils/functions";
import { AppContext } from "../../AppContext";
import { getNarcosisZones, getPPO2ZOnes } from "./functions";
import useThemeColors from "../utils/hooks/useThemeColors";

const useGasAnalysis = () => {
  const { appData } = useContext(AppContext);
  const { tankGases, appSettings } = appData;
  const theme = useThemeColors();
  const isOxygenNarcotic = appData.appSettings.isOxygenNarcotic;
  const NarcoticGasPercentageInMix = isOxygenNarcotic
    ? tankGases.oxygen.percentage + tankGases.nitrogen.percentage
    : tankGases.nitrogen.percentage;

  const shallowestSafeOperatingDepth = Math.max(
    getMODforTargetPPO2(
      appSettings.lowestOxygenPartialPressure,
      tankGases.oxygen.percentage
    ),
    0
  );

  const deepestSafeOperatingDepth = getMODforTargetPPO2(
    appSettings.highestOxygenPartialPressure,
    tankGases.oxygen.percentage
  );

  const PPO2zones = getPPO2ZOnes(
    shallowestSafeOperatingDepth,
    deepestSafeOperatingDepth,
    theme
  );

  const maxNarcosisDepth = Math.round(
    getDepthForEquivalentNarcosisDepth(
      appSettings.equivalentNarcoticDepth,
      tankGases.nitrogen.percentage,
      tankGases.oxygen.percentage,
      appData.appSettings.isOxygenNarcotic
    )
  );

  const NarcosisZones = getNarcosisZones(
    NarcoticGasPercentageInMix,
    maxNarcosisDepth,
    theme
  );

  return {
    narcosisZones: NarcosisZones,
    maxNarcosisDepth,
    PPO2zones,
    shallowestSafeOperatingDepth,
    deepestSafeOperatingDepth,
  };
};

export default useGasAnalysis;
