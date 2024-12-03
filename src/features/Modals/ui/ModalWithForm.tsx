import { Form } from "antd";
import Modal from "./Modal";
import { ModalProps } from "../types/types";

type Props = ModalProps & {};

const ModalWithForm = ({ children, ...props }: Props) => {
  const [form] = Form.useForm();

  return (
    <Modal {...props}>
      <Form form={form} layout="vertical">
        {children}
      </Form>
    </Modal>
  );
};

export default ModalWithForm;
