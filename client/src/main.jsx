import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store.js";

//redux persist
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ThemeProvider } from "./context/ThemeContext.jsx";

const container = document.getElementById("root");
const root = createRoot(container);
let persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </ReduxProvider>
    </ThemeProvider>
  </React.StrictMode>
);
