import useThemeColors from "../../utils/hooks/useThemeColors";

const ToxicityHelpMessage = () => {
  const { dangerColor } = useThemeColors();

  return (
    <div>
      <h3 style={{ color: dangerColor }}>Target PP02</h3>
      <p>
        Use the slider to select your highest acceptable oxygen partial
        pressure.
      </p>
      <p>
        You can go up to 1.8 ATM in this app, but this value should generally
        not be higher than 1.4 ATM for "active" bottom phases, and 1.6 ATM for
        static phases like decompression stops.
      </p>
      <p>
        This value will impact the depth at which a specific mix can be used.
        The higher the PPO2 target, the deeper the gas can take you
      </p>
      <p>
        Beyond those limits, oxygen toxicity can occur, leading to potential
        strokes, loss of consciousness and death by drowning.
      </p>
    </div>
  );
};

export default ToxicityHelpMessage;
