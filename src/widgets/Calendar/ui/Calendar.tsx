import { useCallback, useMemo, useState } from "react";
import { presetGpnDefault, Theme } from "@consta/uikit/Theme";
import { reactBigCalendarAdapter } from "@consta/react-big-calendar-adapter/reactBigCalendarAdapter";
import moment from "moment";
import {
  Calendar as BigCalendar,
  momentLocalizer,
  ToolbarProps,
} from "react-big-calendar";

import ModalInfo from "../../../features/ModalInfo";
import ModalWithForm from "../../../features/ModalWithForms";
import { backgroundEvent, events } from "../constants/mock.data";
import { EventType } from "../types/types";
import { CalendarWrapper } from "./CalendarWrapper";
import CustomToolbar from "./СustomToolbar/СustomToolbar";
import { DatePicker, Form, Input } from "antd";

moment.locale("ru");
const localizer = momentLocalizer(moment);

const Calendar = () => {
  const { defaultDate } = useMemo(
    () => ({
      defaultDate: new Date(2022, 3, 1),
    }),
    []
  );
  const [isModalInfoOpened, setModalInfoOpen] = useState<boolean>(false);
  const [isModalFormOpened, setModalFormOpen] = useState<boolean>(false);

  const [selectedEvent, setSelectedEvent] = useState<EventType>(
    {} as EventType
  );

  const { prefix, messages, views, formats, step } = reactBigCalendarAdapter({
    doubled: false,
    sliced: false,
    className: "Adapter",
  });

  const eventPropGetter = useCallback(
    // end, isSelected
    (event, start) => ({
      ...(moment(start).hour() < 12 && {
        className: "bubble-1",
      }),
      ...(event.title.includes("Что-то") && {
        className: "bubble-2",
      }),
    }), []
  );

  const onSelectEvent = (event: EventType) => {
    if (isModalFormOpened) {
      return;
    }

    setModalInfoOpen(true);
    setSelectedEvent(event);

    const nodeModal = document.getElementsByClassName("rbc-overlay");
    console.log(nodeModal[0]);

    if (!nodeModal[0]) {
      return;
    }

    nodeModal[0].classList.add("close");
  };

  const onModalInfoClose = () => {
    setModalInfoOpen(false);

    const nodeSelectedEvent = document.getElementsByClassName("rbc-selected");
    nodeSelectedEvent[0].classList.remove("rbc-selected");
  };

  const onModalFormOpen = () => {
    if (isModalInfoOpened) {
      return;
    }

    setModalFormOpen(true);
  };

  const onModalFormClose = () => {
    setModalFormOpen(false);
  };

  const ToolbarWithProps = (props: ToolbarProps) => <CustomToolbar onClickAdd={onModalFormOpen} {...props} />;

  return (
    <CalendarWrapper>
      {isModalInfoOpened && (
        <ModalInfo
          header="Данные о событии"
          title={selectedEvent.title}
          onClose={onModalInfoClose}
          onSave={() => console.log("save")}
          onDelete={() => console.log("delete")}
        />
      )}

      {isModalFormOpened && (
        <ModalWithForm
          header="Создание события"
          onClose={onModalFormClose}
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
              label="Начало"
              rules={[{ required: true }]}
              className="form-item"
            >
              <DatePicker placeholder="Выберите дату" />
            </Form.Item>

            <Form.Item
              name="end"
              label="Конец"
              rules={[{ required: true }]}
              className="form-item"
            >
              <DatePicker placeholder="Выберите дату" />
            </Form.Item>
          </div>
        </ModalWithForm>
      )}

      <Theme className="Calendar" preset={presetGpnDefault}>
        <BigCalendar
          popup
          selectable
          toolbar
          showMultiDayTimes
          defaultView="month"
          defaultDate={defaultDate}
          events={events}
          backgroundEvents={backgroundEvent}
          localizer={localizer}
          step={step}
          tooltipAccessor={(event) => event.title}
          className={prefix}
          formats={formats}
          views={views}
          messages={messages}
          components={{ toolbar: ToolbarWithProps }}
          onSelectSlot={onModalFormOpen}
          eventPropGetter={eventPropGetter}
          onSelectEvent={onSelectEvent}
        />{" "}
      </Theme>
    </CalendarWrapper>
  );
};

export default Calendar;
