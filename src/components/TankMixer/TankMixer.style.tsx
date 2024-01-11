import styled from "styled-components";

export const TankMixerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 10%;
    overflow: hidden;
    flex-direction: column-reverse;
  }
`;

export const GlobalContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  padding: 2vw;
  @media only screen and (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

export const TankAndSliderContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 12vw;
  padding: 1vw;
  @media only screen and (max-width: 1024px) {
    position: relative;
    height: 20vh;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SlidersContainer = styled.div`
  display: flex;
  height: 30vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 10vw;
  font-size: 1.2vw;
  padding: 1vw;
  @media only screen and (max-width: 1024px) {
    width: 70vw;
    height: 16vh;
    & input {
      width: 100%;
    }
  }
`;

export const SliderName = styled.div`
  font-size: 2vh;
  padding: 1vw;
  @media only screen and (max-width: 1024px) {
    font-size: 2vh;
    padding: 0.2vh;
    width: 100%;
    text-align: left;
  }
`;

export const DiveTankContainer = styled.div`
  width: 100%;
  @media only screen and (max-width: 1024px) {
    width: 20%;
    height: 100%;
  }
`;
export const GasMixerSlider = styled.input`
  -webkit-appearance: none;
  background: transparent;

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
  }
`;
