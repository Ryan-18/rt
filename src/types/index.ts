import { LucideIcon } from 'lucide-react';

export interface Message {
  text: string;
  isBot: boolean;
}

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export interface ChatContainerProps {
  messages: Message[];
  isTyping: boolean;
}

export interface ChatMessageProps {
  message: string;
  isBot: boolean;
  isTyping?: boolean;
}

export interface MessageBubbleProps {
  message: string;
  isBot: boolean;
  isTyping?: boolean;
}

export interface AvatarProps {
  isBot: boolean;
}

export interface SidebarItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

export interface HerbResult {
  name: string;
  description: string;
  benefits: string[];
  traditionalUses: string;
  confidence: number;
}