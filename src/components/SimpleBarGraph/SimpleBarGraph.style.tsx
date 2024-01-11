import styled from "styled-components";

export const BarChartContainer = styled.div`
  width: 96%;
  height: min-content;
  border-radius: 0.5vh;
  box-sizing: border-box;
  margin-bottom: 1vh;
  border: 1px solid white;
  padding-bottom: 2vh;
`;

export const BarChartTitle = styled.div`
  height: 20%;
  text-align: left;
  font-size: 1.5vw;
  font-family: "Roboto";
  @media only screen and (max-width: 1024px) {
    font-size: 2vh;
    color: #ffffff;
    height: min-content;
    text-align: left;
    width: 100%;
    white-space: nowrap;
    border-radius: 1vh 1vh 0 0;
    border-bottom: 1px solid white;
    padding-left: 1vh;
    box-sizing: border-box;
  }
`;
export const BarChartBarContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 1024px) {
    height: 7vh;
    margin-top: 1vh;
    width: 96%;
    margin-left: 2%;
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
  width: 96%;
  margin-left: 2%;
  justify-content: space-between;
  height: 2vh;
  font-family: "Roboto";
`;
