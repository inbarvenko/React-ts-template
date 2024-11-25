import {
  BiCalendarAlt,
  BiFileBlank,
  BiFolder,
  BiGitRepoForked,
  BiHelpCircle,
  BiHomeAlt2,
} from "react-icons/bi";
import { SiderItemType } from "../types/types";

export const sidersTitles: SiderItemType[] = [
  {
    label: "Главная страница",
    path: "/",
    icon: <BiHomeAlt2 size={20} />,
  },
  {
    label: "Все документы",
    icon: <BiFileBlank size={20} />,
    children: [
      {
        label: "Отчетные документы",
        path: "/report",
      },
      {
        label: "Награждения",
        path: "/reward",
      },
      {
        label: "Олимпиады",
        path: "/olympiad",
      },
      {
        label: "Требования",
        path: "/application",
      },
      {
        label: "Конфиденциальность",
        path: "/privacy",
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
      },
    ],
  },
  {
    label: "Структура организации",
    path: "/structure",
    icon: <BiGitRepoForked size={20} />,
  },
  {
    label: "Формы",
    path: "/forms",
    icon: <BiFolder size={20} />,
  },
  {
    label: "Календарь",
    path: "/calendar",
    icon: <BiCalendarAlt size={20} />,
  },
  {
    label: "Помощь",
    path: "/help",
    icon: <BiHelpCircle size={20} />,
  },
];
