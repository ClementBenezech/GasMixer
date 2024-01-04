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

export const ModContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: min-content;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  font-family: "shrikhand";
  font-size: 3vw;
  border-radius: 2vw;
  overflow: hidden;
  color: black;
  margin-right: 2vw;
  width: 70%;
  align-items: center;

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
  @media only screen and (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 5vh;
    height: 30vh;
  }
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

export const MODcard = styled.div`
  color: #474747;
  font-size: 3vh;
  display: flex;
  align-items: flex-start;
  width: 30%;
  gap: 4;
  padding: 1.5vh;
  background: orange;
  height: 100%;
  &:nth-child(1) {
    background: white;
  }

  & > div {
    width: 100%;
    background: white;
    white-space: nowrap;
    padding: 1vh;
    border-radius: 1vh;
    &:nth-child(odd) {
      background: orange;
      color: white;
    }
  }
`;

export const MessageCard = styled.div`
  color: #474747;
  font-size: 2.5vh;
  text-align: left;
  display: flex;
  align-items: flex-start;
  width: 48%;
  gap: 4;
  padding: 1.5vh;
  width: 50%;
  background: white;
  font-size: 1vw;
  height: 100%;
  border-radius: 2vw;
  position: relative;
  left: -0.3vw;
  & > div {
    width: 100%;
    background: white;
    white-space: nowrap;
    padding: 1vh;
    border-radius: 1vh;
    &:nth-child(odd) {
      color: white;
    }
  }
`;
