import { ReactNode } from "react";

export type ButtonType = 'save' | 'delete' | 'close' | 'edit' | '';

export type ButtonLoadingType = {
  loading: boolean;
  type: ButtonType;
}

export type ModalProps = {
  header: string;
  children?: ReactNode;
  onClose: () => void;
  onSave?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
}