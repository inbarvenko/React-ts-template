import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

import React, { useMemo, useState } from "react";
import { ColDef } from "ag-grid-community";
import TablePageWrapper from "./TablePageWrapper";
import Layout from "../../shared/ui/Layout/Layout";
import { AG_GRID_LOCALE_RU } from "../../widgets/Table/model/locale";
import { BiEditAlt } from "react-icons/bi";
// import { themeQuartz } from "@ag-grid-community/theming";

// const myTheme = themeQuartz.withParams({
//   borderColor: "#BABFC7",
//   borderRadius: "4px",
//   browserColorScheme: "light",
//   columnBorder: false,
//   foregroundColor: "#282828",
//   headerBackgroundColor: "#EFEFF0",
//   headerFontFamily: "HeliosCondC",
//   fontFamily: "HeliosCondC",
//   headerFontSize: 14,
//   headerFontWeight: 500,
//   sidePanelBorder: true,
//   spacing: "10px",
//   wrapperBorderRadius: "0px",
// });

const TablePage: React.FC = () => {
  // to use myTheme in an application, pass it to the theme grid option

  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<ColDef[]>([
    {
      field: "make",
    },
    {
      field: "model",
    },
    {
      field: "price",
    },
    {
      field: "electric",
    },
    {
      headerName: "",
      field: "edit",

      floatingFilter: false,
      filter: false,
      sortable: false,
      width: 50,
      initialWidth: 50,
      maxWidth: 50,
      cellRenderer: () => (
        <div>
          <BiEditAlt
            style={{ verticalAlign: "middle", cursor: "pointer" }}
            size={20}
          />
        </div>
      ),
    },
  ]);

  const pagination = true;
  const paginationPageSize = 500;
  const paginationPageSizeSelector = [200, 500, 1000];

  const defaultColDef = useMemo<ColDef>(
    () => ({
      filter: true,
      editable: true,
      flex: 1,
      minWidth: 200,
      floatingFilter: true,
    }),
    [],
  );

  return (
    <TablePageWrapper>
      <Layout
        settings
        title="Сводная таблица по работникам Общества 2024"
        headerClassName="header-style"
        bodyClassName="body-style"
      >
        <div
          className="ag-theme-quartz" // applying the Data Grid theme
          style={{ height: "100%" }} // the Data Grid will fill the size of the parent container
        >
          <AgGridReact
            // theme={myTheme}
            localeText={AG_GRID_LOCALE_RU}
            defaultColDef={defaultColDef}
            rowData={rowData}
            columnDefs={colDefs}
            pagination={pagination}
            paginationPageSize={paginationPageSize}
            paginationPageSizeSelector={paginationPageSizeSelector}
          />
        </div>
      </Layout>
    </TablePageWrapper>
  );
};

export default TablePage;
