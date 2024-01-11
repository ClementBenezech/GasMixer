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
    width: 100vw;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
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
    height: 100%;
    & input {
      width: 100%;
    }
  }
`;

export const SliderName = styled.div`
  font-size: 1.2vw;
  padding: 1vw;
  @media only screen and (max-width: 1024px) {
    font-size: 1.5vh;
    padding: 1vh;
  }
`;

export const GasMixerSlider = styled.input``;
