import styled from "styled-components";

export const CounterStyled = styled.div`
  width: calc(100% / 3 - 10px);

  h5 {
    font-size: 10px;
    margin: 0;
    margin-bottom: 5px;
  }
`;
export const CounterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background-color: #cfd4e3;
  padding: 8px 10px;

  h2 {
    font-size: 13px;
    flex: 1;
    color: black;
    margin: 0;
  }
  i {
    position: absolute;
    right: 10px;
    font-size: 11px;
    cursor: pointer;
  }

  i:first-of-type {
    top: 5px;
  }
  i:nth-of-type(2) {
    top: 16px;
  }
`;
