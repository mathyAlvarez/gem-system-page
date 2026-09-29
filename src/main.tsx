import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@gem-org/gem-system/styles.css";
import "@gem-org/gemffects/styles.css";
import "@gem-org/gemsitions/styles.css";
import "./index.css";
import "./styles/docs.scss";
import "./styles/tailwind.css";
import "./locales/index.ts";
import "./theme.ts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
