export const getMODforTargetPPO2 = (PPO2: number, O2Percentage: number) => {
  return Math.floor((PPO2 / (O2Percentage / 100) - 1) * 10);
};
