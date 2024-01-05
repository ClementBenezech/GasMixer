import styled from "styled-components";

export const ModContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: min-content;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  font-family: "Zen Dots";
  font-size: 3vw;
  border-radius: 0vw;
  overflow: visible;
  color: black;
  margin-right: 2vw;
  width: 78%;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 5vh;
  }
`;

export const MODcard = styled.div`
  color: #474747;
  position: relative;
  font-size: 2vh;
  display: flex;
  align-items: center;
  max-width: 30%;
  min-width: 25%;
  gap: 1;
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
    padding: 0.3vw;
    border-radius: 0vh;
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
  min-width: 20vw;
  max-width: 20vw;
  gap: 4;
  padding: 1.5vh;
  background: white;
  font-size: 1vw;
  height: 100%;
  border-radius: 0.5vw;
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

export const MODlabel = styled.div`
  font-size: 0.8vw;
  white-space: break-spaces;
  width: 100%;
  background: red;
`;

export const MODdiveType = styled.div`
  font-size: 0.9vw;
  white-space: break-spaces;
  min-width: min-content;
  max-width: 8vw;
  background: black !important;
  position: absolute;
  top: -3.5vh;
  z-index: -1;
  left: 0;
  text-align: right;
  box-sizing: border-box;
`;
