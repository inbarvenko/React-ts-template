export type SiderItemType = {
  label: string;
  path?: string;
  icon?: JSX.Element;
  element?: JSX.Element;
  children?: SiderItemType[];
};
