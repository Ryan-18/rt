import { Home, Leaf, MessageCircle } from 'lucide-react';
import { SidebarItem } from '../types';

export const MENU_ITEMS: SidebarItem[] = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: MessageCircle, label: 'AyurBot', href: '/chat' },
  { icon: Leaf, label: 'Herb Detection', href: '/herb-detection' },
];