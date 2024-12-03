import styled from "styled-components";

import { colors } from "../../assets/colors";
import { ThemeEnum } from "../../constants/theme";

type Props = {
  themеlocal: ThemeEnum;
};

const ButtonWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["themelocal"].includes(prop),
})<Props>`
  .ant-btn {
    font-family: "HeliosCondC";
  }

  .ant-btn-color-dangerous {
    color: ${(p) => colors[p.themеlocal].color_bright_orange_50};
  }

  .ant-btn-color-dangerous .ant-btn-variant-outlined {
    border-color: ${(p) => colors[p.themеlocal].color_bright_orange_50};
  }

  :focus,
  :focus-visible {
    outline: none;
  }
`;

export default ButtonWrapper;
