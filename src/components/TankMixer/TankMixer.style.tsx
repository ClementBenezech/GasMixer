import styled from "styled-components";

export const TankMixerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 20%;
    overflow: hidden;
    flex-direction: column-reverse;
    justify-content: flex-start;
  }
`;

export const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media only screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    width: 100%;
    flex-wrap: nowrap;
    overflow-x: hidden;
    justify-content: space-between;
    height: 92vh;
  }
`;

export const TankAndSliderContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  right: 3vw;
  top: 0;
  width: 12vw;
  padding: 5vh 1vw 10vh 1vw;
  box-sizing: border-box;
  @media only screen and (max-width: 1024px) {
    position: relative;
    right: 0;
    height: 100%;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 1vh 2vw;
  }
`;

export const SlidersContainer = styled.div`
  display: flex;
  height: 20vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  font-size: 1.2vw;
  padding: 1vw;
  @media only screen and (max-width: 1024px) {
    width: 70vw;
    height: 12vh;
    & input {
      width: 100%;
    }
  }
`;

export const SliderName = styled.div`
  font-size: 2vh;
  padding: 1vw;
  font-weight: bold;
  @media only screen and (max-width: 1024px) {
    font-size: 2vh;
    padding: 0.2vh;
    width: 100%;
    text-align: left;
  }
`;

export const AppTitleContainer = styled.div`
  padding: 0.5vh 2vw;

  font-weight: bold;
  font-family: "Zen Dots";
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  @media only screen and (max-width: 1024px) {
    padding: 0.5vh 3vw;
  }
`;

export const AppTitle = styled.div<{ color?: string }>`
  color: ${(props) => props.color ?? "white"};
  height: min-content;
  font-size: 3vw;
  @media only screen and (max-width: 1024px) {
    font-size: 2vh;
  }
`;

export const Disclaimer = styled.div<{ color?: string }>`
  font-size: 0.8vw;
  height: 30%;
  color: ${(props) => props.color ?? "white"};
  @media only screen and (max-width: 1024px) {
    font-size: 1.2vh;
  }
`;

export const AppInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 1vh;
  padding: 0.3vh;
  width: 100%;
`;

export const DiveTankContainer = styled.div`
  width: 100%;
  @media only screen and (max-width: 1024px) {
    width: 20%;
    height: 100%;
  }
`;
export const GasMixerSlider = styled.input`
  /*   -webkit-appearance: none;

&::-moz-range-track {
  background: #ffffff;
  border-radius: 2vh;
  border: 1px solid white;
  width: 100%;
  height: 2vh;
}

&::-moz-range-thumb {
  border: none;
  height: 4vh;
  width: 4vh;
  border-radius: 50%;
  background: #11a8ff;
  margin-top: -1vh;
}

&::-webkit-slider-runnable-track {
  width: 100%;
  height: 2vh;
  background: #ffffff;
  border: 1px solid white;
  border-radius: 2vh;
}

&::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 4vh;
  width: 4vh;
  border-radius: 50%;
  background: #11a8ff;
  margin-top: -1vh;
}

&:focus {
  outline: none;
}

&:focus::-webkit-slider-runnable-track {
  background: #ccc;
} */
`;
