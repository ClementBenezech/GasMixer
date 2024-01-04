import * as S from "./DiveTank.style";

import { DiveTankProps } from "./types";

const DiveTank = ({ gases }: DiveTankProps) => {
  const TankGases = gases.map((gas) => {
    return gas.percentage > 0 ? (
      <S.GasPercentageBar percentage={gas.percentage} gasColor={gas.color}>
        <S.GasPercentageAmount>{`${gas.percentage}%`}</S.GasPercentageAmount>
      </S.GasPercentageBar>
    ) : null;
  });

  const GasNames = gases.map((gas) => {
    return gas.percentage > 0 ? (
      <S.GasName percentage={gas.percentage} gasColor={gas.color}>
        {gas.name}
      </S.GasName>
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
      <S.GasNamesContainer>{GasNames}</S.GasNamesContainer>
    </S.MainContainer>
  );
};

export default DiveTank;
