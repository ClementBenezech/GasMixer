import { dangerColor, safeColor } from "../utils/constants";
import { Zones } from "./types";

export const getPPO2ZOnes = (
  shallowestSafeOperatingDepth: number,
  deepestSafeOperatingDepth: number
): Zones => {
  return [
    {
      start: 0,
      end: shallowestSafeOperatingDepth,
      color: dangerColor,
      danger: true,
      dangerLabel: "Hypoxia",
    },
    {
      start: shallowestSafeOperatingDepth,
      end: deepestSafeOperatingDepth,
      color: safeColor,
    },
    {
      start: deepestSafeOperatingDepth,
      end: 300,
      color: dangerColor,
      danger: true,
      dangerLabel: "Toxicity",
    },
  ];
};

export const getNarcosisZones = (
  currentGasNitrogenPercentage: number,
  maxNarcosisDepth: number
) => {
  return [
    {
      start: 0,
      end:
        currentGasNitrogenPercentage > 0 && maxNarcosisDepth < 300
          ? maxNarcosisDepth
          : 300,
      color: safeColor,
    },
    {
      start:
        currentGasNitrogenPercentage > 0 && maxNarcosisDepth < 300
          ? maxNarcosisDepth
          : 300,
      end: 300,
      color: "#be45be",
      danger: true,
      dangerLabel: "Narcosis",
    },
  ];
};
