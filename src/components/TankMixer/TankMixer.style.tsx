import styled from "styled-components";

export const TankMixerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 5vh;
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
    flex-wrap: wrap;
    gap: 5vh;
  }
`;

export const TankAndSliderContainer = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 15vw;
`;

export const GasMixerSlider = styled.input`
  appearance: slider-vertical;
  width: 10vw;
  min-height: 40%;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  margin-left: 2.7vw;
  @media only screen and (max-width: 1024px) {
    width: 10vw;
  }

  &::-moz-range-thumb {
    height: 2vw;
    width: 8vw;
    border: 4px solid #21bcff;
    background: white;
    border-radius: 1vw;
    cursor: pointer;
  }
  &::-moz-range-track {
    background: #feffff65;
    height: 90%;
    width: 6vw;
    border-radius: 1vw;
  }
`;
