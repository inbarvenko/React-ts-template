import React, { useMemo, useState } from "react";
import ruLocale from "@fullcalendar/core/locales/ru";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";

import { ModalEvent, ModalForm } from "../../../features/Modals";
import { CalendarWrapper } from "./CalendarWrapper";
import { DatePicker, Form, Input } from "antd";
import FullCalendar from "@fullcalendar/react";
import {
  DateSelectArg,
  EventClickArg,
  FormatterInput,
} from "@fullcalendar/core/index.js";
import { ThemeEnum } from "../../../shared/constants/constants";
import moment from "moment";
import { ModalEventType } from "../../../features/Modals/types/eventTypes";
import { EventType } from "../types/types";
import dayjs from "dayjs";

type Props = {
  schedule: EventType[];
};

const { RangePicker } = DatePicker;

const Calendar: React.FC<Props> = ({ schedule }: Props) => {
  const [isModalEventOpened, setModalEventOpen] = useState<boolean>(false);
  const [isAddModalOpened, setAddModalOpen] = useState<boolean>(false);

  const [selectedEvent, setSelectedEvent] = useState<ModalEventType>(
    {} as ModalEventType,
  );

  const events = useMemo(
    () =>
      schedule.map((event) => ({
        title: event.title,
        start: event.start,
        end: event.end,
        extendedProps: {
          textColor: "black",
          eventBackgroundColor: "red",
        },
      })),
    [schedule],
  );

  const onSelectEvent = (arg: EventClickArg) => {
    if (isAddModalOpened) {
      return;
    }

    console.log("Event selection", arg.event);
    setSelectedEvent({
      eventTitle: arg.event.title,
      eventStart: arg.event.startStr,
      eventEnd: arg.event.endStr,
    });

    const nodeSelectedEvent = document.getElementsByClassName("fc-popover");
    if (nodeSelectedEvent[0]) {
      nodeSelectedEvent[0].classList.add("display-none");
    }

    setModalEventOpen(true);
  };

  const onModalEventClose = () => {
    setModalEventOpen(false);

    // const nodeSelectedEvent = document.getElementsByClassName("fc-popover");
    // nodeSelectedEvent[0].classList.remove("fc-popover");
  };

  const openAddModalWithButton = (event: MouseEvent) => {
    if (isModalEventOpened) {
      return;
    }

    console.log(event);
    setSelectedEvent({} as ModalEventType);
    setAddModalOpen(true);
  };

  const openAddModal = (selectionInfo: DateSelectArg) => {
    if (isModalEventOpened) {
      return;
    }

    console.log("SLot info", selectionInfo);

    setSelectedEvent({
      eventTitle: "",
      eventEnd: selectionInfo.endStr,
      eventStart: selectionInfo.startStr,
    });
    setAddModalOpen(true);
  };

  const onAddModalClose = () => {
    setAddModalOpen(false);
  };

  const calendarConfig = useMemo(
    () => ({
      customButtons: {
        //Назавания кнопок на панели
        addEventButton: {
          // icon: () => <BiPlusCircle />,
          text: "Создать",
          click: openAddModalWithButton,
        },
      },
      buttonText: {
        //Назавания кнопок на панели
        today: "Сегодня",
        week: "Неделя",
        day: "День",
        quarterGrid: "Квартал",
      },
      headerToolbar: {
        //Отрисовка панели над календарём
        left: "title",
        center:
          "dayGridMonth,timeGridWeek,timeGridDay,quarterGrid,multiMonthYear",
        right: "prev,today,next addEventButton",
      },
      views: {
        dayGridMonth: {
          titleFormat: {
            year: "numeric" as "numeric" | "2-digit" | undefined,
            month: "long" as
              | "numeric"
              | "2-digit"
              | "long"
              | "short"
              | "narrow"
              | undefined,
          },
        },
        quarterGrid: {
          type: "multiMonth",
          duration: { months: 3 },
          titleFormat: {
            year: "numeric" as "numeric" | "2-digit" | undefined,
            month: "long" as
              | "numeric"
              | "2-digit"
              | "long"
              | "short"
              | "narrow"
              | undefined,
          },
          visibleRange: (currentDate: Date) => {
            const currentMonth = currentDate.getMonth();

            const quarter = (currentMonth - 1) / 3 + 1;
            const quarterStart = moment().quarter(quarter).startOf("quarter");
            const quarterEnd = moment().quarter(quarter).endOf("quarter");

            return { start: quarterStart.toDate(), end: quarterEnd.toDate() };
          },
        },
      },
      slotLabelFormat: {
        //делаю время для слотов в левой стороне представления по дням/неделям
        hour: "2-digit",
        minute: "2-digit",
        omitZeroMinute: false,
        meridiem: "short",
      } as FormatterInput,
      businessHours: {
        //Рабочие дни/время
        daysOfWeek: [1, 2, 3, 4, 5],
        startTime: "08:30",
        endTime: "18:00",
      },
      eventTimeFormat: {
        hour: "numeric" as "numeric" | "2-digit" | undefined,
        minute: "2-digit" as "numeric" | "2-digit" | undefined,
        meridiem: false,
      },
    }),
    [],
  );

  return (
    <CalendarWrapper themelocal={ThemeEnum.light}>
      {isModalEventOpened && (
        <ModalEvent
          editable
          header="Данные о событии"
          event={selectedEvent}
          onClose={onModalEventClose}
          onSave={() => console.log("save")}
          onDelete={() => console.log("delete")}
        />
      )}

      {isAddModalOpened && !isModalEventOpened && (
        <ModalForm
          header="Создание события"
          onClose={onAddModalClose}
          onSave={() => console.log("save")}
          onDelete={() => console.log("delete")}
          onEdit={() => console.log("edit")}
        >
          <div className="form">
            <Form.Item
              name="name"
              label="Название события"
              rules={[{ required: true }]}
              className="form-item"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="start"
              label="Длительность события"
              rules={[{ required: true }]}
              className="form-item"
            >
              <RangePicker
                showTime
                placeholder={["Выберите дату начала", "Выберите дату конца"]}
                defaultValue={[
                  dayjs(selectedEvent?.eventStart),
                  dayjs(selectedEvent?.eventEnd),
                ]}
              />
            </Form.Item>
          </div>
        </ModalForm>
      )}

      <FullCalendar
        selectable
        nowIndicator //Отображение красной полосы с текущим временем
        displayEventTime //Отображение времени событий
        editable={false}
        allDaySlot={false} //Убираю строку которая отображает события на весь день
        dayMaxEvents={5}
        height="auto"
        initialView="dayGridMonth"
        slotDuration="00:15:00" //Продолжительность ячейки календаря в неделях и днях
        slotMinTime="08:30:00" //Время начала календаря
        slotMaxTime="18:00:00" //Время окончания календаря
        now={new Date()}
        events={events}
        locale={ruLocale}
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          multiMonthPlugin,
        ]}
        select={openAddModal}
        eventClick={onSelectEvent}
        {...calendarConfig}
      />
    </CalendarWrapper>
  );
};

export default Calendar;
