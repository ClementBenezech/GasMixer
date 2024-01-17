import * as S from "./SimpleBarGraph.style";
import { DataContext } from "../../AppContext";
import { Zones } from "../GasAnalysis/types";

export type EditParameter = {
  initialValue: number;
  setValue: (context: DataContext) => void;
  step: number;
  targetParameter: string;
  min: number;
  max: number;
  inputType: string;
};

export type SimpleBarGraphInnerProps = {
  zones: Zones;
  title: string;
  dangerIcon: JSX.Element;
  editParameterComponent: JSX.Element;
};

export type SimpleBarGraphPassedProps = React.HTMLAttributes<HTMLDivElement>;
export type SimpleBarGraphProps = SimpleBarGraphInnerProps &
  SimpleBarGraphPassedProps;

const SimpleBarGraph = ({
  zones,
  title,
  dangerIcon,
  editParameterComponent,
  ...restProps
}: SimpleBarGraphProps) => {
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
    <S.BarChartContainer {...restProps}>
      <S.BarChartTitle>
        <S.GraphTitle>{title}</S.GraphTitle>
        <S.ParameterValue>
          {editParameterComponent.props.value}
        </S.ParameterValue>
        {editParameterComponent}
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
