import { CalendarPageWrapper } from "./CalendarPageWrapper";
import Calendar from "../../widgets/Calendar";
import Layout from "../../shared/ui/Layout/Layout";

const CalendarPage = () => (
  <CalendarPageWrapper>
    <Layout title="Календарь 2024">
      <Calendar />
    </Layout>
  </CalendarPageWrapper>
);

export default CalendarPage;
