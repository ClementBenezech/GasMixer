import { AppSettings } from "../../AppContext";
import { TankGases } from "../TankMixer/types";
import { Theme } from "../utils/constants";
import { getEquivalentNarcosisDepthForDepth } from "../utils/functions";
import { Zones } from "./types";

export const getPPO2ZOnes = (
  shallowestSafeOperatingDepth: number,
  deepestSafeOperatingDepth: number,
  theme: Theme
): Zones => {
  return [
    {
      start: 0,
      end: shallowestSafeOperatingDepth,
      color: theme.dangerColor,
      danger: true,
      dangerLabel: "Hypoxia",
    },
    {
      start: shallowestSafeOperatingDepth,
      end: deepestSafeOperatingDepth,
      color: theme.safeColor,
    },
    {
      start: deepestSafeOperatingDepth,
      end: 300,
      color: theme.dangerColor,
      danger: true,
      dangerLabel: "Toxicity",
    },
  ];
};

export const getNarcosisZones = (
  currentGasNarcoticGasPercentage: number,
  maxNarcosisDepth: number,
  theme: Theme
) => {
  return [
    {
      start: 0,
      end:
        currentGasNarcoticGasPercentage > 0 && maxNarcosisDepth < 300
          ? maxNarcosisDepth
          : 300,
      color: theme.safeColor,
    },
    {
      start:
        currentGasNarcoticGasPercentage > 0 && maxNarcosisDepth < 300
          ? maxNarcosisDepth
          : 300,
      end: 300,
      color: theme.dangerColor,
      danger: true,
      dangerLabel: "Narcosis",
    },
  ];
};

export const getGasAnalysisForDepth = ({
  depth,
  appSettings,
  tankGases,
}: {
  depth: number;
  appSettings: AppSettings;
  tankGases: TankGases;
}) => {
  const oxygenPartialPressure =
    Math.round(tankGases.oxygen.percentage * (depth / 10 + 1)) / 100;
  const equivalentNarcoticDepth = getEquivalentNarcosisDepthForDepth(
    depth,
    tankGases.nitrogen.percentage,
    tankGases.oxygen.percentage,
    appSettings.isOxygenNarcotic
  );

  //Assessing if gas is safe
  const isPartialPressureSafe =
    oxygenPartialPressure >= appSettings.lowestOxygenPartialPressure &&
    oxygenPartialPressure <= appSettings.highestOxygenPartialPressure;
  const isDepthNarcotic =
    equivalentNarcoticDepth > appSettings.equivalentNarcoticDepth;
  const isGasMixSafe = !isDepthNarcotic && isPartialPressureSafe;

  return {
    equivalentNarcoticDepth,
    isPartialPressureSafe,
    isDepthNarcotic,
    isGasMixSafe,
    oxygenPartialPressure,
  };
};
