import "ag-grid-enterprise";

import "../shared/assets/fonts/fonts.css";
import "./App.css";

import { LicenseManager } from "ag-grid-enterprise";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Content from "./Content/Content";
import { routersData } from "./data";

LicenseManager.setLicenseKey(
  "BOARD4ALL_NDEwMjM1MTIwMDAwMA==8f4481b5cc626ad79fe91bc5f4e52e3d",
);

export default function App() {
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
                  {item.children?.map((child, indexChild) => (
                    <Route
                      key={`${child.path}-${indexChild}`}
                      path={`${item.path}${child.path}`}
                      element={child.element}
                    />
                  ))}
                </Route>
              ))}
            </Route>
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
}
