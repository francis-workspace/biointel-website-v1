import { createContext } from 'react';

type SubscribeModalContextValue = {
  isSubscribeOpen: boolean;
  openSubscribe: () => void;
  closeSubscribe: () => void;
};

export const SubscribeModalContext = createContext<SubscribeModalContextValue | null>(null);
export type { SubscribeModalContextValue };
