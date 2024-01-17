import { useContext } from "react";
import {
  getDepthForEquivalentNarcosisDepth,
  getMODforTargetPPO2,
} from "../utils/functions";
import { AppContext } from "../../AppContext";
import { getNarcosisZones, getPPO2ZOnes } from "./functions";

const useGasAnalysis = () => {
  const { appData } = useContext(AppContext);
  const { tankGases, appSettings } = appData;

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
    deepestSafeOperatingDepth
  );

  const maxNarcosisDepth = Math.round(
    getDepthForEquivalentNarcosisDepth(
      appSettings.equivalentNarcoticDepth,
      tankGases.nitrogen.percentage
    )
  );

  const NarcosisZones = getNarcosisZones(
    tankGases.nitrogen.percentage,
    maxNarcosisDepth
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
