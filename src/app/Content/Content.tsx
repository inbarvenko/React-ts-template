import React from "react";
import { Sidebar } from "../../widgets/Sidebar";
import { Outlet } from "react-router-dom";
import { ContentWrapper } from "./ContentWrapper";

const Content: React.FC = () => {
  console.log("main");
  return (
    <ContentWrapper>
      <Sidebar />
      {/* <Header /> */}
      <Outlet />
    </ContentWrapper>
  );
};

export default Content;
