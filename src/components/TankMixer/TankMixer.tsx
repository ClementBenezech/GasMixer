import DiveTank from "../DiveTank/DiveTank";
import React from "react";
import OxygenPartialPressure from "../OxygenPartialPressure/OxygenPartialPressure";
import { useSlider } from "./useSlider";
import * as S from "./TankMixer.style";
import MODcomponent from "../MODcomponent/MODcomponent";

const TankMixer = () => {
  const sliderState = useSlider({
    id: "OxygenSlider",
    min: 5,
    max: 100,
    type: "range",
    step: 1,
  });

  const TankGases = React.useMemo(
    () => [
      {
        percentage: 100 - sliderState.value,
        color: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #0fa7f4 60%)",
        name: "Nitrogen",
      },
      {
        percentage: sliderState.value,
        color: "linear-gradient(0deg, rgba(255,255,255,0) 0%, #d30051 60%)",
        name: "Oxygen",
      },
    ],
    [sliderState]
  );

  return (
    <S.GlobalContainer>
      <OxygenPartialPressure oxygenPercentage={sliderState.value} />
      <MODcomponent OxygenPercentage={sliderState.value} />
      <S.TankMixerContainer>
        <S.TankAndSliderContainer>
          <S.GasMixerSlider {...sliderState} />
          <DiveTank gases={TankGases} />
        </S.TankAndSliderContainer>
      </S.TankMixerContainer>
    </S.GlobalContainer>
  );
};

export default TankMixer;
