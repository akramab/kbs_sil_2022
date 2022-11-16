import "./styles/main.scss";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 

import React from "react";
import { createRoot } from "react-dom/client";
import App from "src/App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
