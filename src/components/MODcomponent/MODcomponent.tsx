import { getMODforTargetPPO2 } from "../utils/functions";
import * as S from "./MODcomponent.style";

const MODcomponent = ({ OxygenPercentage }: { OxygenPercentage: number }) => {
  const MOD_PPO2_1_4 = getMODforTargetPPO2(1.4, OxygenPercentage);
  const MOD_PPO2_1_6 = getMODforTargetPPO2(1.6, OxygenPercentage);

  return (
    <S.ModContainer>
      <S.MODcard>
        <div>Target PPO2</div>
        <S.MODlabel>Max.operating depth</S.MODlabel>
      </S.MODcard>
      <S.MODcard>
        <div>{` < 1.4`}</div>
        <div>{MOD_PPO2_1_4} m</div>
      </S.MODcard>
      <S.MODcard>
        <div>{` < 1.6`}</div>
        <div>{MOD_PPO2_1_6} m</div>
      </S.MODcard>
      <S.MessageCard>
        At {MOD_PPO2_1_6} meters, with this mix, Oxygen partial pressure becomes
        unsafe for most people, and can lead to seizures
      </S.MessageCard>
    </S.ModContainer>
  );
};

export default MODcomponent;
