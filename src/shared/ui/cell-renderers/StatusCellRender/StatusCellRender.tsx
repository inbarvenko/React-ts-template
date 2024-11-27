import { CustomCellRendererProps } from "ag-grid-react";
import React from "react";

import { Tick } from "../../../assets/svg";
import StatusCellRenderWrapper from "./StatusCellRenderWrapper";

export const StatusCellRenderer: React.FC<CustomCellRendererProps> = ({
  value,
}) => {
  const title = value ? "Имеется" : "Отсутствует";
  return (
    <StatusCellRenderWrapper>
      <div className={`tag ${value + "Tag"}`}>
        {value && <img className="tick" src={Tick} alt="tick" />}
        <span>{title}</span>
      </div>
    </StatusCellRenderWrapper>
  );
};
