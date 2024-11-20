import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ruLocale from "@fullcalendar/core/locales/ru";
import { Avatar, Button, Divider, Popconfirm, Popover } from "antd";
import moment from "moment";
import { CloseCircleOutlined, QuestionCircleOutlined } from "@ant-design/icons";

type Props = {
  schedule: any[];
  sendCancelAppointment?: (uid: string) => void;
  cancelAppointmenetLoading?: boolean;
  handleSelectEvent?: (event: any) => void;
};

const Calendar: React.FC<Props> = ({
  schedule,
  sendCancelAppointment,
  cancelAppointmenetLoading,
  handleSelectEvent,
}: Props) => {
  const events = schedule.map((event) => ({
    start: event.start,
    end: event.end,
    extendedProps: {
      isFree: event.isFree,
      appointmentDetails: event.appointmentDetails,
    },
  }));

  const CustomEventWrapper = ({ children, appointmentDetails, timeText }) => (
    //Обёртка с Popover для занятых событий
    <Popover
      title="Детали записи"
      placement="topLeft"
      autoAdjustOverflow
      content={
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Avatar
              src={`data:image/webp;base64,${appointmentDetails.smallPhoto}`}
              style={{ background: "#4444441c" }}
              size={52}
              alt={appointmentDetails.fullName}
              shape="square"
            />
            <div>
              <div>{appointmentDetails.fullName}</div>
              <div style={{ color: "#0000007d" }}>
                {appointmentDetails.jobTitle}
              </div>
            </div>
          </div>
          <Divider style={{ marginTop: 12, marginBottom: 7 }} />
          <span style={{ fontWeight: 600 }}>Время приёма: {timeText}</span>
        </div>
      }
    >
      {children}
    </Popover>
  );

  const renderEventContent = (eventInfo) => {
    //Кастомный рендеринг события
    const isFree = eventInfo.event.extendedProps.isFree;
    const appointmentDetails = eventInfo.event.extendedProps.appointmentDetails;
    const isEventPast = moment(eventInfo.event.start).isAfter(new Date()); //определяю прошло ли время начала события
    return !isFree ? ( //если событие занято оборачиваю его в Popover
      <CustomEventWrapper
        appointmentDetails={appointmentDetails}
        timeText={eventInfo.timeText}
      >
        <div className="event busy">
          <span>{eventInfo.timeText}</span>
          {isEventPast ? (
            <Popconfirm
              title="Отмена записи"
              description="Вы действительно хотитте отменить запись к врачу?"
              icon={<QuestionCircleOutlined style={{ color: "#ed7474" }} />}
              onConfirm={(e) => {
                e?.stopPropagation();
                sendCancelAppointment?.(appointmentDetails.appointmentUid);
              }}
              onCancel={(e) => e?.stopPropagation()}
              okText="Да"
              cancelText="Нет"
              cancelButtonProps={{
                disabled: cancelAppointmenetLoading,
              }}
              zIndex={900}
              placement="bottomRight"
              autoAdjustOverflow
            >
              <Button
                type="text"
                shape="circle"
                className="CancelAppointmentButton"
                icon={
                  <CloseCircleOutlined
                    color="#fff"
                    style={{ fontSize: 18, color: "#fff" }}
                  />
                }
                onClick={(e) => e.stopPropagation()}
              />
            </Popconfirm>
          ) : null}
        </div>
      </CustomEventWrapper>
    ) : (
      //если событие не занято вывожу его
      <div
        className="event"
        onClick={() => handleSelectEvent?.(eventInfo.event.start)}
      >
        <span>{eventInfo.timeText}</span>
      </div>
    );
  };

  return (
    <FullCalendar
      nowIndicator //Отображение красной полосы с текущим временем
      editable={false}
      selectable={false}
      allDaySlot={false} //Убираю строку которая отображает события на весь день
      height="auto"
      initialView="dayGridMonth"
      now={new Date()}
      locale={ruLocale}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      businessHours={{
        //Рабочие дни/время
        daysOfWeek: [1, 2, 3, 4, 5, 6],
        startTime: "07:00",
        endTime: "19:30",
      }}
      slotDuration="00:15:00" //Продолжительность ячейки календаря в неделях и днях
      slotMinTime="07:00:00" //Время начала календаря
      slotMaxTime="20:00:00" //Время окончания календаря
      slotLabelFormat={{
        //делаю время для слотов в левой стороне представления по дням/неделям иначе ровное время выводится как 08 а не 08:00
        hour: "2-digit",
        minute: "2-digit",
        omitZeroMinute: false,
        meridiem: "short",
      }}
      headerToolbar={{
        //Отрисовка панели над календарём
        left: "prev,today,next",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      buttonText={{
        //Назавания кнопок на панели
        today: "Сегодня",
        week: "Неделя",
        day: "День",
      }}
      events={events}
      eventContent={renderEventContent}
    />
  );
};

export default Calendar;
