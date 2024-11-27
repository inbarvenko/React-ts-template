import { Button, ButtonProps } from "antd";

import { ThemeEnum } from "../../constants/theme";
import ButtonWrapper from "./ButtonWrapper";

type Props = ButtonProps & {
  title: string;
  onClick: () => void;
};

const ButtonLocal: React.FC<Props> = ({ title, ...props }: Props) => (
  <ButtonWrapper themеtype={ThemeEnum.light}>
    <Button {...props}>{title}</Button>
  </ButtonWrapper>
);

export default ButtonLocal;
