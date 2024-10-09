import { BiX } from "react-icons/bi";
import ModalWrapper from "./ModalWrapper";
import { useState } from "react";
import { Button } from "../../Button/Button";
import { ButtonLoadingType, ButtonType, ModalProps } from "../types/types";

const Modal = ({
  header,
  children,
  onClose,
  onSave,
  onDelete,
  onEdit,
}: ModalProps) => {
  const [isLoading, setLoading] = useState<ButtonLoadingType>({
    loading: false, type: ''});

  const chooseFunc = (type: ButtonType) => {
    switch (type) {
      case 'delete':
        return onDelete;
      case 'save':
        return onSave;
      case 'close':
        return onClose;
      case 'edit':
        return onEdit;
      default:
        return; 
    }
  }

  const handleClick = (type: ButtonType) => {
    if (isLoading.loading) {
      return;
    }

    const func = chooseFunc(type);
    if (!func) {
      return;
    }

    setLoading({ loading: true, type});
    
    func();

    setTimeout(() => {
      setLoading({ loading: false, type: ''});
    }, 10000);
  }

  return (
    <ModalWrapper>
      <div className="modal-header">
        <p>{header}</p>
        <BiX size={25} className="modal-close" onClick={() => handleClick('close')} />
      </div>

      <div className="body">
        {children}

        <div className="body-buttons">
          {onDelete && <Button
            danger
            loading={isLoading.loading && isLoading.type === 'delete'}
            title="Удалить"
            onClick={() => handleClick('delete')}
            />}
          {onSave && <Button
            loading={isLoading.loading && isLoading.type === 'save'}
            title="Сохранить"
            type="primary"
            onClick={() => handleClick('save')}
            />}
          {onEdit && <Button
            loading={isLoading.loading && isLoading.type === 'edit'}
            title="Изменить"
            type="primary"
            onClick={() => handleClick('edit')}
          />}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;