import styled, { css } from "styled-components";
import { colors } from "../../../shared/assets/colors";
import { ThemeEnum } from "../../../shared/constants/constants";

const SidebarWrapper = styled.div<{
  collapsed: boolean;
  themelocal: ThemeEnum;
}>`
  min-width: ${(p) => (p.collapsed ? "75px" : "200px")};
  max-width: ${(p) => (p.collapsed ? "75px" : "200px")};

  height: 100vh;
  overflow-y: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: 0.4s;
  background: linear-gradient(180deg, rgb(0, 121, 194) 40%, rgb(0, 74, 119));

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    width: ${(p) => (p.collapsed ? "40px" : "70px")};

    &-collapsed {
      width: 25px;
    }

    padding: 20px 0;
  }

  .arrowButton {
    transform: ${(p) => !p.collapsed && "rotate(180deg)"};
    transition: 0.4s;

    margin: 20px 20px 20px 20px;

    &:hover {
      cursor: pointer;
    }
  }

  .sidebar {
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    &-item {
      display: flex;
    }
  }

  .menu-item {
    position: relative;
    width: 100%;
    padding: 10px 15px;

    cursor: pointer;

    font-family: "HeliosCondC";
    font-size: 15px;

    ${(p) =>
      p.collapsed &&
      css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}

    &:hover {
      background-color: #043b6b8f;
    }

    &-active {
      ${(p) =>
        p.collapsed &&
        css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}

      position: relative;
      width: 100%;
      padding: 10px 15px 10px 10px;

      cursor: pointer;

      font-family: "HeliosCondC";
      font-size: 15px;
      background-color: #043b6baf;

      border-left: 5px solid ${(p) => colors[p.themelocal].brightOrange};
    }
  }

  a.menu-item {
    transition: 0.3s;
    text-decoration: none;
    color: inherit;
    display: flex;
  }

  .level-1 {
    background-color: #e1e1e1;
  }

  .level-2 {
    background-color: #d1d1d1;
  }

  .submenu {
    z-index: 3;

    margin-left: 20px;
    display: none;
    height: 100%;
    box-sizing: border-box;
    transition: 0.3s;

    &.level-1 {
      /* margin-left: 200px; */
      position: absolute;
      top: 0;
      left: 1px;
      width: 200px;
      background-color: #e1e1e1;
      padding: 0px;
      display: block;
    }

    &.level-2 {
      /* margin-left: 200px; */
      position: absolute;
      top: 0;
      left: 0px;
      width: 200px;
      background-color: #d1d1d1;
      padding: 0px;
      display: block;
    }
  }

  .collapsed {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    padding: 20px;
    border-top: 1px solid #bdbfc1;

    &:hover {
      cursor: pointer;
    }

    &:active {
      cursor: pointer;

      background-color: #043b6b8f;
    }

    &-icon {
      flex: 1;
    }

    &-name {
      flex: 5;

      font-family: "HeliosCondC";
      font-size: 15px;

      padding-left: 10px;
      margin: 0px;
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: ${(p) => (p.collapsed ? "center" : "flex-end")};
    justify-content: center;
  }

  /* ${(p) =>
    p.collapsed
      ? css`
          min-width: 100px;

          @media (max-width: 768px) {
            min-width: 75px;
          }

          @media (max-width: 425px) {
            min-width: 50px;
          }
        `
      : css`
          @media (max-width: 768px) {
            min-width: 150px;
          }

          @media (max-width: 425px) {
            min-width: 125px;
          }
        `}; */
`;

export default SidebarWrapper;
