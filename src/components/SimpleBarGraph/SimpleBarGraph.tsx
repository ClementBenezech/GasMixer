import * as S from "./SimpleBarGraph.style";
import { SimpleBarGraphProps } from "./types";

const SimpleBarGraph = ({
  zones,
  title,
  dangerIcon,
  editParameterComponent,
  targetName,
  ...restProps
}: SimpleBarGraphProps) => {
  const RenderedBars = zones.map((zone) => {
    const barWidth = zone.end - zone.start;
    const shouldBarBeDisplayed = zone.end > 0 && zone.start < 300;
    const lowestBarWidthToShowIcon = 20;
    const lowestBarWidthToShowLabel = 100;
    return shouldBarBeDisplayed ? (
      <S.Bar color={zone.color} width={barWidth.toString()}>
        {zone.danger && barWidth > lowestBarWidthToShowIcon && dangerIcon}
        {zone.danger &&
          barWidth > lowestBarWidthToShowLabel &&
          zone.dangerLabel}
        {!zone.danger && barWidth > lowestBarWidthToShowIcon && (
          <i className="fa-regular fa-circle-check"></i>
        )}
        <S.DepthLabel>{`${zone.end} m`}</S.DepthLabel>
      </S.Bar>
    ) : (
      <S.Bar color={zone.color} width={"0"}></S.Bar>
    );
  });

  return (
    <S.BarChartContainer {...restProps}>
      <S.BarChartTitle>
        <S.GraphTitle>{title}</S.GraphTitle>
        {editParameterComponent}
        {targetName}
        <S.ParameterValue>
          {editParameterComponent.props.value}
        </S.ParameterValue>
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
