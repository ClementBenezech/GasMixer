import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: min-content;
  justify-content: space-evenly;
  margin-right: 2vw;
  margin-left: 2vw;
  @media only screen and (max-width: 1024px) {
    width: 65vw;
    height: 100%;
  }
`;

export const TankContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 0.5vw;
  height: 100%;
`;

export const ValveOutline = styled.div`
  height: 50px;
  width: 40px;
  border: 6px solid white;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    height: 2vw;
    width: 2vw;
    border: 1vw solid white;
  }
`;

export const ORing = styled.div`
  height: 1vh;
  width: 1vh;
  border: 2px solid silver;
  border-radius: 50%;
`;

export const TankOutline = styled.div`
  border-radius: 20% 20% 10% 10%;
  height: 40vh;
  width: 20vh;
  border: 0.5vw solid white;
  overflow: hidden;
  background-color: #9d9d9d;
`;

export const GasPercentageBar = styled.div<{
  percentage?: number;
  gasColor: string;
}>`
  width: 100%;
  box-sizing: border-box;
  height: ${(props) => props.percentage}%;
  background: ${(props) => props.gasColor};
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GasPercentageAmount = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-sizing: border-box;
  color: white;
  font-size: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Zen Dots";
  @media only screen and (max-width: 1024px) {
    font-size: 3vh;
  }
`;

export const GasNamesContainer = styled.div`
  margin-top: 5vh;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  left: -20vh;
  bottom: -10vh;
  z-index: 2;
  @media only screen and (max-width: 1024px) {
    width: 50vh;
    height: 100%;
  }
`;

export const GasName = styled.div<{ percentage?: number; gasColor: string }>`
  width: 100%;
  box-sizing: border-box;
  height: ${(props) => props.percentage}%;
  color: ${(props) => props.gasColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Zen Dots";
  font-size: 3vh;
  white-space: nowrap;
  @media only screen and (max-width: 1024px) {
    font-size: 1.8vh;
  }
`;
