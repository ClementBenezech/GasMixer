export const getPPO2ZOnes = (
  shallowestSafeOperatingDepth: number,
  deepestSafeOperatingDepth: number
) => {
  return [
    {
      start: 0,
      end: shallowestSafeOperatingDepth,
      color: "linear-gradient(180deg, #6f00ff 70%, #e1e1e1 100%)",
      danger: true,
    },
    {
      start: shallowestSafeOperatingDepth,
      end: deepestSafeOperatingDepth,
      color: "linear-gradient(140deg, #e1e1e1 10%, #00d773 50%)",
    },
    {
      start: deepestSafeOperatingDepth,
      end: 300,
      color: "linear-gradient(140deg, #e1e1e1 10%, #ff6e6e 50%)",
      danger: true,
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
      color: "linear-gradient(140deg, #e1e1e1 10%, #00d773 50%)",
    },
    {
      start:
        currentGasNitrogenPercentage > 0 && maxNarcosisDepth < 300
          ? maxNarcosisDepth
          : 300,
      end: 300,
      color: "linear-gradient(140deg, #e1e1e1 10%, #ff906e 50%)",
      danger: true,
    },
  ];
};
