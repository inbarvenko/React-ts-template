import "./shared/assets/fonts/fonts.css";
import "./App.css";
import CalendarPage from "./pages/calendar/CalendarPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./widgets/Sidebar/ui/Sidebar";

const router = [
  {
    path: "/",
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
];

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="Content">
          <Routes>
            {router.map((item) => (
              <Route key={item.path} path={item.path} element={item.element} />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
