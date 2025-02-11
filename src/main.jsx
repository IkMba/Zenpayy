import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "@/components/ui/sonner";
// import { Toaster } from "@/components/ui/toaster"

import AppRoutes from "./AppRoutes.jsx";
import { persistor, store } from "./utils/store.js";
import { PersistGate } from "redux-persist/integration/react";

// import { PersistGate } from "redux-persist/";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <QueryClientProvider client={queryClient}>
            <AppRoutes />
            <Toaster visibleToasts={1} position="top-right" richColors />
            {/* <Toaster  /> */}
          </QueryClientProvider>
        </Router>
      </PersistGate>
    </Provider>
  </StrictMode>
);
