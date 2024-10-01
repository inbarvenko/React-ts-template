import './App.css';
import { useCallback, useMemo, useState } from "react";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { reactBigCalendarAdapter } from "@consta/react-big-calendar-adapter/reactBigCalendarAdapter";
import moment from "moment";
import { backgroundEvent, events } from "./mock.data";

import { momentLocalizer, Calendar } from "react-big-calendar";
import HeaderWrapper from './App.styles';
import { EventType } from './types';
import Modal from './components/Modal/Modal';

moment.locale("ru");
const localizer = momentLocalizer(moment);

export default function App() {
  const { defaultDate } = useMemo(
    () => ({
      defaultDate: new Date(2022, 3, 1)
    }),
    []
  );
  const [isModalOpened, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventType>({} as EventType);

  const { prefix, messages, views, formats, step } = reactBigCalendarAdapter({
    doubled: false,
    sliced: false,
    className: "Adapter"
  });

  const eventPropGetter = useCallback(
    (event, start, end, isSelected) => ({
      ...(moment(start).hour() < 12 && {
        className: 'bubble-1',
      }),
      ...(event.title.includes('Что-то') && {
        className: 'bubble-2',
      }),
    }),
    []
  );

  const onSelectEvent = (event: EventType) => {
    setModalOpen(true);
    setSelectedEvent(event);

    const nodeModal = document.getElementsByClassName('rbc-overlay');
    console.log(nodeModal[0]);
    
    
    if(!nodeModal[0]) {
        return;
      }
      
    nodeModal[0].classList.add('close');
  }

  const onModalClose = () => {
    setModalOpen(false);
      
    const nodeSelectedEvent = document.getElementsByClassName('rbc-selected');
    nodeSelectedEvent[0].classList.remove('rbc-selected');
  }

  return (
    <div className='App'>
      <div className="Layout">
        <HeaderWrapper>
          <div className='Header'>
            <p className='Text'>Календарь ближайших событий</p>
            <p className='Text'>Настройки</p>
          </div>
        </HeaderWrapper>

        {isModalOpened &&
          <Modal
            event={selectedEvent}
            onClose={onModalClose}
          />
        }

        <Theme className='Calendar' preset={presetGpnDefault}>
          <Calendar
            popup
            showMultiDayTimes
            defaultView="month"
            defaultDate={defaultDate}
            events={events}
            backgroundEvents={backgroundEvent}
            localizer={localizer}
            step={step}
            tooltipAccessor={event => event.title}
            className={prefix}
            formats={formats}
            views={views}
            messages={messages}
            eventPropGetter={eventPropGetter}
            onSelectEvent={onSelectEvent}            
          />{" "}
        </Theme>
      </div>
    </div>
  );
}