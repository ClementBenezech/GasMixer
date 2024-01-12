import * as S from "./SimpleBarGraph.style";
import skull from "/home/clement/DiveFacts/src/assets/skull-crossbones-solid.svg";

const SimpleBarGraph = ({ zones, title, dangerIcon }) => {
  const RenderedBars = zones.map((zone, index) => {
    const barWidth = zone.end - zone.start;
    return zone.end > 0 && zone.start < 300 ? (
      <S.Bar
        zindex={(zones.length - index).toString()}
        color={zone.color}
        width={barWidth.toString()}
      >
        {zone.danger && barWidth > 5 && dangerIcon}
        {!zone.danger && <i className="fa-regular fa-circle-check"></i>}
        <S.DepthLabel>{`${zone.end} m`}</S.DepthLabel>
      </S.Bar>
    ) : (
      <S.Bar
        zindex={(zones.length - index).toString()}
        color={zone.color}
        width={"0"}
      ></S.Bar>
    );
  });

  return (
    <S.BarChartContainer>
      <S.BarChartTitle>
        {title}
        <i className="fa-solid fa-gear"></i>
      </S.BarChartTitle>
      <S.ScaleContainer>
        <div>0 m</div>
        <div>300 m</div>
      </S.ScaleContainer>

      <S.BarChartBarContainer>{RenderedBars}</S.BarChartBarContainer>
    </S.BarChartContainer>
  );
};

export default SimpleBarGraph;
