import { Form } from "antd";

import { Modal, ModalProps } from "../../../shared/ui/Modal";

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
