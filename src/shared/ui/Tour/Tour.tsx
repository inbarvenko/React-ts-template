import { Tour, TourProps } from "antd";
import React from "react";

type Props = TourProps & {};

const TourLocal: React.FC<Props> = (props: Props) => <Tour {...props} />;

export { TourLocal as Tour };
