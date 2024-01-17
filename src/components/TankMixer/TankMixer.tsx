import DiveTank from "../DiveTank/DiveTank";
import GasAnalysis from "../GasAnalysis/GasAnalysis";
import { useSlider } from "./useSlider";
import * as S from "./TankMixer.style";
import { getTankGases } from "../utils/functions";
import { useEffect, useState } from "react";
import { AppContext, DataContext, defaultContext } from "../../AppContext";

const TankMixer = () => {
  const [appData, setAppData] = useState(defaultContext);

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

  useEffect(() => {
    //Updating the gas context

    const gasPercentages = {
      oxygen: oxygenSliderState.value,
      nitrogen: 100 - heliumSliderState.value - oxygenSliderState.value,
      helium: heliumSliderState.value,
    };

    const TankGases = getTankGases(gasPercentages);
    setAppData({
      gasPercentages: gasPercentages,
      tankGases: TankGases,
      appSettings: appData.appSettings,
    });
  }, [heliumSliderState.value, oxygenSliderState.value, appData.appSettings]);

  return (
    <AppContext.Provider
      value={{
        appData: appData,
        setAppData: (data: DataContext) => setAppData(data),
      }}
    >
      <S.GlobalContainer>
        <S.TankMixerContainer>
          <S.TankAndSliderContainer>
            <S.SlidersContainer>
              <S.SliderName>{`Oxygen: ${appData.gasPercentages.oxygen} %`}</S.SliderName>
              <S.GasMixerSlider {...oxygenSliderState} />
              <S.SliderName>
                {" "}
                {`Helium: ${appData.gasPercentages.helium} %`}
              </S.SliderName>
              <S.GasMixerSlider {...heliumSliderState} />
            </S.SlidersContainer>
            <S.DiveTankContainer>
              <DiveTank />
            </S.DiveTankContainer>
          </S.TankAndSliderContainer>
        </S.TankMixerContainer>
        <GasAnalysis />
      </S.GlobalContainer>
    </AppContext.Provider>
  );
};

export default TankMixer;
