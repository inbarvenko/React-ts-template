import { CalendarPageWrapper } from './CalendarPageWrapper'
import Calendar from '../../widgets/Calendar'


const CalendarPage = () => (
    <CalendarPageWrapper>
      <div className='Header'>
        <p className="Header-text">Календарь ближайших событий</p>
        <p className="Header-text">Настройки</p>
      </div>

      <Calendar />
        
    </CalendarPageWrapper>
  )

export default CalendarPage