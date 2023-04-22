import styled from "styled-components";
import { Container } from "../../helpers/Container.styled";

export const StyledHeader = styled.header`
  ${Container} {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    color: ${({ theme }) => theme.headColor};
  }
`;

export const Icon = styled.div`
  position: absolute;
  right: 0;
  i {
    color: inherit;
    cursor: pointer;
    font-size: 20px;
    &:hover::before {
      transform: rotateZ(15deg);
    }
    &::before {
      transform: rotateZ(0deg);
      transition: 0.2s;
    }
  }
`;
