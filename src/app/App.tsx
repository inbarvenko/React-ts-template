import "../shared/assets/fonts/fonts.css";
import "./App.css";
import CalendarPage from "../pages/CalendarPage/CalendarPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "../widgets/Sidebar/index";
import TablePage from "../pages/TablePage/TablePage";
import HelpPage from "../pages/HelpPage/HelpPage";
// import Header from "../widgets/Header/ui/Header";
// import LoadingPage from "./pages/LoadingPage/LoadingPage";

const router = [
  {
    path: "/",
    element: <TablePage />,
  },
  {
    path: "/documents",
    element: <CalendarPage />,
  },
  {
    path: "/calendar",
    element: <CalendarPage />,
  },
  {
    path: "/structure",
    element: <CalendarPage />,
  },
  {
    path: "/forms",
    element: <CalendarPage />,
  },
  {
    path: "/help",
    element: <HelpPage />,
  },
  {
    path: "/profile",
    element: <CalendarPage />,
  },
];

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <LoadingPage /> */}
        <>
          <Sidebar />
          {/* <Header /> */}
          <div className="Content">
            <Routes>
              {router.map((item) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={item.element}
                />
              ))}
            </Routes>
          </div>
        </>
      </BrowserRouter>
    </div>
  );
}
