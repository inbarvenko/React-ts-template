import "./RegistryPage.css";
import { Divider, Form, Select } from "antd";
import moment from "moment";
// import {
//   bookAppointmenet,
//   cancelAppointmenet,
//   getRegistratorShedule,
//   useGetEmployes,
// } from "../../DataService";
import { useEffect, useRef, useState } from "react";
import Calendar from "../widgets/Calendar";
// import NewBookingForm from "../../Components/Forms/NewBookingForm/NewBookigForm";
// import LoadingAnimation from "../../Components/LoadingAnimation/LoadingAnimation";
// import { NotificationContext } from "../../Context/NotificationContext";

const TestCalendar = () => {
  // const { employes, isEmployesLoading } = useGetEmployes();
  // const { setNotificationData } = useContext(NotificationContext); //Контекст для оповещений
  // const [specializations, setSpecializations] = useState([]);
  // const [employesIsDisabled, setEmployesIsDisabled] = useState(true);
  // const [spezializationEmployes, setSpezializationEmployes] = useState([]);
  const [isSheduleLoading, setIsSheduleLoading] = useState(false);
  const [cancelAppointmenetLoading, setCancelAppointmenetLoading] =
    useState(false); // Лоадер для отмены записи
  // const [selectedEmploye, setSelectedEmploye] = useState();
  const [shedule, setShedule] = useState([]);
  // const [timeSlots, setTimeSlots] = useState([]);
  // const [selectedTime, setSelectedTime] = useState<string>("");

  // const [formIsDisabled, setformIsDisabled] = useState(false);
  const [open, setOpen] = useState(false);

  const [form] = Form.useForm();

  // const intervalRef = useRef<number>(null); // Для хранения ссылки на интервал

  // создаю массив специализаций для теста
  // useEffect(() => {
  //   const uniqueSpecArr = [
  //     ...new Set(employes ? employes.map((emp) => emp.spezialization) : []),
  //   ]
  //     .filter((spezialization) => spezialization !== "")
  //     .map((spezialization, index) => ({
  //       id: index + 1,
  //       name: spezialization,
  //     }));
  //   setSpecializations(uniqueSpecArr);
  // }, [isEmployesLoading]);

  // убираю фокус со всех элементов, когда идет загрузка
  useEffect(() => {
    document.activeElement?.blur();
  }, [isSheduleLoading, cancelAppointmenetLoading]);

  // Обновление расписания каждые 60 секунд
  // useEffect(() => {
  //   if (selectedEmploye) {
  //     getSheduleData(selectedEmploye);

  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //     }

  //     intervalRef.current = setInterval(() => {
  //       getSheduleData(selectedEmploye);
  //     }, 60000); // 60 секунд

  //     return () => clearInterval(intervalRef.current);
  //   }
  // }, [selectedEmploye]);

  // // функция получения расписания для выбранного врача
  // const getSheduleData = async (doctorId) => {
  //   setIsSheduleLoading(true);
  //   const { error, sheduleData } = await getRegistratorShedule(doctorId);

  //   if (error) {
  //     setIsSheduleLoading(false);
  //     setSelectedEmploye(null);
  //     form.setFieldValue("employe", null);
  //     setShedule([]);
  //   }

  //   if (
  //     sheduleData &&
  //     sheduleData.errors &&
  //     Array.isArray(sheduleData.errors)
  //   ) {
  //     console.log(sheduleData.errors[0].errorMessage);
  //     setSelectedEmploye(null);
  //     form.setFieldValue("employe", null);
  //     setIsSheduleLoading(false);
  //   }

  //   if (sheduleData && !sheduleData.errors) {
  //     const currentDateTime = new Date();

  //     const filteredData = sheduleData.onlineBookingSlots.filter((slot) => {
  //       const slotStartTime = new Date(slot.startTime);
  //       return !slot.isFree || slotStartTime > currentDateTime;
  //     });

  //     const dataArr = filteredData.map((el) => ({
  //       start: new Date(el.startTime),
  //       end: new Date(el.endTime),
  //       isFree: el.isFree,
  //       appointmentDetails: el.appointmentDetails,
  //     }));
  //     setShedule(dataArr);

  //     const timeSlots = filteredData
  //       .filter((item) => item.isFree === true)
  //       .map((item, index) => ({
  //         id: index,
  //         label: `${moment(item.startTime).format("DD.MM.YYYY HH:mm")} - ${moment(item.endTime).format("HH:mm")}`,
  //         timeBegin: item.startTime,
  //       }));
  //     setTimeSlots(timeSlots);

  //     setIsSheduleLoading(false);
  //   }
  // };

  // const handleSpezializationsChange = (value, option) => {
  //   const selectedSpec = option.label;
  //   setSpezializationEmployes(
  //     employes.filter((spec) => spec.spezialization === selectedSpec),
  //   );
  //   setEmployesIsDisabled(false);
  //   form.setFieldValue("employe", undefined);
  //   setTimeSlots([]);
  //   setShedule([]);
  // };

  // const handleEmployeSelect = (value) => {
  //   setSelectedEmploye(value);
  // };

  const handleSelectEvent = (event) => {
    const data = moment(event).format("YYYY-MM-DDTHH:mm:ss");
    setSelectedTime(data);
    setOpen(true);
  };

  // if (isEmployesLoading) {
  //   return <LoadingAnimation text="Получение данных о персонале..." />;
  // }

  // // функция бронирования талона
  // const onFinish = async (data) => {
  //   setformIsDisabled(true);
  //   try {
  //     const result = await bookAppointmenet(data);
  //     console.log("success", result);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     await getSheduleData(selectedEmploye); // Обновление расписания после записи
  //     setformIsDisabled(false);
  //     setOpen(false);
  //   }
  // };

  // функция отмены записи
  // const sendCancelAppointment = async (appointmentId) => {
  //   setCancelAppointmenetLoading(true); // Устанавливаем состояние загрузки при отмене записи
  //   try {
  //     const result = await cancelAppointmenet(
  //       appointmentId,
  //       "Запись отменена пользователем",
  //     );
  //     console.log(result);
  //   } catch (error) {
  //     console.error("Ошибка при отмене записи:", error);
  //   } finally {
  //     await getSheduleData(selectedEmploye); // Обновление расписания после отмены записи
  //     setCancelAppointmenetLoading(false); // Завершаем состояние загрузки
  //   }
  // };

  return (
    <>
      {/* Загрузка при отмене записи
      {cancelAppointmenetLoading && (
        <LoadingAnimation text="Отмена записи к врачу..." />
      )} */}

      {/* Загрузка при отсутствии расписания или обновлении данных */}
      {/* {isSheduleLoading && !shedule.length && (
        <LoadingAnimation text={"Обновление данных о расписании..."} />
      )} */}

      <h1>Электронная регистратура</h1>
      <Divider />
      <Form
        form={form}
        layout="inline"
        style={{
          gap: 15,
        }}
        disabled={isSheduleLoading}
      >
        {/* Поле "Специализация" */}
        {/* <Form.Item name="spec" label="Специализация">
          <Select
            style={{ width: 300, borderRadius: "0px!important" }}
            placeholder="Укажите специализацию врача"
            showSearch
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            } //Поиск по label при вводе с клавиатуры
            options={
              specializations
                ? specializations.map((spec) => ({
                    value: spec.id,
                    label: spec.name,
                  }))
                : []
            }
            onChange={handleSpezializationsChange}
          />
        </Form.Item> */}

        {/* Поле "Выбор врача" */}
        {/* <Form.Item name="employe" label="Выберите врача">
          <Select
            style={{ width: 300 }}
            showSearch
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            } //Поиск по label при вводе с клавиатуры
            options={
              spezializationEmployes
                ? spezializationEmployes.map((employe) => ({
                    value: employe.uid,
                    label: `${employe.lastname} ${employe.firstname} ${employe.middlename}`,
                  }))
                : []
            }
            placeholder="Укажите ФИО врача"
            disabled={employesIsDisabled}
            loading={isEmployesLoading}
            onChange={handleEmployeSelect}
          />
        </Form.Item> */}
      </Form>
      <Divider />

      <Calendar
        schedule={shedule}
        // sendCancelAppointment={sendCancelAppointment}
        cancelAppointmenetLoading={cancelAppointmenetLoading}
        handleSelectEvent={handleSelectEvent}
      />

      {/* <NewBookingForm
        open={open}
        onCancel={() => setOpen(false)}
        timeOptions={timeSlots}
        selectedTime={selectedTime}
        employeeId={selectedEmploye}
        onFinish={onFinish}
        disabled={formIsDisabled}
      /> */}
    </>
  );
};

export default TestCalendar;
