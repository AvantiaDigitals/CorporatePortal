export type TypeParamsNavbarItem = {
  id: number;
  label: string;
  href: string;
  showMenu?: () => void;
  options?: TypeParamsNavbarItem[];
  scrolling?: boolean;
};
