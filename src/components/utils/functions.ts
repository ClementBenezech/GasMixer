export const getMODforTargetPPO2 = (PPO2: number, O2Percentage: number) => {
  return Math.floor((PPO2 / (O2Percentage / 100) - 1) * 10);
};

export const getDepthForEquivalentNarcosisDepth = (
  desiredEquivalentNarcoticDepth: number,
  nitrogenPercentage: number,
  oxygenPercentage: number,
  oxygenIsNarcotic: boolean
) => {
  const N2_PARTIALPRESSURE_IN_AIR_AT_1ATM = 0.79;
  const O2_PARTIALPRESSURE_IN_AIR_AT_1ATM = 0.21;
  const TotalNarcoticGasesPartialPressureInAir = oxygenIsNarcotic
    ? N2_PARTIALPRESSURE_IN_AIR_AT_1ATM + O2_PARTIALPRESSURE_IN_AIR_AT_1ATM
    : N2_PARTIALPRESSURE_IN_AIR_AT_1ATM;
  const TotalNarcoticGasesPartialPressureInMix = oxygenIsNarcotic
    ? nitrogenPercentage + oxygenPercentage
    : nitrogenPercentage;
  const NarcoticRatio =
    1 +
    (TotalNarcoticGasesPartialPressureInMix / 100 -
      TotalNarcoticGasesPartialPressureInAir) /
      TotalNarcoticGasesPartialPressureInAir;

  const maxDepthToComplyWithEND =
    desiredEquivalentNarcoticDepth / NarcoticRatio;

  return maxDepthToComplyWithEND;
};

export const getEquivalentNarcosisDepthForDepth = (
  depth: number,
  nitrogenPercentage: number,
  oxygenPercentage: number,
  oxygenIsNarcotic: boolean
) => {
  const N2_PARTIALPRESSURE_IN_AIR_AT_1ATM = 0.79;
  const O2_PARTIALPRESSURE_IN_AIR_AT_1ATM = 0.21;
  const TotalNarcoticGasesPartialPressureInAir = oxygenIsNarcotic
    ? N2_PARTIALPRESSURE_IN_AIR_AT_1ATM + O2_PARTIALPRESSURE_IN_AIR_AT_1ATM
    : N2_PARTIALPRESSURE_IN_AIR_AT_1ATM;
  const TotalNarcoticGasesPartialPressureInMix = oxygenIsNarcotic
    ? nitrogenPercentage + oxygenPercentage
    : nitrogenPercentage;
  const NarcoticRatio =
    1 +
    (TotalNarcoticGasesPartialPressureInMix / 100 -
      TotalNarcoticGasesPartialPressureInAir) /
      TotalNarcoticGasesPartialPressureInAir;

  const EquivalentNarcosisDepth = Math.round(depth * NarcoticRatio);

  return EquivalentNarcosisDepth;
};

export const getTankGases = ({
  oxygen,
  nitrogen,
  helium,
}: {
  oxygen: number;
  nitrogen: number;
  helium: number;
}) => {
  console.log(oxygen);
  return {
    nitrogen: {
      percentage: nitrogen,
      color: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #0fa7f4 60%)",
      name: "Nitrogen",
    },
    oxygen: {
      percentage: oxygen,
      color: "linear-gradient(0deg, rgba(255,255,255,0) 0%, #d30051 60%)",
      name: "Oxygen",
    },
    helium: {
      percentage: helium,
      color: "linear-gradient(0deg, rgba(255,255,255,0) 0%, #00d378 60%)",
      name: "Helium",
    },
  };
};
