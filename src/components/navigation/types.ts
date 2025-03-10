export interface MenuItem {
  label: string;
  href?: string;
  icon?: React.ComponentType;
  items?: MenuItem[];
}

export interface NavigationState {
  activeDropdown: string | null;
  expandedMobileItems: string[];
}