import React from "react";

import LayoutWrapper from "./LayoutWrapper";
import { BiCog } from "react-icons/bi";
import { colors } from "../../assets/colors";
import { Helmet } from "react-helmet";

type Props = {
  title?: string;
  settings?: boolean;
  // backgroundColor?: "grey" | "light-blue";
  headerClassName?: string;
  bodyClassName?: string;
  onSettingsClick?: () => void;
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({
  title,
  settings,
  // backgroundColor,
  headerClassName,
  bodyClassName,
  onSettingsClick,
  children,
}: Props) => (
  <LayoutWrapper className={`layout ${bodyClassName}`}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <div className={`layout ${bodyClassName}`}>
      <div className={`${headerClassName} header`}>
        <p className="header-text">{title}</p>
        {settings && (
          <BiCog
            color={colors["light"].color_main_grey_50}
            size={25}
            className="header-settings"
            onClick={onSettingsClick}
          />
        )}
      </div>
      <div className="content">{children}</div>
    </div>
  </LayoutWrapper>
);

export default Layout;
