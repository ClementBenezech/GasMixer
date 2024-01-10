import { getMODforTargetPPO2 } from "../utils/functions";
import * as S from "./MODcomponent.style";

const MODcomponent = ({ OxygenPercentage }: { OxygenPercentage: number }) => {
  const MOD_PPO2_1_4 = getMODforTargetPPO2(1.4, OxygenPercentage);
  const MOD_PPO2_1_6 = getMODforTargetPPO2(1.6, OxygenPercentage);

  return (
    <S.ModContainer>
      <S.MODlabel>Max.operating depth</S.MODlabel>
      <S.MobileMODlabel>MOD</S.MobileMODlabel>
      <S.MODcard>
        <div>{` PP02 < 1.4`}</div>
        <S.MODValue background="orange">{MOD_PPO2_1_4} m</S.MODValue>
        <S.MODdiveType>Active phase</S.MODdiveType>
      </S.MODcard>
      <S.MODcard>
        <div>{` PPO2 < 1.6`}</div>
        <S.MODValue background="#ba0000">{MOD_PPO2_1_6} m</S.MODValue>
        <S.MODdiveType>Deco Stops</S.MODdiveType>
      </S.MODcard>
      <S.MessageCard>
        At {MOD_PPO2_1_6} meters, with this mix, Oxygen partial pressure becomes
        unsafe for most people, and can lead to seizures
      </S.MessageCard>
    </S.ModContainer>
  );
};

export default MODcomponent;
