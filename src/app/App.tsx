import "../shared/assets/fonts/fonts.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./Content/Content";
import { routersData } from "./data";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <LoadingPage /> */}
        <>
          <Routes>
            <Route path="/" element={<Content />}>
              {routersData.map((item) => (
                <Route key={item.path} path={item.path} element={item.element}>
                  {item.children?.map((child) => (
                    <Route
                      key={child.path}
                      path={child.path}
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
