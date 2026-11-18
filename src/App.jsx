import { useState } from "react";
import {
  Bell,
  Search,
  Sun,
  Lightbulb,
  CloudSun,
  Wifi,
  Activity,
  UserRound,
  ShieldCheck,
  LogOut
} from "lucide-react";

import Profile from "./components/Profile";
import DeviceConfiguration from "./components/DeviceConfiguration";
import Sidebar from "./components/Sidebar";
import LightCard from "./components/LightCard";
import WeatherCard from "./components/WeatherCard";
import ActivityPage from "./components/Activity";
import Devices from "./components/Devices";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [deviceName, setDeviceName] = useState("Smart Tube Light");
  const [isLightOn, setIsLightOn] = useState(false);
  const [activities, setActivities] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [weather, setWeather] = useState({
    city: "Siliguri",
    temperature: 29.1,
    condition: "Few Clouds",
    humidity: 41,
    windSpeed: 8.2,
    updated: "Demo data"
  });

  function refreshWeather() {
    setIsRefreshing(true);

    setTimeout(() => {
      setWeather(previousWeather => ({
        ...previousWeather,
        updated: "Just refreshed"
      }));

      setIsRefreshing(false);
    }, 1000);
  }

  function toggleLight() {
    const newState = !isLightOn;

    setIsLightOn(newState);

    const newActivity = {
      id: Date.now(),
      status: newState ? "ON" : "OFF",
      time: new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short"
      })
    };

    setActivities(previous => [newActivity, ...previous]);
  }

  function clearActivities() {
    const confirmed = window.confirm(
      "Are you sure you want to clear all activity history?"
    );

    if (confirmed) {
      setActivities([]);
    }
  }

  function renderPage() {
    switch (activePage) {
      case "Dashboard":
        return (
          <>
            <section className="welcome-section">
              <div>
                <p className="welcome-label">SMART HOME CONTROL CENTER</p>
                <h2>Welcome to your smart home.</h2>
                <p className="welcome-subtitle">
                  Manage your devices and monitor your environment.
                </p>
              </div>
              <div className="welcome-icon">
                <Sun size={38} />
              </div>
            </section>

            <section className="stats-grid">
              <div className="stat-card">
                <div className="stat-heading">
                  <span>Tube Light</span>
                  <Lightbulb />
                </div>
                <h2>{isLightOn ? "ON" : "OFF"}</h2>
                <p className="status-text">Demo status</p>
              </div>

              <div className="stat-card">
                <div className="stat-heading">
                  <span>Weather</span>
                  <CloudSun />
                </div>
                <h2>29.1°C</h2>
                <p className="status-text">Siliguri · Demo data</p>
              </div>

              <div className="stat-card">
                <div className="stat-heading">
                  <span>Wi-Fi</span>
                  <Wifi />
                </div>
                <h2>--</h2>
                <p className="status-text">Awaiting integration</p>
              </div>

              <div className="stat-card">
                <div className="stat-heading">
                  <span>Device Status</span>
                  <Activity />
                </div>
                <h2>Offline</h2>
                <p className="status-text">Awaiting integration</p>
              </div>
            </section>

            <section className="bottom-grid">
              <LightCard
                isOn={isLightOn}
                onToggle={toggleLight}
              />
              <WeatherCard
                weather={weather}
                onRefresh={refreshWeather}
                isRefreshing={isRefreshing}
              />
            </section>
          </>
        );

      case "Devices":
        return selectedDevice ? (
          <section className="page-section">
            <DeviceConfiguration
              device={{
                id: selectedDevice,
                name: deviceName
              }}
              isLightOn={isLightOn}
              onBack={() => setSelectedDevice(null)}
              onRename={(updatedName) => setDeviceName(updatedName)}
            />
          </section>
        ) : (
          <section className="page-section">
            <Devices
              isLightOn={isLightOn}
              deviceName={deviceName}
              onOpenDevice={(deviceId) => setSelectedDevice(deviceId)}
            />
          </section>
        );

      case "Activity":
        return (
          <section className="page-section">
            <ActivityPage
              activities={activities}
              onClear={clearActivities}
            />
          </section>
        );

      case "My Profile":
        return (
          <section className="page-section">
            <Profile />
          </section>
        );

      default:
        return null;
    }
  }

  return (
    <div className="app-container">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">

        <header className="topbar">
          <div>
            <p className="breadcrumb">
              SMART HOME / {activePage.toUpperCase()}
            </p>
            <h1>{activePage}</h1>
          </div>

          <div className="topbar-actions">
            <button className="icon-button" aria-label="Search">
              <Search />
            </button>

            <button className="icon-button" aria-label="Notifications">
              <Bell />
            </button>

            <div className="profile-menu-container">
              <button
                className="profile-avatar"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                aria-label="Open profile menu"
                aria-expanded={isProfileOpen}
              >
                S
              </button>

              {isProfileOpen && (
                <div className="profile-dropdown">
                  <div className="profile-dropdown-header">
                    <div className="profile-avatar">S</div>
                    <div>
                      <h3>My Account</h3>
                      <p>Account and preferences</p>
                    </div>
                  </div>

                  <div className="profile-dropdown-divider"></div>

                  <button
                    className="profile-dropdown-item"
                    onClick={() => {
                      setActivePage("My Profile");
                      setIsProfileOpen(false);
                    }}
                  >
                    <UserRound size={18} />
                    <span>My Profile</span>
                  </button>

                  <div className="profile-dropdown-item">
                    <Bell size={18} />
                    <span>Notifications</span>
                  </div>

                  <div className="profile-dropdown-item">
                    <ShieldCheck size={18} />
                    <span>Security & Privacy</span>
                  </div>

                  <div className="profile-dropdown-divider"></div>

                  <div className="profile-dropdown-item logout-item">
                    <LogOut size={18} />
                    <span>Sign Out</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>


        {renderPage()}
      </main>
    </div>
  );
}

export default App;

