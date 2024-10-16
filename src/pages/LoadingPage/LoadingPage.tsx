import React from "react";
import LoadingPageWrapper from "./LoadingPageWrapper";
import Lottie from "lottie-react";
import animation from "../../shared/assets/animations/loading_main_2.json";

const LoadingPage: React.FC = () => {
  console.log("loading");

  return (
    <LoadingPageWrapper>
      <Lottie animationData={animation} loop autoplay />
    </LoadingPageWrapper>
  );
};

export default LoadingPage;
