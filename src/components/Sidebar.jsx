

import {
  LayoutDashboard,
  Lightbulb,
  CloudSun,
  Settings,
  Activity,
  House
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Lighting", icon: Lightbulb },
  { name: "Weather", icon: CloudSun },
  { name: "Activity", icon: Activity },
  { name: "Settings", icon: Settings },
];

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">
          <House size={23} />
        </div>
        <div>
          <h2>SmartHome</h2>
          <span>CONTROL CENTER</span>
        </div>
      </div>

      <p className="menu-label">MENU</p>

      <nav className="navigation">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`nav-item ${
                activePage === item.name ? "active" : ""
              }`}
              onClick={() => setActivePage(item.name)}
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="online-dot"></div>
        <span>System Online</span>
      </div>
    </aside>
  );
}

