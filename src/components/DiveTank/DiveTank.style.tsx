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
  border: 1vw solid white;
  overflow: hidden;
  background-color: white;
  @media only screen and (max-width: 1024px) {
    width: 30vw;
  }
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
  font-family: "Shrikhand";
  @media only screen and (max-width: 1024px) {
    font-size: 3vh;
  }
`;

export const GasNamesContainer = styled.div`
  margin-top: 6vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
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
  justify-content: flex-start;
  font-family: "Rubik Doodle Shadow";
  font-size: 4vh;
  white-space: nowrap;
  @media only screen and (max-width: 1024px) {
    font-size: 1.8vh;
  }
`;
