import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedLineSeries,
  AnimatedAreaSeries,
  Annotation,
  AnnotationConnector,
  AnnotationCircleSubject,
  XYChart,
  Tooltip,
  AnnotationLabel,
} from "@visx/xychart";

import { getMODforTargetPPO2 } from "../utils/functions";
import styled from "styled-components";

const ChartContainer = styled.div`
  width: 83%;
  padding-left: 1vw;
  padding-top: 1vw;
  border: 1px solid white;
  border-radius: 1vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
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
  const MOD_PPO2_0_18 = getMODforTargetPPO2(0.18, PPO2DataSet[0].x * 100);
  console.log(PPO2DataSet[0].x * 100);
  console.log(MOD_PPO2_1_6);

  return (
    <ChartContainer>
      <XYChart
        height={360}
        xScale={{ type: "linear", domain: [0, 11] }}
        yScale={{ type: "linear", domain: [ScalesMaxValues.y, 0] }}
      >
        <AnimatedAxis
          orientation="top"
          stroke="red"
          labelProps={{
            fill: "orange",
            fontWeight: "bold",
          }}
          tickLabelProps={{
            fill: "white",
            fontWeight: "bold",
          }}
          label="Partial pressure (ATM)"
          labelOffset={16}
          hideZero
        />
        <AnimatedAxis
          orientation="left"
          tickStroke="blue"
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
          stroke="limegreen"
          {...accessors}
        ></AnimatedLineSeries>

        {MOD_PPO2_1_6 < 100 && (
          <>
            <AnimatedAreaSeries
              dataKey="Danger Zone"
              data={[
                { x: 0, y: MOD_PPO2_1_6 },
                { x: 11, y: MOD_PPO2_1_6 },
                { x: 11, y: ScalesMaxValues.y },
                { x: 0, y: ScalesMaxValues.y },
              ]}
              fill="#be0000d5"
              color="pink"
              name="DEATH ZONE"
              lineProps={{
                stroke: "white",
                strokeDasharray: "5, 5",
              }}
              {...accessors}
            ></AnimatedAreaSeries>
            <Annotation
              dataKey="PPO2@depth"
              datum={{
                x: 1.6, // x offset of label from subject
                y: MOD_PPO2_1_6,
              }}
              dx={50}
              dy={50}
              {...accessors}
            >
              <AnnotationLabel
                title={`PPO2 is too high to breath from ${MOD_PPO2_1_6} meters!`}
                subtitle=""
                showAnchorLine={true}
                backgroundFill="#fffefd"
              />
              <AnnotationCircleSubject stroke="white" />
              {/** Connect label to CircleSubject */}
              <AnnotationConnector stroke="white" />
            </Annotation>
          </>
        )}

        {MOD_PPO2_0_18 > 0 && (
          <>
            <AnimatedAreaSeries
              dataKey="Danger Zone low"
              data={[
                { x: 0, y: MOD_PPO2_0_18 },
                { x: 11, y: MOD_PPO2_0_18 },
                { x: 11, y: 0 },
                { x: 0, y: 0 },
              ]}
              fill="#be0000d5"
              color="pink"
              name="DEATH ZONE"
              lineProps={{
                stroke: "white",
                strokeDasharray: "5, 5",
              }}
              {...accessors}
            ></AnimatedAreaSeries>
            <Annotation
              dataKey="PPO2@depth"
              datum={{
                x: 0.18, // x offset of label from subject
                y: MOD_PPO2_0_18,
              }}
              dx={70}
              dy={70}
              {...accessors}
            >
              <AnnotationLabel
                title={`PPO2 is too low to breath above ${MOD_PPO2_0_18} meters!`}
                subtitle=""
                showAnchorLine={true}
                backgroundFill="#ffffff"
                anchorLineStroke="orange"
              />
              {/** Draw circle around point */}
              <AnnotationCircleSubject stroke="white" />
              {/** Connect label to CircleSubject */}
              <AnnotationConnector stroke="white" />
            </Annotation>
          </>
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
