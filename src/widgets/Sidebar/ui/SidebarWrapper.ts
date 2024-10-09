import styled, { css } from "styled-components";
import { colors } from "../../../shared/assets/colors";
import { ThemeEnum } from "../../../shared/constants/constants";

const SidebarWrapper = styled.div<{
  collapsed: boolean;
  themeLocal: ThemeEnum;
}>`
  /* min-width: ${(p) => (p.collapsed ? "75px" : "200px")}; */
  height: 100vh;
  overflow-y: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: 0.4s;
  background: linear-gradient(180deg, rgb(0, 121, 194) 40%, rgb(0, 74, 119));

  .logo {
    width: ${(p) => (p.collapsed ? "40px" : "70px")};

    &-collapsed {
      width: 25px;
    }
  }

  .arrowButton {
    transform: ${(p) => !p.collapsed && "rotate(180deg)"};
    transition: 0.4s;
  }

  .sidebar {
    width: 100%;
    box-sizing: border-box;
    padding: 0;

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
    font-size: 16px;

    &:hover {
      background-color: #043b6b;
      opacity: 0.4;
    }

    &:active {
      background-color: #043b6b;
      opacity: 0.4;

      border-left: 5px solid ${(p) => colors[p.themeLocal].brightOrange};
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
    transition: "0.3s";

    &.level-1 {
      /* margin-left: 200px; */
      position: absolute;
      top: 0;
      left: 1px;
      width: 200px;
      background-color: #e1e1e1;
      padding: 10px;
      display: block;
    }

    &.level-2 {
      /* margin-left: 200px; */
      position: absolute;
      top: 0;
      left: 0px;
      width: 200px;
      background-color: #d1d1d1;
      padding: 10px;
      display: block;
    }
  }

  .collapsed {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${(p) =>
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
          min-width: 200px;

          @media (max-width: 768px) {
            min-width: 150px;
          }

          @media (max-width: 425px) {
            min-width: 125px;
          }
        `};
`;

export default SidebarWrapper;
