import Lottie from "lottie-react";
import React from "react";

import animation from "../../shared/assets/animations/loading_main_2.json";
import LoadingPageWrapper from "./LoadingPageWrapper";

const LoadingPage: React.FC = () => {
  console.log("loading");

  return (
    <LoadingPageWrapper>
      <Lottie animationData={animation} loop autoplay />
    </LoadingPageWrapper>
  );
};

export default LoadingPage;
