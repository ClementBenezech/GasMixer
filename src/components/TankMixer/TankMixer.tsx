import DiveTank from "../DiveTank/DiveTank";
import GasAnalysis from "../GasAnalysis/GasAnalysis";
import { useSlider } from "./useSlider";
import * as S from "./TankMixer.style";
import { getTankGases } from "../utils/functions";

const TankMixer = () => {
  const oxygenSliderState = useSlider({
    id: "OxygenSlider",
    min: 5,
    max: 100,
    type: "range",
    step: 1,
  });

  const heliumSliderState = useSlider({
    id: "HeliumSlider",
    min: 0,
    max: oxygenSliderState.otherGasMax,
    type: "range",
    step: 1,
    defaultState: 0,
  });

  // If all the nitrogen is out of the mix, oxygen will 'push out' helium.
  if (heliumSliderState.value + oxygenSliderState.value > 100) {
    heliumSliderState.setGasValue(100 - oxygenSliderState.value);
  }

  const gasPercentages = {
    oxygen: oxygenSliderState.value,
    nitrogen: 100 - heliumSliderState.value - oxygenSliderState.value,
    helium: heliumSliderState.value,
  };

  const TankGases = getTankGases(gasPercentages);
  console.log(TankGases);

  return (
    <S.GlobalContainer>
      <S.TankMixerContainer>
        <S.TankAndSliderContainer>
          <S.SlidersContainer>
            <S.SliderName>{`Oxygen: ${gasPercentages.oxygen} %`}</S.SliderName>
            <S.GasMixerSlider {...oxygenSliderState} />
            <S.SliderName> {`Helium: ${gasPercentages.helium} %`}</S.SliderName>
            <S.GasMixerSlider {...heliumSliderState} />
          </S.SlidersContainer>
          <S.DiveTankContainer>
            <DiveTank gases={TankGases} />
          </S.DiveTankContainer>
        </S.TankAndSliderContainer>
      </S.TankMixerContainer>
      <GasAnalysis tankGases={TankGases} />
    </S.GlobalContainer>
  );
};

export default TankMixer;
