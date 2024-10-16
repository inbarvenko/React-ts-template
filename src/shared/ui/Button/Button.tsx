import { Button, ButtonProps } from "antd";
import ButtonWrapper from "./ButtonWrapper";
import { ThemeEnum } from "../../constants/constants";

type Props = ButtonProps & {
  title: string;
  onClick: () => void;
};

const ButtonLocal = ({ title, onClick, ...props }: Props) => (
  <ButtonWrapper themеtype={ThemeEnum.light}>
    <Button onClick={onClick} {...props}>
      {title}
    </Button>
  </ButtonWrapper>
);

export default ButtonLocal;
