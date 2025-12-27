import { useContext } from 'react';
import { SubscribeModalContext } from './SubscribeModalContext';

export const useSubscribeModal = () => {
  const ctx = useContext(SubscribeModalContext);
  if (!ctx) {
    throw new Error('useSubscribeModal must be used within a SubscribeModalProvider');
  }
  return ctx;
};
