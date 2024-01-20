import styled from "styled-components";

export const BarChartContainer = styled.div`
  width: 98%;
  height: min-content;
  border-radius: 0.5vh;
  box-sizing: border-box;
  margin-bottom: 1vh;
  padding-bottom: 2vh;
  opacity: 1;
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
    height: 2vh;
    text-align: left;
    white-space: nowrap;
    flex-wrap: nowrap;
  }
`;
export const BarChartBarContainer = styled.div`
  height: 6vh;
  display: flex;
  flex-direction: row;
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
}>`
  height: 80%;
  width: ${(props) => props.width}%;
  max-width: ${(props) => props.width}%;
  background: ${(props) => props.color ?? "red"};
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 2vh;
  box-shadow: 0px 1px 1px;
  box-sizing: border-box;

  & > i {
    padding: 1vh;

    font-size: 3vh;
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
  margin-top: 2vh;

  @media only screen and (max-width: 1024px) {
  }
`;

export const InputValue = styled.input`
  width: 14%;
  font-size: 1.5vh;
`;

export const ParameterValueAndUnit = styled.div`
  width: min-content;
  box-sizing: border-box;
  border-radius: 0.5vh;
  display: flex;

  justify-content: center;
  overflow: hidden;
  width: min-content;
  margin-right: 1vw;
  flex-wrap: wrap;

  @media only screen and (max-width: 1024px) {
    width: 10vw;
    flex-wrap: wrap;
  }
`;

export const ParameterValue = styled.div`
  background: orange;
  width: 100%;
  text-align: center;
  padding: 0 0.5vh;
  font-size: 1.5vw;
  @media only screen and (max-width: 1024px) {
    font-size: 1.7vh;
  }
`;

export const ParameterUnit = styled.div`
  font-size: 1vw;
  background: white;
  color: black;
  width: 100%;
  text-align: center;
  padding: 0 0.5vh;
  @media only screen and (max-width: 1024px) {
    font-size: 1.5vh;
  }
`;

export const GraphTitle = styled.div`
  width: 29%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto";
  @media only screen and (max-width: 1024px) {
    width: 60%;

    margin-right: 2vw;
  }
`;

export const GraphEditParameter = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`;
