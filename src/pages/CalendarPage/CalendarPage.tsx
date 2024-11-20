import { CalendarPageWrapper } from "./CalendarPageWrapper";
import Calendar from "../../widgets/Calendar";
import Layout from "../../shared/ui/Layout/Layout";
import { events } from "../../widgets/Calendar/constants/mock.data";

const CalendarPage = () => (
  <CalendarPageWrapper>
    <Layout title="Календарь 2024">
      <Calendar schedule={events} />
    </Layout>
  </CalendarPageWrapper>
);

export default CalendarPage;
