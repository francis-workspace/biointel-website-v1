import { useMemo, useState } from 'react';
import { SubscribeModalContext } from './SubscribeModalContext';

type SubscribeModalProviderProps = {
  children: React.ReactNode;
};

export const SubscribeModalProvider = ({ children }: SubscribeModalProviderProps) => {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  const value = useMemo(
    () => ({
      isSubscribeOpen,
      openSubscribe: () => setIsSubscribeOpen(true),
      closeSubscribe: () => setIsSubscribeOpen(false),
    }),
    [isSubscribeOpen]
  );

  return <SubscribeModalContext.Provider value={value}>{children}</SubscribeModalContext.Provider>;
};
