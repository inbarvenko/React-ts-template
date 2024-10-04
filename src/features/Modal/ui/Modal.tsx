import { BiX } from "react-icons/bi";
import ModalWrapper from "./ModalWrapper";
import { ReactNode, useState } from "react";
import { Button } from "../../../shared/ui/Button/Button";
import { ButtonLoadingType, ButtonType } from "../types/types";

type Props = {
  header: string;
  title: string;
  description?: string;
  extraInfo?: ReactNode;
  onClose: () => void;
  onSave?: () => void;
  onDelete?: () => void;
};

const Modal = ({
  header,
  title,
  description,
  extraInfo,
  onClose,
  onSave,
  onDelete,
}: Props) => {
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
        <div className="body-info">
          <p className="body-info-title">Название:</p>
          <p className="body-info-text">{title}</p>
        </div>

        {description && (
          <div className="body-info">
            <p className="body-info-title">Описание:</p>
            <p className="body-info-text">{description}</p>
          </div>
        )}

        {extraInfo}

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
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
