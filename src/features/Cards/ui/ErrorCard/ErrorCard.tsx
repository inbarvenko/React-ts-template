import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import ErrorCardWrapper from "./ErrorCardWrapper";

type Props = {
  title: string;
  text: string;
  animation: unknown;
};

const ErrorCard: React.FC<Props> = ({ title, text, animation }: Props) => {
  return (
    <ErrorCardWrapper>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="layout">
        <Lottie animationData={animation} loop autoplay />

        <div className="text">
          <p className="text-title">Упс!</p>
          <p className="text-main">{text}</p>
        </div>
      </div>
    </ErrorCardWrapper>
  );
};

export default ErrorCard;
