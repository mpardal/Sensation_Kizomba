import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

const Context = createContext(
  {} as {
    message: ReactNode;
    severity: 'success' | 'info' | 'warning' | 'error';
    setMessage: (
      message: ReactNode,
      severity?: 'success' | 'info' | 'warning' | 'error',
      duration?: number,
    ) => void;
    hide: () => void;
    open: boolean;
    duration?: number;
  },
);

function GlobalSnackbarProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<ReactNode>('');
  const [severity, setSeverity] = useState<
    'success' | 'info' | 'warning' | 'error'
  >('success');
  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState(6000);

  const show = (
    newMessage: ReactNode,
    newSeverity?: 'success' | 'info' | 'warning' | 'error',
    newDuration?: number,
  ) => {
    setMessage(newMessage);
    setSeverity(newSeverity || 'info');
    setOpen(true);

    if (newDuration) {
      setDuration(newDuration);
    }
  };

  const hide = () => {
    setOpen(false);
  };

  return (
    <Context.Provider
      value={{ message, severity, setMessage: show, hide, open, duration }}
    >
      {children}
    </Context.Provider>
  );
}

export const useGlobalSnackbar = () => useContext(Context);

export default GlobalSnackbarProvider;
