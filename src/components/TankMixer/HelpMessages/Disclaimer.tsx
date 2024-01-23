import useThemeColors from "../../utils/hooks/useThemeColors";

const Disclaimer = () => {
  const { dangerColor } = useThemeColors();

  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ color: dangerColor }}>Disclaimer</h3>

      <p style={{ color: dangerColor }}>
        I am not a tech diver (also just to clear any ambiguities with the app
        name: NOT a doctor). I'm just a recreational divemaster with limited
        experience.
      </p>
      <p style={{ color: dangerColor }}>
        Therefore, and also because I'm only human, this app may contain errors.
        It's meant as an educational tool to demonstrate some of the concepts
        behind gas blending.
      </p>
      <h3 style={{ color: dangerColor }}>
        <i className="fa-solid fa-circle-exclamation"></i>
        {"  "}DO NOT USE TO PLAN REAL LIFE DIVES
      </h3>
    </div>
  );
};

export default Disclaimer;
