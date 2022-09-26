import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import MuiTheme from "../components/mui-theme";
import FirebaseAuthProvider from "../hooks/auth/use-auth";
import GlobalSnackbarProvider from "../hooks/use-global-snackbar";
import type { NextPageWithLayout } from "../components/layout";
import type { AppProps } from "next/app";
import "../styles/globals.css";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? ((page) => page);

  return (
    <MuiTheme>
      <QueryClientProvider client={queryClient}>
        <GlobalSnackbarProvider>
          <FirebaseAuthProvider>
            {Layout(<Component {...pageProps} />)}
          </FirebaseAuthProvider>
        </GlobalSnackbarProvider>
      </QueryClientProvider>
    </MuiTheme>
  );
}

export default MyApp;
