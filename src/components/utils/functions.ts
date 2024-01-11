export const getMODforTargetPPO2 = (PPO2: number, O2Percentage: number) => {
  return Math.floor((PPO2 / (O2Percentage / 100) - 1) * 10);
};

export const getDepthForEquivalentNarcosisDepth = (
  desiredEquivalentNarcoticDepth: number,
  nitrogenPercentage: number
) => {
  const N2_PARTIALPRESSURE_IN_AIR_AT_1ATM = 0.79;
  const NarcoticRatio =
    1 +
    (nitrogenPercentage / 100 - N2_PARTIALPRESSURE_IN_AIR_AT_1ATM) /
      N2_PARTIALPRESSURE_IN_AIR_AT_1ATM;

  const maxDepthToComplyWithEND =
    desiredEquivalentNarcoticDepth / NarcoticRatio;

  return maxDepthToComplyWithEND;
};

export const getEquivalentNarcosisDepthForDepth = (
  depth: number,
  nitrogenPercentage: number
) => {
  const N2_PARTIALPRESSURE_IN_AIR_AT_1ATM = 0.79;
  const NarcoticRatio =
    1 +
    (nitrogenPercentage / 100 - N2_PARTIALPRESSURE_IN_AIR_AT_1ATM) /
      N2_PARTIALPRESSURE_IN_AIR_AT_1ATM;

  const EquivalentNarcosisDepth = Math.round(depth * NarcoticRatio);

  return EquivalentNarcosisDepth;
};
