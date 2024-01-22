import { useState } from "react";
import ModalContainer from "../ModalContainer/ModalContainer";
import * as S from "./SimpleBarGraph.style";
import { SimpleBarGraphProps } from "./types";

const SimpleBarGraph = ({
  zones,
  title,
  dangerIcon,
  editParameterComponent,
  editParameterUnit,
  HelpMessage,
  ...restProps
}: SimpleBarGraphProps) => {
  const xAxisBoundaries = {
    min: 0,
    max: 300,
    unit: "m",
  };
  const RenderedBars = zones.map((zone) => {
    const barWidth = zone.end - zone.start;
    const shouldBarBeDisplayed =
      zone.end > 0 && zone.start < xAxisBoundaries.max;
    const lowestBarWidthToShowIcon = 20;
    const lowestBarWidthToShowLabel = 100;
    return shouldBarBeDisplayed ? (
      <S.Bar color={zone.color} width={barWidth.toString()}>
        {zone.danger && barWidth > lowestBarWidthToShowIcon && dangerIcon}
        {zone.danger && barWidth > lowestBarWidthToShowLabel && (
          <p>{zone.dangerLabel}</p>
        )}
        {!zone.danger && barWidth > lowestBarWidthToShowIcon && (
          <i className="fa-solid fa-check"></i>
        )}
        <S.DepthLabel>{`${zone.end} m`}</S.DepthLabel>
      </S.Bar>
    ) : (
      <S.Bar color={zone.color} width={"0"}></S.Bar>
    );
  });

  const [showModal, setShowModal] = useState(false);

  const toggleModalVisible = () => {
    if (showModal) {
      setShowModal(false);
    }
    setShowModal(true);
  };

  return (
    <>
      <S.BarChartContainer {...restProps}>
        <S.BarChartTitle>
          <S.GraphTitle>{title}</S.GraphTitle>
          <S.GraphEditParameter>
            <S.ParameterValueAndUnit>
              <S.ParameterValue>
                {editParameterComponent.props.value}
              </S.ParameterValue>
              <S.ParameterUnit>{editParameterUnit}</S.ParameterUnit>
            </S.ParameterValueAndUnit>
          </S.GraphEditParameter>
          {editParameterComponent}
          <i
            className="fa-solid fa-circle-info"
            onClick={toggleModalVisible}
          ></i>
        </S.BarChartTitle>
        <S.ScaleContainer>
          <div>{`${xAxisBoundaries.min} ${xAxisBoundaries.unit}`}</div>
          <div>{`${xAxisBoundaries.max} ${xAxisBoundaries.unit}`}</div>
        </S.ScaleContainer>
        <S.BarChartBarContainer>{RenderedBars}</S.BarChartBarContainer>
      </S.BarChartContainer>
      {showModal && (
        <ModalContainer onClose={() => setShowModal(false)}>
          {HelpMessage}
        </ModalContainer>
      )}
    </>
  );
};

export default SimpleBarGraph;
