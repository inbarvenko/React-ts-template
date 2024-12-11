import React from "react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "../../widgets/Sidebar";
import { ContentWrapper } from "./ContentWrapper";

const Content: React.FC = () => {
  return (
    <ContentWrapper>
      <Sidebar />
      {/* <Header /> */}
      <Outlet />
    </ContentWrapper>
  );
};

export default Content;
