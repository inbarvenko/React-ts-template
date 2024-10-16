import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../shared/assets/svg/head-novator.svg";
import { sidersTitles } from "../constants/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { BiChevronsRight, BiUser } from "react-icons/bi";
import { SiderItemType } from "../types/types";
import SidebarWrapper from "./SidebarWrapper";
import { ThemeEnum } from "../../../shared/constants/constants";

const Sidebar: React.FC = () => {
  const [minimize, setMinimize] = useState<boolean>(false);
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>(
    {},
  );
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const localion = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!buttonRef.current?.contains(event.target as Node)) {
        setOpenSubmenus({});
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
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

  const onProfileClick = () => {
    navigate("/profile");
  };

  const renderItems = (items: SiderItemType[], level = 0, parentPath = "") =>
    items.map((item, index) => {
      const currentPath = `${parentPath}${index}-`;
      console.log(currentPath);
      const isOpen = openSubmenus[currentPath];
      const context = minimize ? item.icon : item.label;

      const openSubmenu = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        navigate(item.path || "/");

        setMinimize(false);
        toggleSubmenu(currentPath);
      };

      const navigateOnClick = () => {
        console.log(item);
        navigate(item.path || "/");
      };

      const isCurrentPath =
        (localion.pathname === item.path &&
          !Object.keys(openSubmenus).length) ||
        isOpen;

      return (
        <li key={currentPath} className="sidebar-item">
          <div
            ref={buttonRef}
            className={` ${isCurrentPath ? "menu-item-active" : "menu-item"} level-${level}`}
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
      ref={buttonRef}
      collapsed={minimize}
      themelocal={ThemeEnum.light}
    >
      <div className="content">
        <img src={Logo} className="logo" />

        <ul className="sidebar">{renderItems(sidersTitles)}</ul>
      </div>

      <div className="footer">
        <BiChevronsRight
          className="arrowButton"
          size={25}
          onClick={toggleMenu}
        />

        <div className="user" onClick={onProfileClick}>
          <BiUser className="user-icon" size={25} />

          {!minimize && (
            <p className="user-name">Василий Васильевич Васильев-Васильев</p>
          )}
        </div>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
