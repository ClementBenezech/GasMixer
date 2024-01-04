import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedLineSeries,
  AnimatedAreaSeries,
  XYChart,
  Tooltip,
} from "@visx/xychart";

import { getMODforTargetPPO2 } from "../utils/functions";
import styled from "styled-components";

const ChartContainer = styled.div`
  width: 70vw;
`;

export type DataPoint = {
  x: number;
  y: number;
};

export type PPO2chartData = { PPO2DataSet: DataPoint[] };

const accessors = {
  xAccessor: (d) => d.x,
  yAccessor: (d) => d.y,
};

const PPO2graph = ({ PPO2DataSet }: PPO2chartData) => {
  const ScalesMaxValues = PPO2DataSet[PPO2DataSet.length - 1];
  const MOD_PPO2_1_6 = getMODforTargetPPO2(1.6, PPO2DataSet[0].x * 100);
  console.log(PPO2DataSet[0].x * 100);
  console.log(MOD_PPO2_1_6);

  return (
    <ChartContainer>
      <XYChart
        height={400}
        xScale={{ type: "linear", domain: [0, ScalesMaxValues.x] }}
        yScale={{ type: "linear", domain: [0, ScalesMaxValues.y] }}
      >
        <AnimatedAxis
          orientation="bottom"
          stroke="orange"
          labelProps={{
            fill: "orange",
            fontWeight: "bold",
          }}
          tickLabelProps={{
            fill: "white",
            fontWeight: "bold",
          }}
          label="Partial pressure (ATM)"
          labelOffset={24}
        />
        <AnimatedAxis
          orientation="left"
          tickStroke="orange"
          stroke="orange"
          labelProps={{
            fill: "orange",
            fontWeight: "bold",
          }}
          tickLabelProps={{
            fill: "white",
            fontWeight: "bold",
          }}
          label="Depth (meters)"
          labelOffset={32}
        />
        <AnimatedGrid columns={false} numTicks={10} />
        <AnimatedLineSeries
          dataKey="PPO2@depth"
          data={PPO2DataSet}
          stroke="yellow"
          {...accessors}
        />
        {MOD_PPO2_1_6 < 100 && (
          <AnimatedAreaSeries
            dataKey="Danger Zone"
            data={[
              { x: 0, y: MOD_PPO2_1_6 },
              { x: ScalesMaxValues.x, y: MOD_PPO2_1_6 },
              { x: ScalesMaxValues.x, y: ScalesMaxValues.y },
              { x: 0, y: ScalesMaxValues.y },
            ]}
            fill="#be0000d5"
            renderLine={false}
            {...accessors}
          />
        )}

        <Tooltip
          snapTooltipToDatumX
          snapTooltipToDatumY
          showVerticalCrosshair
          showSeriesGlyphs
          renderTooltip={({ tooltipData, colorScale }) => (
            <div>
              <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
                {tooltipData.nearestDatum.key}
              </div>
              {accessors.xAccessor(tooltipData.nearestDatum.datum)}
              {", "}
              {accessors.yAccessor(tooltipData.nearestDatum.datum)}
            </div>
          )}
        />
      </XYChart>
    </ChartContainer>
  );
};

export default PPO2graph;
