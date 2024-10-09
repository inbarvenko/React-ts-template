import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../shared/assets/svg/head-novator.svg";
import { sidersTitles } from "../constants/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";
import { SiderItemType } from "../types/types";
import SidebarWrapper from "./SidebarWrapper";
import { ThemeEnum } from "../../../shared/constants/constants";

const Sidebar: React.FC = () => {
  const [minimize, setMinimize] = useState<boolean>(false);
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>(
    {},
  );
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const localion = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log(event.target);
      console.log(sidebarRef.current);

      if (!sidebarRef.current?.contains(event.target as Node)) {
        setOpenSubmenus({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMinimize(!minimize);
    setOpenSubmenus({});
  };

  const toggleSubmenu = (path: string) => {
    const isOpen = openSubmenus[path];

    setOpenSubmenus({
      ...openSubmenus,
      [path]: !isOpen,
    });
  };

  const renderItems = (items: SiderItemType[], level = 0, parentPath = "") =>
    items.map((item, index) => {
      const currentPath = `${parentPath}${index}-`;
      const isOpen = openSubmenus[currentPath];
      const context = minimize ? item.icon : item.label;

      const openSubmenu = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setMinimize(false);
        toggleSubmenu(currentPath);
      };

      const navigateOnClick = () => {
        navigate(item.path || "/");
      };

      return (
        <li active key={currentPath} className="sidebar-item">
          <div
            className={`menu-item level-${level} ${level === 0 && minimize ? "collapsed" : ""}`}
            onClick={item.children?.length ? openSubmenu : navigateOnClick}
            style={{
              transition: "0.3s",
            }}
          >
            {context}
          </div>

          {item.children?.length && isOpen && (
            <ul
              className={`submenu level-${level + 1}`}
              style={
                minimize && level === 0
                  ? { marginLeft: 60 }
                  : { marginLeft: 200 }
              }
            >
              {renderItems(item.children, level + 1, currentPath)}
            </ul>
          )}
        </li>
      );
    });

  return (
    <SidebarWrapper
      ref={sidebarRef}
      collapsed={minimize}
      themeLocal={ThemeEnum.light}
    >
      <div
        style={{
          padding: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={Logo} className="logo" />
      </div>

      <ul className="sidebar">{renderItems(sidersTitles)}</ul>

      <BiChevronsRight className="arrowButton" size={25} onClick={toggleMenu} />
    </SidebarWrapper>
  );
};

export default Sidebar;
