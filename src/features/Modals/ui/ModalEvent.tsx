import { DatePicker } from "antd";
import { Modal, ModalProps } from "../../../shared/ui/Modal";
import { ModalEventType } from "../types/eventTypes";
import dayjs from "dayjs";

type Props = ModalProps & {
  event: ModalEventType;
};

const { RangePicker } = DatePicker;

const ModalEvent = ({ event, ...props }: Props) => {
  const { eventTitle, eventStart, eventEnd } = event;

  return (
    <Modal {...props}>
      <div className="body-info">
        <p className="body-info-title">Название:</p>
        <p className="body-info-text">{eventTitle}</p>
      </div>

      <div className="body-info">
        <p className="body-info-title">Длительность события:</p>
        <RangePicker
          showTime
          defaultValue={[dayjs(eventStart), dayjs(eventEnd)]}
          placeholder={["Дата начала", "Дата конца"]}
          className="body-info-range"
        />
      </div>
    </Modal>
  );
};

export default ModalEvent;
