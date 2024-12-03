import { Button, ButtonProps } from "antd";

import { ThemeEnum } from "../../constants/theme";
import ButtonWrapper from "./ButtonWrapper";

type Props = ButtonProps & {
  title: string;
  onClick: () => void;
  wrapperStyle?: string;
};

const ButtonLocal: React.FC<Props> = ({
  title,
  wrapperStyle,
  ...props
}: Props) => (
  <ButtonWrapper themеlocal={ThemeEnum.light} className={wrapperStyle}>
    <Button {...props}>{title}</Button>
  </ButtonWrapper>
);

export { ButtonLocal as Button };
