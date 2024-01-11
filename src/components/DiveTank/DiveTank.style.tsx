import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const TankContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 0.5vw;
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 1024px) {
  }
`;

export const ValveOutline = styled.div`
  height: 2vw;
  width: 1.5vw;
  border: 6px solid white;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    border: 2px solid white;
  }
`;

export const ORing = styled.div`
  height: 1vh;
  width: 1vh;
  border: 2px solid silver;
  border-radius: 50%;
  @media only screen and (max-width: 1024px) {
    height: 0.5vh;
    width: 0.5vh;
  }
`;

export const TankOutline = styled.div`
  border-radius: 20% 20% 10% 10%;
  height: 45vh;
  width: 100%;
  border: 0.5vw solid white;
  background-color: #9d9d9d;
  box-sizing: border-box;
  overflow: hidden;
  @media only screen and (max-width: 1024px) {
    height: 45vw;
    width: 15vw;
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
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  @media only screen and (max-width: 1024px) {
    font-size: 2vh;
  }
`;

export const GasName = styled.div<{ percentage?: number; gasColor?: string }>`
  width: 100%;
  box-sizing: border-box;
  height: ${(props) => props.percentage}%;
  color: ${(props) => props.gasColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Zen Dots";
  font-size: 1.5vw;
  white-space: nowrap;
  display: none;
  & > * {
    background: black;
    border-radius: 1vw;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 3vw;
  }
`;
