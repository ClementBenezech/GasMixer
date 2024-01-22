import { useState } from "react";

type sliderProps = {
  id: string;
  label?: string;
  min: number;
  max: number;
  type: string;
  step: number;
  defaultState?: number;
};

export const useSlider = ({
  min,
  max,
  defaultState = 21,
  id,
  step,
}: sliderProps) => {
  const [state, setState] = useState(defaultState);
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.value) {
      setState(parseInt(e.target.value));
    }
  };

  /*const oxygenPercentage = state;
  const heliumPercentage = 21 - state > 0 ? 21 - state : 0;
  const nitrogenPercentage = 100 - heliumPercentage - oxygenPercentage;*/

  const props = {
    type: "range",
    id,
    min,
    max,
    step: step,
    value: state,
    otherGasMax: 100 - state,
    //gasPercentages: [oxygenPercentage, nitrogenPercentage, heliumPercentage],
    orient: "horizontal",
    onChange: handlechange,
    setGasValue: setState,
  };
  return props;
};
