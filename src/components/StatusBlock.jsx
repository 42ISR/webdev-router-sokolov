export default function StatusBlock({ emoji, title, subtitle, actionLabel, onAction }) {
  return (
    <div className="status-block">
      <div className="status-emoji">{emoji}</div>
      <p className="status-title">{title}</p>
      <p className="status-sub">{subtitle}</p>
      {actionLabel && (
        <button type="button" className="btn ghost" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}
