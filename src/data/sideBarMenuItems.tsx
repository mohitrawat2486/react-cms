// src/data/menuItems.tsx
import type { JSX } from 'react';
import { DashboardIcon, SettingsIcon, UsersIcon,BannersIcon,PagesIcon,FaqsIcon,MenusIcon } from './icons';

export interface MenuItem {
  label: string;
  href: string;
  icon: () => JSX.Element;
}

export const sideBarMenuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: DashboardIcon,
  },
  {
    label: 'WebSite Configuration',
    href: '/web-config',
    icon: SettingsIcon,
  },
  /*{
    label: 'Users',
    href: '/users',
    icon: UsersIcon,
  },*/
  {
    label: 'Menus',
    href: '/menus',
    icon: MenusIcon,
  },
  {
    label: 'Banners',
    href: '/banners',
    icon: BannersIcon,
  },
  {
    label: 'Pages',
    href: '/pages',
    icon: PagesIcon,
  },
  /*{
    label: 'Announcements',
    href: '/announcements',
    icon: AnnouncementsIcon,
  },*/
  {
    label: 'FAQs',
    href: '/faqs',
    icon: FaqsIcon,
  },
  /*{
    label: 'Settings',
    href: '/settings',
    icon: SettingsIcon,
  },*/
];
