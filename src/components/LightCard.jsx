
import { Lightbulb, Power } from "lucide-react";

export default function LightCard({ isOn, onToggle }) {
  return (
    <div className="panel">
      <div className="light-card-header">
        <div>
          <h3>Light Control</h3>
          <p>Your Smart Tube Light</p>
        </div>

        <span className={`light-badge ${isOn ? "on" : "off"}`}>
          {isOn ? "ON" : "OFF"}
        </span>
      </div>

      <div className="light-preview">
        <Lightbulb size={48} />
        <div>
          <h2>{isOn ? "Tube Light is ON" : "Tube Light is OFF"}</h2>
          <span>
            {isOn ? "Light is currently active" : "Light is currently inactive"}
          </span>
        </div>
      </div>

      <button
        className={`power-button ${isOn ? "active" : ""}`}
        onClick={onToggle}
      >
        <Power size={19} />
        Turn {isOn ? "OFF" : "ON"}
      </button>

      <p className="demo-note">
        Demo mode · Hardware integration pending
      </p>
    </div>
  );
}

