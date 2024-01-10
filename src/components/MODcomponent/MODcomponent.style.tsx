import styled from "styled-components";

export const ModContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4vw;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  font-family: "Zen Dots";
  font-size: 3vw;
  border-radius: 0vw;
  overflow: visible;
  color: black;
  width: 75%;
  overflow: visible;
  box-sizing: border-box;
  align-items: center;
  border: 1px solid white;
  border-radius: 0.3vw;
  margin-top: 1.5vw;
  margin-bottom: 0.5vw;
  @media only screen and (max-width: 1024px) {
    flex-wrap: nowrap;
    gap: 5vh;

    height: 10vh;
    width: 96vw;
  }
`;

export const MODcard = styled.div`
  color: #dcdcdc;
  position: relative;
  font-size: 0.8vw;
  justify-content: space-between;
  padding: 0 1vw;
  display: flex;
  align-items: center;
  max-width: 15%;
  min-width: 15%;
  box-sizing: border-box;
  height: 100%;
  position: relative;
  @media only screen and (max-width: 1024px) {
    font-size: 1.5vh;
    min-width: 35%;
    max-width: 35%;
  }
`;

export const MODValue = styled.div<{
  background: string;
}>`
  height: 3vw;
  width: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  border-radius: 50%;
  & :nth-child(1) {
    background: #e43900;
    height: 3vh;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 1.5vh;
    height: 5vh;
    width: 5vh;
  }
`;

export const MessageCard = styled.div`
  color: #ffffff;
  font-size: 1vw;
  text-align: left;
  display: flex;
  align-items: center;
  min-width: 40%;
  max-width: 90%;
  padding: 0.1vw 1vw;
  font-size: 1vw;
  height: 100%;
  position: relative;
  box-sizing: border-box;
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
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MODlabel = styled.div`
  font-size: 0.8vw;
  white-space: break-spaces;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    font-size: 2vh;
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MobileMODlabel = styled.div`
  font-size: 2vh;
  white-space: break-spaces;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  color: #ffffff;
  display: none;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    display: flex;
  }
`;

export const MODdiveType = styled.div`
  font-size: 0.9vw;
  white-space: break-spaces;
  min-width: min-content;
  max-width: 8vw;
  background: black !important;
  position: absolute;
  top: -1vw;
  z-index: 1;
  left: 0.6vw;
  text-align: right;
  box-sizing: border-box;
  padding: 0.2vw;
  border-radius: 0.2vw;
  @media only screen and (max-width: 1024px) {
    font-size: 1.3vh;
    white-space: nowrap;
    top: 6px;
  }
`;
