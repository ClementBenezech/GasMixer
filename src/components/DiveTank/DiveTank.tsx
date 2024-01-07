import * as S from "./DiveTank.style";

import { DiveTankProps } from "./types";

const DiveTank = ({ gases }: DiveTankProps) => {
  console.log(gases);
  const TankGases = gases.map((gas) => {
    return gas.percentage > 0 ? (
      <S.GasPercentageBar percentage={gas.percentage} gasColor={gas.color}>
        <S.GasPercentageAmount>
          <div>{`${gas.percentage}%`}</div>
          <S.GasName>{gas.name}</S.GasName>
        </S.GasPercentageAmount>
      </S.GasPercentageBar>
    ) : null;
  });

  return (
    <S.MainContainer>
      <S.TankContainer>
        <S.ValveOutline>
          <S.ORing />
        </S.ValveOutline>
        <S.TankOutline>{TankGases}</S.TankOutline>
      </S.TankContainer>
    </S.MainContainer>
  );
};

export default DiveTank;
