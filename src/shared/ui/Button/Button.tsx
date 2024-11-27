import { Button, ButtonProps } from "antd";
import ButtonWrapper from "./ButtonWrapper";
import { ThemeEnum } from "../../constants/theme";

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
