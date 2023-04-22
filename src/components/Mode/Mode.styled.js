import styled from "styled-components";

export const ModeContainer = styled.ul`
  width: 420px;
  margin: 20px auto 10px;
  padding: 10px 5px;
  background-color: #1e2140;
  border-radius: 30px;
  display: flex;
  justify-content: space-evenly;
`;

export const ModeStyled = styled.li`
  width: calc((100% / 3 - 10px));
  padding: 15px;
  border-radius: 30px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;

  ${(props) =>
    props.selected
      ? `background-color: ${props.color};
      color: ${props.theme.headColor};    
      `
      : ``};
`;
// &:hover {
//   background-color: ${({ theme }) => theme.mainColor};
//   color: ${({ theme }) => theme.headColor};
// }
