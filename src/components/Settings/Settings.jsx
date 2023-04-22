import { Modes, Fonts, Colors } from "../../helpers/Variables";
import Counter from "../../helpers/Counter/Counter";
import { useSelector } from "react-redux";
import {
  StyledSetting,
  SettingHeader,
  SettingTime,
  CounterContainer,
  Title,
  SettingFont,
  FontItem,
  ColorItem,
  SettingColor,
} from "./Settings.styled";
import useSettings from "./useSettings";

const Settings = () => {
  const periods = useSelector((state) => state.counters.value);
  const selectedColor = useSelector((state) => state.color.value);
  const { closeSettings, changeFont, changeColor, applyChanges } =
    useSettings();
  return (
    <StyledSetting color={selectedColor}>
      {/* ------------------------------------------------------------ */}
      <SettingHeader>
        <h1> Settings </h1>
        {/* Wiil be changed to icon */}
        <i className="bi bi-x-lg" onClick={closeSettings}></i>
      </SettingHeader>
      {/* ------------------------------------------------------------ */}
      <SettingTime>
        <Title>Time (Minutes)</Title>
        <CounterContainer>
          {Modes.map((mode, index) => (
            <Counter
              id={mode.name}
              key={mode.name}
              title={mode.name}
              initial={periods[index]}
              ind={index}
            />
          ))}
        </CounterContainer>
      </SettingTime>
      {/* ------------------------------------------------------------ */}
      <SettingFont>
        <Title>Font</Title>
        {Fonts.map((font) => (
          <FontItem
            id={font.name}
            key={font.name}
            onClick={() => changeFont(font.name)}
            type={font.name}
            selected={font.active}
          >
            Aa
          </FontItem>
        ))}
      </SettingFont>
      {/* ------------------------------------------------------------ */}
      <SettingColor>
        <Title>Color</Title>
        {Colors.map((color) => (
          <ColorItem
            id={color.value}
            key={color.value}
            onClick={() => changeColor(color.value)}
            value={color.value}
            selected={color.active}
          >
            {color.active && <i className="bi bi-check-lg"></i>}
          </ColorItem>
        ))}
      </SettingColor>
      {/* ------------------------------------------------------------ */}
      <button onClick={applyChanges}>Apply</button>
    </StyledSetting>
  );
};

export default Settings;
