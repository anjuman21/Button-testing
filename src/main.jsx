import React from "react";
import { createRoot } from "react-dom/client";
import { AlertsButton } from "./components/AlertsButton/AlertsButton";
import "./styles.css";
function App(){return <main className="page"><AlertsButton label="Alerts" hasNotification onClick={()=>console.log("Alerts clicked")}/></main>}
createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
