

import { useState } from "react";
import {
  Bell,
  Search,
  Sun,
  Lightbulb,
  CloudSun,
  Wifi,
  Activity,
  Settings
} from "lucide-react";

import Sidebar from "./components/Sidebar";
import LightCard from "./components/LightCard";
import WeatherCard from "./components/WeatherCard";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [isLightOn, setIsLightOn] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

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
    setIsLightOn(previous => !previous);
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

      case "Lighting":
        return (
          <section className="page-section">
            <h2>Lighting Control</h2>
            <p>Manage your smart tube light.</p>
            <div className="single-card">
              <LightCard
                isOn={isLightOn}
                onToggle={toggleLight}
              />
            </div>
          </section>
        );

      case "Weather":
        return (
          <section className="page-section">
            <h2>Weather Monitoring</h2>
            <p>Monitor your local weather conditions.</p>
            <div className="single-card">
              <WeatherCard
                weather={weather}
                onRefresh={refreshWeather}
                isRefreshing={isRefreshing}
              />
            </div>
          </section>
        );

      case "Activity":
        return (
          <section className="page-section">
            <h2>Activity Log</h2>
            <p>Device events will appear here after backend integration.</p>
            <div className="empty-state">
              <Activity size={40} />
              <h3>No activity recorded</h3>
              <p>Activity history is not connected yet.</p>
            </div>
          </section>
        );

      case "Settings":
        return (
          <section className="page-section">
            <h2>Settings</h2>
            <p>Manage your device configuration.</p>
            <div className="empty-state">
              <Settings size={40} />
              <h3>Device configuration</h3>
              <p>Wi-Fi and weather settings will be added later.</p>
            </div>
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
            <p className="breadcrumb">SMART HOME / {activePage.toUpperCase()}</p>
            <h1>{activePage}</h1>
          </div>

          <div className="topbar-actions">
            <button className="icon-button" aria-label="Search">
              <Search />
            </button>
            <button className="icon-button" aria-label="Notifications">
              <Bell />
            </button>
            <div className="profile-avatar">S</div>
          </div>
        </header>

        {renderPage()}
      </main>
    </div>
  );
}

export default App;

