import "./shared/assets/fonts/fonts.css";
import "./App.css";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./widgets/Sidebar/ui/Sidebar";
// import LoadingPage from "./pages/LoadingPage/LoadingPage";

const router = [
  {
    path: "/",
    element: <CalendarPage />,
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
    path: "/help",
    element: <CalendarPage />,
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
