import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

const Context = createContext(
  {} as {
    message: string;
    severity: 'success' | 'info' | 'warning' | 'error';
    setMessage: (
      message: string,
      severity?: 'success' | 'info' | 'warning' | 'error',
    ) => void;
    hide: () => void;
    open: boolean;
  },
);

function GlobalSnackbarProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<
    'success' | 'info' | 'warning' | 'error'
  >('success');
  const [open, setOpen] = useState(false);

  const show = (
    newMessage: string,
    newSeverity?: 'success' | 'info' | 'warning' | 'error',
  ) => {
    setMessage(newMessage);
    setSeverity(newSeverity || 'info');
    setOpen(true);
  };

  const hide = () => {
    setOpen(false);
  };

  return (
    <Context.Provider
      value={{ message, severity, setMessage: show, hide, open }}
    >
      {children}
    </Context.Provider>
  );
}

export const useGlobalSnackbar = () => useContext(Context);

export default GlobalSnackbarProvider;
