import styled from "styled-components";
import { colors } from "../../assets/colors";
import { ThemeEnum } from "../../constants/theme";

const ButtonWrapper = styled.div<{ themеtype: ThemeEnum }>`
  .ant-btn {
    font-family: "HeliosCondC";
  }

  .ant-btn-color-dangerous {
    color: ${(p) => colors[p.themеtype].color_bright_orange_50};
  }

  .ant-btn-color-dangerous .ant-btn-variant-outlined {
    border-color: ${(p) => colors[p.themеtype].color_bright_orange_50};
  }

  :focus,
  :focus-visible {
    outline: none;
  }
`;

export default ButtonWrapper;
