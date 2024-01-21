import DiveTank from "../DiveTank/DiveTank";
import GasAnalysis from "../GasAnalysis/GasAnalysis";
import { useSlider } from "./useSlider";
import * as S from "./TankMixer.style";
import { getTankGases } from "../utils/functions";
import { useEffect, useState } from "react";
import { AppContext, DataContext, defaultContext } from "../../AppContext";
import { dangerColor } from "../utils/constants";

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
              <S.SliderName>
                {`Oxygen: ${appData.gasPercentages.oxygen} %`}
              </S.SliderName>
              <S.GasMixerSlider {...oxygenSliderState} />
              <S.NarcoticOxygenContainer>
                <label>Consider narcotic</label>
                <input
                  checked={appData.appSettings.isOxygenNarcotic ? true : false}
                  type="checkbox"
                  onChange={(e) => {
                    const newSettings = {
                      ...appData.appSettings,
                      isOxygenNarcotic: e.currentTarget.checked,
                    };
                    console.log(newSettings);
                    const newContext = { ...appData, appSettings: newSettings };
                    setAppData(newContext);
                  }}
                ></input>
              </S.NarcoticOxygenContainer>
              <S.SliderName>
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
        <S.AppTitleContainer>
          <S.AppTitle color="White">
            <i className="fa-solid fa-user-secret"></i>
          </S.AppTitle>
          <S.AppTitle color={dangerColor}>{`Gas`}</S.AppTitle>
          <S.AppTitle color="White">{`Crafter`}</S.AppTitle>

          <S.AppInfo>
            <S.Disclaimer>{`For education only.`}</S.Disclaimer>
            <S.Disclaimer color="red">{`DO NOT USE to plan dives!`}</S.Disclaimer>
            <S.Disclaimer>
              © Clement Benezech 2024{" "}
              <a href="mailto:clement.benezech@gmail.com">
                <i className="fa-regular fa-envelope"></i>
              </a>{" "}
            </S.Disclaimer>
          </S.AppInfo>
        </S.AppTitleContainer>
      </S.GlobalContainer>
    </AppContext.Provider>
  );
};

export default TankMixer;
