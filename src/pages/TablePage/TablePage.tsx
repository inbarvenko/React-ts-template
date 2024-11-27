import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

import React, { useMemo, useState } from "react";
import { ColDef, ModuleRegistry } from "ag-grid-community";
import TablePageWrapper from "./TablePageWrapper";
import Layout from "../../shared/ui/Layout/Layout";
import { AG_GRID_LOCALE_RU } from "../../widgets/Table/model/locale";
import { BiBarChartSquare, BiEditAlt } from "react-icons/bi";

import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel";
import { GridChartsModule } from "@ag-grid-enterprise/charts-enterprise";
import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { RichSelectModule } from "@ag-grid-enterprise/rich-select";
import { SparklinesModule } from "@ag-grid-enterprise/sparklines";

import { tableData } from "./table.data";
import { StatusCellRenderer } from "../../shared/ui/cell-renderers/StatusCellRender/StatusCellRender";

//TODO: Add License key for AG Grid
ModuleRegistry.registerModules([
  ExcelExportModule,
  FiltersToolPanelModule,
  GridChartsModule,
  RangeSelectionModule,
  RowGroupingModule,
  SetFilterModule,
  RichSelectModule,
  SparklinesModule,
]);

const TablePage: React.FC = () => {
  const confidentialityStatus = ["Имеется", "Отсутствует"];
  const [editing, setEditing] = useState<boolean>(false);

  const editColumnConfig = useMemo<ColDef[]>(
    () => [
      {
        field: "edit",
        floatingFilter: false,
        filter: false,
        sortable: false,
        editable: false,
        lockPosition: "right",
        width: 50,
        maxWidth: 50,
        cellStyle: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        headerComponent: () => (
          <div onClick={() => console.log("header click")}>
            <BiBarChartSquare
              style={{ verticalAlign: "middle", cursor: "pointer" }}
              size={20}
              color="#808080"
            />
          </div>
        ),
        cellRenderer: () => (
          <div onClick={() => console.log("click")}>
            <BiEditAlt
              style={{ verticalAlign: "middle", cursor: "pointer" }}
              size={20}
            />
          </div>
        ),
      },
    ],
    [],
  );

  const [rowData, setRowData] = useState(tableData);
  const [colDefs, setColDefs] = useState<ColDef[]>([
    {
      headerName: "ФИО",
      field: "name",
    },
    {
      headerName: "Подразделение",
      field: "division",

      cellStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      headerName: "Должность",
      field: "position",
    },
    {
      headerName: "Загруженность",
      field: "load",
      editable: false,
      cellRenderer: "agSparklineCellRenderer",
      cellRendererParams: {
        sparklineOptions: {
          line: {
            strokeWidth: 1.5,
          },
        },
      },
    },
    {
      headerName: "Наличие договора о конфиденциальности",
      field: "confidentiality",

      valueFormatter: (p) => {
        if (typeof p.value !== "boolean") return p.value;
        return p.value ? "Имеется" : "Отсутствует";
      },
      cellRenderer: StatusCellRenderer,
      cellEditor: "agRichSelectCellEditor",
      maxWidth: 130,
      cellEditorParams: {
        values: confidentialityStatus,
      },
      cellStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    {
      headerName: "Линейный руководитель",
      field: "leader",
    },
    {
      headerName: "Номер рабочего телефона",
      field: "phone",

      cellStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    ...editColumnConfig,
  ]);

  const paginationPageSize = 25;
  const paginationPageSizeSelector = [25, 50, 100];

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
        onSettingsClick={() => {
          console.log("click");
          setEditing(!editing);
        }}
      >
        <div
          className="ag-theme-quartz" // applying the Data Grid theme
          style={{ height: "100%" }} // the Data Grid will fill the size of the parent container
        >
          <AgGridReact
            pagination
            enableCharts
            suppressClickEdit={editing}
            localeText={AG_GRID_LOCALE_RU}
            defaultColDef={defaultColDef}
            rowData={rowData}
            columnDefs={colDefs}
            paginationPageSize={paginationPageSize}
            paginationPageSizeSelector={paginationPageSizeSelector}
          />
        </div>
      </Layout>
    </TablePageWrapper>
  );
};

export default TablePage;
