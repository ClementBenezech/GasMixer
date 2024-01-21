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
      color:
        "repeating-linear-gradient(45deg, #2c9bf5 10px, #1c86ff 10px, #1c86ff 20px, #2c9bf5 20px, #2c9bf5 30px, #1c86ff 30px, #1c86ff 40px)",
      name: "Nitrogen",
    },
    oxygen: {
      percentage: oxygen,
      color:
        "repeating-linear-gradient(135deg, #f52c54 10px, #c71c58 10px, #c71c58 20px, #f52c54 20px, #f52c54 30px, #c71c58 30px, #c71c58 40px);",
      name: "Oxygen",
    },
    helium: {
      percentage: helium,
      color:
        "repeating-linear-gradient(45deg, #54f52c 10px, #1cc783 10px, #1cc783 20px, #54f52c 20px, #54f52c 30px, #1cc783 30px, #1cc783 40px)",
      name: "Helium",
    },
  };
};
