import styled from "styled-components";

export const StyledSetting = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 335px;
  background-color: ${({ theme }) => theme.settingbk};
  margin-left: auto;
  margin-right: auto;
  padding: 5px 15px;
  z-index: 200;
  border-radius: 12px;
  & > div {
    padding: 5px 10px;
  }
  &::after {
    content: "";
    position: absolute;
    top: 67px;
    left: 0px;
    width: 100%;
    height: 2px;
    background-color: #cfd4e3;
    opacity: 60%;
  }
  & > button {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 30px;
    border-radius: 26px;
    border-color: transparent;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    font-family: inherit;
    background-color: ${(props) => props.color};
    color: ${({ theme }) => theme.headColor};
  }
`;
export const SettingHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    font-size: 20px;
    font-weight: bold;
    color: black;
}
  }
  i {
    padding: 0;
    border: none;
    font-size: 1rem;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
  }
`;
export const Title = styled.h2`
  margin-bottom: 3px;
  font-size: 12px;
  letter-spacing: 4px;
  color: black;
  text-transform: uppercase;
`;
export const SettingTime = styled.div`
  ${Title} {
    margin: 15px 0;
  }
`;

export const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SettingFont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 13px 0;
  h2 {
    flex: 1;
  }
`;

export const FontItem = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #cfd4e3;
  padding: 3px;
  margin: 0 5px;
  font-size: 13px;
  cursor: pointer;
  font-family: ${(props) => props.type};
  ${(props) =>
    props.selected
      ? `
      color: #fff;
      background-color: #000;
  `
      : ``}
`;
export const SettingColor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 13px 0;
  h2 {
    flex: 1;
  }
`;
export const ColorItem = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 3px;
  margin: 0 5px;
  cursor: pointer;
  background-color: ${(props) => props.value};
`;
