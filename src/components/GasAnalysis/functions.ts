import { Theme } from "../utils/constants";
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
