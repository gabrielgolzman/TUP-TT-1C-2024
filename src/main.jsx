import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App.jsx";
import { AuthenticationContextProvider } from "./services/authentication/authentication.context.jsx";
import { ThemeContextProvider } from "./services/theme/theme.context.jsx";
import { TranslationContextProvider } from "./services/translation/translation.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <ThemeContextProvider>
        <TranslationContextProvider>
          <App />
        </TranslationContextProvider>
      </ThemeContextProvider>
    </AuthenticationContextProvider>
  </React.StrictMode>
);
