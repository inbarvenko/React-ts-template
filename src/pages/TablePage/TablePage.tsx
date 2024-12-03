import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

import React, { useState } from "react";

import Layout from "../../shared/ui/Layout/Layout";
import { tableData } from "./table.data";
import TablePageWrapper from "./TablePageWrapper";
import { Table } from "../../widgets/Table";

const TablePage: React.FC = () => {
  const [editing, setEditing] = useState<boolean>(false);

  return (
    <TablePageWrapper>
      <Layout
        settings
        title="Сводная таблица по работникам Общества 2024"
        headerClassName="header-style"
        bodyClassName="body-style"
        onSettingsClick={() => {
          console.log("click");
          setEditing(!editing);
        }}
      >
        <Table data={tableData} editing={editing} />
      </Layout>
    </TablePageWrapper>
  );
};

export default TablePage;
