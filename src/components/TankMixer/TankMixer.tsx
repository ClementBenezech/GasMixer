import DiveTank from "../DiveTank/DiveTank";
import OxygenPartialPressure from "../OxygenPartialPressure/OxygenPartialPressure";
import { useSlider } from "./useSlider";
import * as S from "./TankMixer.style";

const TankMixer = () => {
  const oxygenSliderState = useSlider({
    id: "OxygenSlider",
    min: 5,
    max: 100,
    type: "range",
    step: 1,
  });

  console.log(oxygenSliderState.otherGasMax);

  const heliumSliderState = useSlider({
    id: "HeliumSlider",
    min: 0,
    max: oxygenSliderState.otherGasMax,
    type: "range",
    step: 1,
    defaultState: 0,
  });

  if (heliumSliderState.value + oxygenSliderState.value > 100) {
    heliumSliderState.setGasValue(100 - oxygenSliderState.value);
  }

  const gasPercentages = [
    oxygenSliderState.value,
    100 - heliumSliderState.value - oxygenSliderState.value,
    heliumSliderState.value,
  ];

  const TankGases = [
    {
      percentage: gasPercentages[1],
      color: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #0fa7f4 60%)",
      name: "Nitrogen",
    },
    {
      percentage: gasPercentages[0],
      color: "linear-gradient(0deg, rgba(255,255,255,0) 0%, #d30051 60%)",
      name: "Oxygen",
    },
    {
      percentage: gasPercentages[2],
      color: "linear-gradient(0deg, rgba(255,255,255,0) 0%, #00d378 60%)",
      name: "Helium",
    },
  ];

  return (
    <S.GlobalContainer>
      <S.TankMixerContainer>
        <S.TankAndSliderContainer>
          <S.SlidersContainer>
            {`Oxygen: ${gasPercentages[0]} %`}
            <S.GasMixerSlider {...oxygenSliderState} />
            {`Helium: ${gasPercentages[2]} %`}
            <S.GasMixerSlider {...heliumSliderState} />
          </S.SlidersContainer>
          <DiveTank gases={TankGases} />
        </S.TankAndSliderContainer>
      </S.TankMixerContainer>
      <OxygenPartialPressure
        oxygenPercentage={gasPercentages[0]}
        tankGases={TankGases}
      />
    </S.GlobalContainer>
  );
};

export default TankMixer;
