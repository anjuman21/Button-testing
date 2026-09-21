import "./AlertsButton.css";
const FIGMA_NOTIFICATIONS_ICON="https://www.figma.com/api/mcp/asset/24e12660-fe6c-42cb-ac9e-d65872415e3e.svg";
const FIGMA_NOTIFICATION_DOT="https://www.figma.com/api/mcp/asset/d4111b54-214a-4bb3-b14a-6fbfb8e8b6b6.svg";
export function AlertsButton({label="Alerts",hasNotification=true,onClick}){return <button className="alerts-button" type="button" onClick={onClick} aria-label={label}><span className="alerts-content"><img className="alerts-icon" src={FIGMA_NOTIFICATIONS_ICON} alt="" aria-hidden="true"/><span className="alerts-label">{label}</span></span>{hasNotification&&<img className="alerts-dot" src={FIGMA_NOTIFICATION_DOT} alt="" aria-hidden="true"/>}</button>}
