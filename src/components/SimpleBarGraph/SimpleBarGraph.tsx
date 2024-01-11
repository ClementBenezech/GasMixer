import * as S from "./SimpleBarGraph.style";
import skull from "/home/clement/DiveFacts/src/assets/skull-crossbones-solid.svg";

const SimpleBarGraph = ({ zones, title, dangerIcon }) => {
  const RenderedBars = zones.map((zone, index) => {
    return zone.end > 0 ? (
      <S.Bar
        zindex={(zones.length - index).toString()}
        color={zone.color}
        width={(zone.end - zone.start).toString()}
      >
        {zone.danger && dangerIcon}
        {!zone.danger && <i className="fa-regular fa-circle-check"></i>}
        <S.DepthLabel>{`${zone.end}`}</S.DepthLabel>
      </S.Bar>
    ) : null;
  });

  return (
    <S.BarChartContainer>
      <S.BarChartTitle>{title}</S.BarChartTitle>
      <S.BarChartBarContainer>{RenderedBars}</S.BarChartBarContainer>
    </S.BarChartContainer>
  );
};

export default SimpleBarGraph;
