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
  const [state, setslide] = useState(defaultState);
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.value) {
      console.log("setting level", e.target.value);
      //setslide(e.target.value);
      setslide(parseInt(e.target.value));
    }
  };

  const props = {
    type: "range",
    id,
    min,
    max,
    step: step,
    value: state,
    orient: "vertical",
    onChange: handlechange,
  };
  return props;
};
