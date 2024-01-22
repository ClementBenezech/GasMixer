import useThemeColors from "../../utils/hooks/useThemeColors";

const GlobalHelpMessage = () => {
  const { dangerColor } = useThemeColors();

  return (
    <div style={{ textAlign: "justify" }}>
      <h3 style={{ color: dangerColor }}>
        <i className="fa-solid fa-circle-exclamation"></i>
        {"  "}Disclaimer
      </h3>
      <p style={{ color: dangerColor }}>
        I am not a tech diver (also just to clear any ambiguities: NOT a
        doctor). I'm just a recreational divemaster with limited experience.
        Therefore, and also because I'm only human, this app may contain errors.
        It's meant as an educational tool to demonstrate some of the concepts
        behind gas blending. DO NOT use it for real life dive planning.
      </p>
      <p>
        This app lets you blend your own virtual mix with any amount of nitrogen
        / oxygen / helium using the tank sliders.
      </p>
      <p>
        You can then visualize safe zones, ranges of depth at which the blend
        can be used in regards to Oxygen toxicity and Narcosis. An analysis of
        equivalent narcotics depths and oxygen partial pressure between 0 and
        100 meters is provided.
      </p>
      <p>
        You can also alter the maximum oxygen partial pressure you accept
        (default being 1.4 ATM), and your own target Equivalent Narcotic Depth.
        Enjoy :)
      </p>
    </div>
  );
};

export default GlobalHelpMessage;
