import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";

const useEditParametersComponentsProps = () => {
  const { appData, setAppData } = useContext(AppContext);

  const { appSettings } = appData;

  const [maxOxygenPartialPressure, setMaxOxygenPartialPressure] = useState(
    appSettings.highestOxygenPartialPressure
  );
  const [maxEquivalentNarcoticDepth, setMaxEquivalentNarcoticDepth] = useState(
    appSettings.equivalentNarcoticDepth
  );

  const editMaxNitrogen = {
    value: maxEquivalentNarcoticDepth,
    step: 5,
    min: 10,
    max: 120,
    type: "range",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
      const newSettings = {
        ...appData.appSettings,
        equivalentNarcoticDepth: parseInt(e.target.value),
      };
      console.log(newSettings);
      const newContext = { ...appData, appSettings: newSettings };
      setMaxEquivalentNarcoticDepth(parseInt(e.target.value));
      setAppData(newContext);
    },
  };

  const editMaxOxygen = {
    value: maxOxygenPartialPressure,
    type: "range",
    step: "0.01",
    min: 1.2,
    max: 1.8,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(parseFloat(e.target.value));
      console.log(appData.appSettings.highestOxygenPartialPressure);

      const newSettings = {
        ...appData.appSettings,
        highestOxygenPartialPressure: parseFloat(e.target.value),
      };
      const newContext = { ...appData, appSettings: newSettings };
      setAppData(newContext);
      setMaxOxygenPartialPressure(parseFloat(e.target.value));
    },
  };
  return { editMaxNitrogen, editMaxOxygen };
};

export default useEditParametersComponentsProps;
