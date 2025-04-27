import { Message } from '../types';

export const addMessage = (messages: Message[], newMessage: Message): Message[] => {
  return [...messages, newMessage];
};

export const createUserMessage = (text: string): Message => ({
  text,
  isBot: false,
});

export const createBotMessage = (text: string): Message => ({
  text,
  isBot: true,
});