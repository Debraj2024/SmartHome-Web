
import {
  Activity as ActivityIcon,
  Lightbulb,
  Clock,
  Trash2
} from "lucide-react";

export default function Activity({ activities, onClear }) {
  return (
    <div className="activity-page">
      <div className="activity-heading">
        <div>
          <h2>Activity History</h2>
          <p>Monitor your smart home events</p>
        </div>

        <button
          className="clear-history"
          onClick={onClear}
          disabled={activities.length === 0}
        >
          <Trash2 size={16} />
          Clear History
        </button>
      </div>

      {activities.length === 0 ? (
        <div className="activity-empty panel">
          <ActivityIcon size={42} />
          <h3>No activity yet</h3>
          <p>Your light activity will appear here.</p>
        </div>
      ) : (
        <div className="activity-list panel">
          {activities.map((item) => (
            <div className="activity-item" key={item.id}>
              <div className={`activity-icon ${item.status.toLowerCase()}`}>
                <Lightbulb size={20} />
              </div>

              <div className="activity-info">
                <h3>Tube Light turned {item.status}</h3>
                <p>
                  <Clock size={13} />
                  {item.time}
                </p>
              </div>

              <span className={`activity-status ${item.status.toLowerCase()}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
