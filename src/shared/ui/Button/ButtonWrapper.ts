import styled from "styled-components";
import { colors } from "../../assets/colors";
import { ThemeEnum } from "../../constants/constants";

const ButtonWrapper = styled.div<{themеtype: ThemeEnum}>`
    .ant-btn {
        font-family: 'HeliosCondC';
    }

    .ant-btn-color-dangerous {
        color: ${(p) => colors[p.themеtype].brightOrange};;
    }

    .ant-btn-color-dangerous
    .ant-btn-variant-outlined {
        border-color: ${(p) => colors[p.themеtype].brightOrange};
    }

    :focus,
    :focus-visible {
        outline: none;
    }
`;

export default ButtonWrapper;