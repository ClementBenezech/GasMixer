import styled from "styled-components";

export const BarChartContainer = styled.div`
  width: 100%;
  height: 25vh;
  border-radius: 1vh;
  box-sizing: border-box;
  margin-bottom: 1vh;
  padding: 3vh;
  @media only screen and (max-width: 1024px) {
    height: 15vh;
  }
`;

export const BarChartTitle = styled.div`
  height: 20%;
  text-align: left;
  font-size: 1.5vw;
  font-family: "Zen Dots";
  @media only screen and (max-width: 1024px) {
    font-size: 2vh;
    margin-bottom: 2vh;
  }
`;
export const BarChartBarContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: row;
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

  & > i {
    padding: 1vh;

    font-size: 4vh;
  }
`;

export const DepthLabel = styled.div`
  height: 4vh;
  width: 4vh;
  font-size: 1.7vh;
  position: absolute;
  right: -2vh;
  bottom: -4vh;
  white-space: nowrap;
  color: #ffffff;
  border-radius: 50%;
  padding: 0.1vh 0.1vw;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Zen Dots";
`;
