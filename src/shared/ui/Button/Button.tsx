import { Button, ButtonProps } from "antd";
import ButtonWrapper from "./ButtonWrapper";
import { ThemeEnum } from "../../constants/constants";

type Props = ButtonProps & {
  title: string;
  onClick: () => void;
};

const ButtonLocal = ({title, onClick, ...props}: Props) => {
  //TODO: если одна кнопка нажата - другую задизейблить
  return (
    <ButtonWrapper themеtype={ThemeEnum.light}>
      <Button onClick={onClick} {...props}>{title}</Button>
    </ButtonWrapper>
  );
};

export { ButtonLocal as Button };
