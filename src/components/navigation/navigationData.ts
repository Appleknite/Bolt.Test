import { MenuItem } from './types';
import { Settings, Filter, Info, Phone } from 'lucide-react';

export const menuItems: MenuItem[] = [
  {
    label: 'Products',
    items: [
      { label: 'Flushing Fluid', href: '/products/flushing-fluid' },
      { label: 'System Cleaner', href: '/products/system-cleaner' }
    ]
  },
  {
    label: 'Services',
    items: [
      { label: 'Design', href: '/services/design' },
      { label: 'Cleaning', href: '/services/cleaning' },
      { label: 'Testing', href: '/services/testing' }
    ]
  },
  {
    label: 'Filter System',
    icon: Filter,
    href: '/filter-system'
  },
  {
    label: 'Technical Information',
    icon: Settings,
    href: '/technical'
  },
  {
    label: 'About Us',
    icon: Info,
    href: '/about'
  },
  {
    label: 'Contact Us',
    icon: Phone,
    href: '/contact'
  }
];