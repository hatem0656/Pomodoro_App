import styled from "styled-components";

export const StyledTimer = styled.div`
  position: relative;
  width: 370px;
  height: 370px;
  margin: 25px auto 0;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.secondaryColor};
  color: #d5dffc;
  filter: drop-shadow(-44px -22px 23px #262b55);

  div {
    width: 300px;
    font-size: 5rem;
    font-weight: bold;
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    span {
      width: 100px;
      display: inline-block;
    }
  }

  button {
    position: absolute;
    transform: translate(-50%, -50%);
    border: none;
    text-transform: uppercase;
    letter-spacing: 13px;
    font-size: 1rem;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    z-index: 100;
  }
  button:nth-child(2) {
    bottom: 96px;
    left: 51%;
  }
  svg {
    position: absolute;
    transform: translate(-50%, -50%);
    bottom: 55px;
    left: 48%;
    font-size: 1.4rem;
    cursor: pointer;
    z-index: 100;
  }

  canvas {
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
