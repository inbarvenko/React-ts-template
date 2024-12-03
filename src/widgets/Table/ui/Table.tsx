import React, { useMemo, useState } from "react";

import { GridChartsModule } from "@ag-grid-enterprise/charts-enterprise";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel";
import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection";
import { RichSelectModule } from "@ag-grid-enterprise/rich-select";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { SparklinesModule } from "@ag-grid-enterprise/sparklines";

import { ModuleRegistry } from "@ag-grid-community/core";
import { BiBarChartSquare, BiEditAlt } from "react-icons/bi";
import { ColDef } from "ag-grid-enterprise";
import { AgGridReact, AgGridReactProps } from "ag-grid-react";

import { StatusCellRenderer } from "../../../shared/lib/ag-grid/ui/StatusCellRender/StatusCellRender";
import { AG_GRID_LOCALE_RU } from "../config/locale";
import TableWrapper from "./TableWrapper";

type Props = AgGridReactProps & {
  data: any[];
  editing?: boolean;
};

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

const Table: React.FC<Props> = ({ data, ...props }: Props) => {
  const confidentialityStatus = ["Имеется", "Отсутствует"];
  const paginationPageSize = 25;
  const paginationPageSizeSelector = [25, 50, 100];

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

  const [rowData, setRowData] = useState(data);
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
    <TableWrapper className="ag-theme-quartz">
      <AgGridReact
        pagination
        enableCharts
        suppressClickEdit={props.editing}
        localeText={AG_GRID_LOCALE_RU}
        defaultColDef={defaultColDef}
        rowData={rowData}
        columnDefs={colDefs}
        paginationPageSize={paginationPageSize}
        paginationPageSizeSelector={paginationPageSizeSelector}
        {...props}
      />
    </TableWrapper>
  );
};

export default Table;
