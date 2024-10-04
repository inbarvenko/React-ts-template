export type ButtonType = 'save' | 'delete' | 'close' | '';

export type ButtonLoadingType = {
  loading: boolean;
  type: ButtonType;
}