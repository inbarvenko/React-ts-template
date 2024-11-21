import { ReactNode } from "react";

export type ButtonType = "save" | "delete" | "close" | "edit" | "";

export type ButtonLoadingType = {
  loading: boolean;
  type: ButtonType;
};

export type ModalProps = {
  editable?: boolean;
  showEditButton?: boolean;
  header: string;
  children?: ReactNode;
  deleteTitle?: string;
  onClose: () => void;
  onSave?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
};
