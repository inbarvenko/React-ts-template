import {
  BiCalendarAlt,
  BiFileBlank,
  BiFolder,
  BiGitRepoForked,
  BiHelpCircle,
  BiHomeAlt2,
} from "react-icons/bi";
import { SiderItemType } from "../widgets/Sidebar/types/types";
import TablePage from "../pages/TablePage/TablePage";
import EmptyPage from "../pages/EmptyPage/EmptyPage";
import CalendarPage from "../pages/CalendarPage/CalendarPage";
import HelpPage from "../pages/HelpPage/HelpPage";

export const routersData: SiderItemType[] = [
  {
    label: "Главная страница",
    path: "/",
    icon: <BiHomeAlt2 size={20} />,
    element: <TablePage />,
  },
  {
    label: "Все документы",
    icon: <BiFileBlank size={20} />,
    children: [
      {
        label: "Отчетные документы",
        path: "/report",
        element: <EmptyPage />,
      },
      {
        label: "Награждения",
        path: "/reward",
        element: <EmptyPage />,
      },
      {
        label: "Олимпиады",
        path: "/olympiad",
        element: <EmptyPage />,
      },
      {
        label: "Требования",
        path: "/application",
        element: <EmptyPage />,
      },
      {
        label: "Конфиденциальность",
        path: "/privacy",
        element: <EmptyPage />,
      },
      {
        label: "Регламенты",
        children: [
          {
            label: "Регистрации и использ. мобильных устройств",
          },
          {
            label: "Управление доступом",
          },
          {
            label: "Сетевой безопасности",
          },
          {
            label: "Защиты АВЗ",
          },
          {
            label: "Резервного копирования и восстановления",
          },
        ],
      },
      {
        label: "Дополнительно",
        path: "/additional",
        element: <EmptyPage />,
      },
    ],
  },
  {
    label: "Структура организации",
    path: "/structure",
    icon: <BiGitRepoForked size={20} />,
    element: <EmptyPage />,
  },
  {
    label: "Формы",
    path: "/forms",
    icon: <BiFolder size={20} />,
    element: <EmptyPage />,
  },
  {
    label: "Календарь",
    path: "/calendar",
    icon: <BiCalendarAlt size={20} />,
    element: <CalendarPage />,
  },
  {
    label: "Помощь",
    path: "/help",
    icon: <BiHelpCircle size={20} />,
    element: <HelpPage />,
  },
];