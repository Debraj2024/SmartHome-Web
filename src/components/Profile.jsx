
import { useState } from "react";
import {
  UserRound,
  Mail,
  Globe,
  Clock,
  Thermometer,
  Lock,
  ShieldCheck,
  MonitorSmartphone,
  LogOut,
  Trash2,
  Save
} from "lucide-react";

export default function Profile() {
  const [profile, setProfile] = useState({
    fullName: "Smart Home User",
    email: "user@example.com",
    language: "English",
    timezone: "Asia/Kolkata",
    temperatureScale: "Celsius",
    timeFormat: "12-hour"
  });

  function updateProfile(field, value) {
    setProfile(previous => ({
      ...previous,
      [field]: value
    }));
  }

  function handleSave() {
    alert("Profile preferences saved successfully!");
  }

  return (
    <div className="profile-page">

      {/* Personal Information */}
      <section className="profile-section panel">
        <div className="profile-section-heading">
          <UserRound size={20} />
          <div>
            <h3>Personal Information</h3>
            <p>Update your personal details and regional settings.</p>
          </div>
        </div>

        <div className="profile-form">

          <div className="profile-field">
            <label>Full Name</label>
            <input
              value={profile.fullName}
              onChange={e => updateProfile("fullName", e.target.value)}
              className="settings-input"
            />
          </div>

          <div className="profile-field">
            <label>Email Address</label>
            <input
              type="email"
              value={profile.email}
              onChange={e => updateProfile("email", e.target.value)}
              className="settings-input"
            />
          </div>

          <div className="profile-field">
            <label>Language</label>
            <select
              value={profile.language}
              onChange={e => updateProfile("language", e.target.value)}
              className="settings-select"
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Bengali</option>
            </select>
          </div>

          <div className="profile-field">
            <label>Timezone</label>
            <select
              value={profile.timezone}
              onChange={e => updateProfile("timezone", e.target.value)}
              className="settings-select"
            >
              <option value="Asia/Kolkata">India Standard Time (IST)</option>
              <option value="UTC">UTC</option>
              <option value="America/New_York">Eastern Time</option>
              <option value="Europe/London">London</option>
            </select>
          </div>

        </div>
      </section>

      {/* Regional Preferences */}
      <section className="profile-section panel">
        <div className="profile-section-heading">
          <Globe size={20} />
          <div>
            <h3>Regional Preferences</h3>
            <p>Customize temperature and time display formats.</p>
          </div>
        </div>

        <div className="profile-form">

          <div className="profile-field">
            <label>
              <Thermometer size={15} />
              Temperature Scale
            </label>

            <select
              value={profile.temperatureScale}
              onChange={e => updateProfile("temperatureScale", e.target.value)}
              className="settings-select"
            >
              <option value="Celsius">Celsius (°C)</option>
              <option value="Fahrenheit">Fahrenheit (°F)</option>
            </select>
          </div>

          <div className="profile-field">
            <label>
              <Clock size={15} />
              Time Format
            </label>

            <select
              value={profile.timeFormat}
              onChange={e => updateProfile("timeFormat", e.target.value)}
              className="settings-select"
            >
              <option value="12-hour">12-hour (AM/PM)</option>
              <option value="24-hour">24-hour</option>
            </select>
          </div>

        </div>
      </section>

      {/* Account Security */}
      <section className="profile-section panel">
        <div className="profile-section-heading">
          <ShieldCheck size={20} />
          <div>
            <h3>Account Security</h3>
            <p>Manage your account access and security.</p>
          </div>
        </div>

        <div className="profile-security-actions">

          <button onClick={() => alert("Password management will be implemented later.")}>
            <Lock size={17} />
            Change Password
          </button>

          <button onClick={() => alert("Two-factor authentication will be implemented later.")}>
            <ShieldCheck size={17} />
            Two-Factor Authentication
          </button>

          <button onClick={() => alert("Session management will be implemented later.")}>
            <MonitorSmartphone size={17} />
            Sign Out All Other Devices
          </button>

          <button
            className="danger-action"
            onClick={() => alert("Account closure will be implemented later.")}
          >
            <Trash2 size={17} />
            Close Account
          </button>

        </div>
      </section>

      <div className="profile-save-container">
        <button className="device-save-button" onClick={handleSave}>
          <Save size={16} />
          Save Changes
        </button>
      </div>

    </div>
  );
}
