
import {
  Lightbulb,
  Cpu,
  Wifi,
  ChevronRight,
  Plus
} from "lucide-react";

export default function Devices({
  onOpenDevice,
  isLightOn,
  deviceName
}) {
  const devices = [
    {
      id: "ESP8266-001",
      name: deviceName,
      type: "Smart Lighting",
      hardware: "NodeMCU ESP8266",
      status: "Online"
    }
  ];

  return (
    <div className="devices-page">

      <div className="devices-heading">
        <div>
          <h2>My Devices</h2>
          <p>Manage your connected smart home devices</p>
        </div>

        <button className="add-device-button" disabled>
          <Plus size={17} />
          Add Device
        </button>
      </div>

      <div className="devices-summary">
        <div className="device-summary-card panel">
          <span>Total Devices</span>
          <h2>{devices.length}</h2>
        </div>

        <div className="device-summary-card panel">
          <span>Online Devices</span>
          <h2>{devices.filter(device => device.status === "Online").length}</h2>
        </div>

        <div className="device-summary-card panel">
          <span>Offline Devices</span>
          <h2>0</h2>
        </div>
      </div>

      <div className="devices-list">
        {devices.map(device => (
          <div className="device-card panel" key={device.id}>

            <div className="device-card-top">
              <div className="device-icon">
                <Lightbulb size={27} />
              </div>

              <span className="device-status">
                <span className="online-dot"></span>
                {device.status}
              </span>
            </div>

            <div className="device-card-info">
              <h3>{device.name}</h3>
              <p>{device.type}</p>
            </div>

            <div className="device-details">
              <div>
                <span>Device ID</span>
                <strong>{device.id}</strong>
              </div>

              <div>
                <span>Hardware</span>
                <strong>{device.hardware}</strong>
              </div>

              <div>
                <span>Light Status</span>
                <strong>{isLightOn ? "ON" : "OFF"}</strong>
              </div>
            </div>

            <button
              className="device-config-button"
              onClick={() => onOpenDevice(device.id)}
            >
              Open Configuration
              <ChevronRight size={17} />
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}
