import React from "react";
import HelpPageWrapper from "./HelpPageWrapper";
import Layout from "../../shared/ui/Layout/Layout";

const HelpPage: React.FC = () => {
  console.log("helps");
  return (
    <HelpPageWrapper>
      <Layout
        title="Помощь"
        headerClassName="header-style"
        bodyClassName="body-style"
      >
        ;
      </Layout>
    </HelpPageWrapper>
  );
};

export default HelpPage;
