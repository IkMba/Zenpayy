import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "@/components/ui/sonner"
// import { Toaster } from "@/components/ui/toaster"



import AppRoutes from "./AppRoutes.jsx";
import store from "./utils/store.js";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <QueryClientProvider client={queryClient}>
        <AppRoutes />
        <Toaster visibleToasts={1} position="top-right" richColors />
        {/* <Toaster  /> */}

        </QueryClientProvider>
      </Router>
    </Provider>
  </StrictMode>
);
