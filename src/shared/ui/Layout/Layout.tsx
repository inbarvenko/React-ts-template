import React from "react";
import LayoutWrapper from "./LayoutWrapper";
import { BiCog } from "react-icons/bi";
import { colors } from "../../assets/colors";

type Props = {
  title: string;
  settings?: boolean;
  headerClassName?: string;
  bodyClassName?: string;
  onSettingsClick?: () => void;
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({
  title,
  settings,
  headerClassName,
  bodyClassName,
  onSettingsClick,
  children,
}: Props) => (
  <LayoutWrapper className={bodyClassName}>
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
  </LayoutWrapper>
);

export default Layout;
