import { Container } from "../../helpers/Container.styled";

import { StyledHeader } from "./Header.styled";

const Header = ({ darkTheme, toggleTheme }) => {
  return (
    <StyledHeader>
      <Container>
        <h1>pomodoro</h1>
      </Container>
    </StyledHeader>
  );
};

export default Header;
