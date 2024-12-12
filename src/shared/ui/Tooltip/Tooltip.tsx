import React from "react";
import { Tooltip } from "antd";
import { BiQuestionMark } from "react-icons/bi";
import { TooltipProps } from "antd/lib";

type Props = TooltipProps & {};

const TooltipLocal: React.FC<Props> = ({
  placement,
  trigger,
  children,
  ...props
}: Props) => {
  return (
    <Tooltip
      placement={placement || "right"}
      trigger={trigger || "hover"}
      {...props}
    >
      {children || <BiQuestionMark size={20} />}
    </Tooltip>
  );
};

export { TooltipLocal as Tooltip };
