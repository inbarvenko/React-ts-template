import React from "react";
import { Select } from "antd";
import { SelectProps } from "antd/lib";

type Props = SelectProps & {};

const SelectLocal: React.FC<Props> = (props: Props) => {
  return <Select className={props.className || "select"} {...props} />;
};

export default SelectLocal;
