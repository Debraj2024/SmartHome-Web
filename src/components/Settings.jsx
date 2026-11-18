
import {
  Settings,
  Lightbulb,
  CloudSun,
  Bell,
  Wifi,
  Info
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="settings-page">

      {/* Device Settings */}
      
          <section className="settings-section panel">
              <div className="settings-section-heading">
                  <Lightbulb size={20} />
                  <div>
                      <h3>Device Settings</h3>
                      <p>Manage your smart lighting device</p>
                  </div>
              </div>

              <div className="settings-content">
                  <div className="setting-row">
                      <div className="setting-label">
                          <label>Device Name</label>
                          <span>Give your device a custom name</span>
                      </div>

                      <input
                          type="text"
                          defaultValue="Smart Tube Light"
                          className="settings-input"
                      />
                  </div>

                  <div className="setting-row">
                      <div className="setting-label">
                          <label>Device ID</label>
                          <span>Unique hardware identifier</span>
                      </div>

                      <span className="setting-value">ESP8266-001</span>
                  </div>

                  <div className="setting-row">
                      <div className="setting-label">
                          <label>Connection Status</label>
                          <span>Current device connectivity</span>
                      </div>

                      <span className="connection-status">
                          <span className="online-dot"></span>
                          Connected
                      </span>
                  </div>
              </div>
          </section>


      {/* Weather Settings */}
      
          <section className="settings-section panel">
              <div className="settings-section-heading">
                  <CloudSun size={20} />
                  <div>
                      <h3>Weather Preferences</h3>
                      <p>Configure your weather display</p>
                  </div>
              </div>

              <div className="settings-content">
                  <div className="setting-row">
                      <div className="setting-label">
                          <label>Weather Location</label>
                          <span>City used to fetch weather information</span>
                      </div>

                      <input
                          type="text"
                          defaultValue="Siliguri"
                          className="settings-input"
                      />
                  </div>

                  <div className="setting-row">
                      <div className="setting-label">
                          <label>Temperature Unit</label>
                          <span>Select your preferred temperature unit</span>
                      </div>

                      <select className="settings-select" defaultValue="C">
                          <option value="C">Celsius (°C)</option>
                          <option value="F">Fahrenheit (°F)</option>
                      </select>
                  </div>

                  <div className="setting-row">
                      <div className="setting-label">
                          <label>Automatic Weather Updates</label>
                          <span>Refresh weather every 5 minutes</span>
                      </div>

                      <span className="setting-value">Enabled</span>
                  </div>
              </div>
          </section>


      {/* Notification Settings */}
      
          <section className="settings-section panel">
              <div className="settings-section-heading">
                  <Bell size={20} />
                  <div>
                      <h3>Notifications</h3>
                      <p>Manage your notification preferences</p>
                  </div>
              </div>

              <div className="settings-content">
                  <div className="setting-row">
                      <div className="setting-label">
                          <label>Light Status Notifications</label>
                          <span>Get notified when the light turns ON or OFF</span>
                      </div>

                      <label className="settings-toggle">
                          <input type="checkbox" defaultChecked />
                          <span className="toggle-slider"></span>
                      </label>
                  </div>

                  <div className="setting-row">
                      <div className="setting-label">
                          <label>Device Disconnection Alerts</label>
                          <span>Get notified when your device goes offline</span>
                      </div>

                      <label className="settings-toggle">
                          <input type="checkbox" defaultChecked />
                          <span className="toggle-slider"></span>
                      </label>
                  </div>

                  <div className="setting-row">
                      <div className="setting-label">
                          <label>Weather Update Notifications</label>
                          <span>Receive weather update notifications</span>
                      </div>

                      <label className="settings-toggle">
                          <input type="checkbox" />
                          <span className="toggle-slider"></span>
                      </label>
                  </div>
              </div>
          </section>


      {/* Device Information */}
      
          <section className="settings-section panel">
              <div className="settings-section-heading">
                  <Info size={20} />
                  <div>
                      <h3>Device Information</h3>
                      <p>Information about your connected hardware</p>
                  </div>
              </div>

              <div className="settings-content">
                  <div className="setting-row">
                      <div className="setting-label">
                          <label>Hardware</label>
                          <span>Microcontroller board</span>
                      </div>
                      <span className="setting-value">NodeMCU ESP8266</span>
                  </div>

                  <div className="setting-row">
                      <div className="setting-label">
                          <label>Display</label>
                          <span>Connected OLED module</span>
                      </div>
                      <span className="setting-value">SSD1306 · 128 × 64</span>
                  </div>

                  <div className="setting-row">
                      <div className="setting-label">
                          <label>Firmware</label>
                          <span>Current firmware version</span>
                      </div>
                      <span className="setting-value">v1.0.0</span>
                  </div>

                  <div className="setting-row">
                      <div className="setting-label">
                          <label>Weather Refresh Interval</label>
                          <span>Automatic weather update frequency</span>
                      </div>
                      <span className="setting-value">5 minutes</span>
                  </div>
              </div>
          </section>


    </div>
  );
}
