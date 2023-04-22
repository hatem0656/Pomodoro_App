import { Container } from "../../helpers/Container.styled";
import { ModeContainer, ModeStyled } from "./Mode.styled";
import { Modes } from "../../helpers/Variables";
import useMode from "./useMode";
import { useSelector } from "react-redux";
const Mode = () => {
  const selectedColor = useSelector((state) => state.color.value);
  const [changeMode] = useMode();

  return (
    <Container paddingTop="5px">
      <ModeContainer>
        {Modes.map((mode) => (
          <ModeStyled
            id={mode.name}
            key={mode.name}
            onClick={() => changeMode(mode.name)}
            selected={mode.active}
            color={selectedColor}
          >
            {mode.name}
          </ModeStyled>
        ))}
      </ModeContainer>
    </Container>
  );
};

export default Mode;
