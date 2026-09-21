import "./AlertsButton.css";

export function AlertsButton({ label = "Alerts", hasNotification = true, onClick }) {
  return (
    <button className="alerts-btn" type="button" onClick={onClick}>
      <span className="stroke stroke-1" aria-hidden="true" />
      <span className="stroke stroke-2" aria-hidden="true" />
      <span className="stroke stroke-3" aria-hidden="true" />

      <span className="left">
        <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M18 8.4A6 6 0 0 0 6 8.4c0 6.3-2.4 8.1-2.4 8.1h16.8S18 14.7 18 8.4Z"
            stroke="#fff"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.7 20.1a1.95 1.95 0 0 1-3.4 0"
            stroke="#fff"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="label">{label}</span>
      </span>

      {hasNotification && <span className="dot" aria-hidden="true" />}

      <span className="inner-1" aria-hidden="true" />
      <span className="inner-2" aria-hidden="true" />
    </button>
  );
}
