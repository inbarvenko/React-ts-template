import "ag-grid-enterprise";

import "../shared/assets/fonts/fonts.css";
import "./App.css";

import { LicenseManager } from "ag-grid-enterprise";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Content from "./Content/Content";
import { routersData } from "./data";
import { SiderItemType } from "../widgets/Sidebar/types/types";

LicenseManager.setLicenseKey(
  "BOARD4ALL_NDEwMjM1MTIwMDAwMA==8f4481b5cc626ad79fe91bc5f4e52e3d",
);

export default function App() {
  const getChildrenRoutes = (item: SiderItemType, parentPath: string = "") => {
    // console.log("item", item);
    // console.log("parentPath", parentPath);
    const currentPath = `${parentPath}${item.path}`;
    console.log("currentPath", currentPath);

    return item?.children?.map((child, indexChild) => {
      console.log("path", `${currentPath}${child.path}`);
      return (
        <Route
          key={`${child.path}-${indexChild}`}
          path={`${currentPath}${child.path}`}
          element={child.element}
        >
          {child?.children?.length
            ? getChildrenRoutes(child, currentPath)
            : null}
        </Route>
      );
    });
  };
  return (
    <div>
      <BrowserRouter>
        {/* <LoadingPage /> */}
        <>
          <Routes>
            <Route path="/" element={<Content />}>
              {routersData.map((item, index) => (
                <Route
                  key={`${item.path}-${index}`}
                  path={item.path}
                  element={item.element}
                >
                  {item.children?.length ? getChildrenRoutes(item) : null}
                </Route>
              ))}
            </Route>
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
}
