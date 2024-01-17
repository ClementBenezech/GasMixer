import styled from "styled-components";

export const BarChartContainer = styled.div`
  width: 98%;
  height: min-content;
  border-radius: 0.5vh;
  box-sizing: border-box;
  margin-bottom: 1vh;
  padding-bottom: 2vh;
  opacity: 0.8;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    margin-top: 1vh;
    padding-bottom: 0.5vh;
  }
`;

export const BarChartTitle = styled.div`
  height: 10%;
  text-align: left;
  font-size: 1.5vw;
  font-family: "Roboto";
  margin-left: 2%;
  width: 96%;
  box-sizing: border-box;
  border-radius: 1vh 1vh 0 0;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  font-family: "Roboto";
  @media only screen and (max-width: 1024px) {
    font-size: 2vh;
    color: white;
    height: min-content;
    text-align: left;
    white-space: nowrap;
  }
`;
export const BarChartBarContainer = styled.div`
  height: 6vh;
  display: flex;
  flex-direction: row;
  margin-top: 1vh;
  width: 96%;
  margin-left: 2%;
  @media only screen and (max-width: 1024px) {
  }
`;

export const DepthLabel = styled.div`
  height: 4vh;
  width: min-content;
  font-size: 1.7vh;
  position: absolute;
  right: -3vh;
  bottom: -4vh;
  white-space: nowrap;
  color: #ffffff;
  border-radius: 50%;
  padding: 0.1vh 0.1vw;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
`;

export const Bar = styled.div<{
  color?: string;
  width?: string;
  zindex?: string;
}>`
  height: 80%;
  width: ${(props) => props.width}%;
  background: ${(props) => props.color ?? "red"};
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: ${(props) => props.zindex};

  border-radius: 2vh;
  box-shadow: 0 2px 5px;

  & > i {
    padding: 1vh;

    font-size: 4vh;
  }

  &:last-child {
    ${DepthLabel} {
      display: none;
    }
  }
`;

export const ScaleContainer = styled.div`
  display: flex;
  font-size: 2vh;
  width: 96%;
  margin-left: 2%;
  height: 3vh;
  font-family: "Roboto";
  justify-content: space-between;

  @media only screen and (max-width: 1024px) {
  }
`;

export const InputValue = styled.input`
  width: 14%;
  font-size: 1.5vh;
`;

export const ParameterValue = styled.div`
  padding: 0 1vh;
  width: 19%;
  box-sizing: border-box;
  border-radius: 1vh;
  border: 1px solid white;
`;

export const GraphTitle = styled.div`
  width: 80%;

  font-family: "Roboto";
`;
