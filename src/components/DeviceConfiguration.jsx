import { useState } from "react";
import {
    Lightbulb,
    Pencil,
    Cpu,
    Wifi,
    RefreshCw,
    Trash2,
    Activity,
    Save,
    Eye,
    EyeOff,
    Power
} from "lucide-react";

export default function DeviceConfiguration({
    device,
    isLightOn,
    onBack,
    onRename
}) {
    const [newName, setNewName] = useState(device.name);
    const [wifiSSID, setWifiSSID] = useState("");
    const [wifiPassword, setWifiPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    function handleSaveName() {
        const trimmedName = newName.trim();

        if (!trimmedName) {
            alert("Device name cannot be empty.");
            return;
        }

        onRename(trimmedName);
        alert("Device name updated successfully.");
    }
    return (
        <div className="device-configuration">
            <button className="back-to-devices" onClick={onBack}>
                ← Back to Devices
            </button>

            {/* Device Header */}
            <div className="device-config-header">
                <div className="device-config-title">
                    <div className="device-config-icon">
                        <Lightbulb size={28} />
                    </div>

                    <div>
                        <h2>{device.name}</h2>
                        <p>{device.id}</p>
                    </div>
                </div>

                <span className="device-status">
                    <span className="online-dot"></span>
                    Online
                </span>
            </div>

            {/* General Settings */}
            <section className="device-config-section panel">
                <div className="device-config-section-heading">
                    <Pencil size={19} />
                    <div>
                        <h3>General Settings</h3>
                        <p>Manage your device identity</p>
                    </div>
                </div>

                <div className="device-config-content">
                    <div className="device-config-row">
                        <div className="setting-label">
                            <label>Device Name</label>
                            <span>Customize your device name</span>
                        </div>

                        <div className="device-name-control">
                            <input
                                type="text"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                className="settings-input"
                            />

                            <button
                                className="device-save-button"
                                onClick={handleSaveName}
                            >
                                <Save size={15} />
                                Save
                            </button>
                        </div>
                    </div>

                    <div className="device-config-row">
                        <div className="setting-label">
                            <label>Device ID</label>
                            <span>Unique device identifier</span>
                        </div>

                        <strong>{device.id}</strong>
                    </div>

                    <div className="device-config-row">
                        <div className="setting-label">
                            <label>Current Light Status</label>
                            <span>Current operating state</span>
                        </div>

                        <strong>{isLightOn ? "ON" : "OFF"}</strong>
                    </div>
                </div>
            </section>

            {/* Connection Status */}
            <section className="device-config-section panel">
                <div className="device-config-section-heading">
                    <Wifi size={19} />
                    <div>
                        <h3>Connection Status</h3>
                        <p>Monitor your device network connectivity</p>
                    </div>
                </div>

                <div className="device-config-content">

                    <div className="device-config-row">
                        <div className="setting-label">
                            <label>Connection</label>
                            <span>Current device connectivity</span>
                        </div>
                        <strong style={{ color: "#22c55e" }}>● Online</strong>
                    </div>

                    <div className="device-config-row">
                        <div className="setting-label">
                            <label>Wi-Fi Signal Strength</label>
                            <span>Received signal strength</span>
                        </div>
                        <strong>Not available</strong>
                    </div>

                    <div className="device-config-row">
                        <div className="setting-label">
                            <label>Connected Network</label>
                            <span>Current Wi-Fi network</span>
                        </div>
                        <strong>Not available</strong>
                    </div>

                    <div className="device-config-row">
                        <div className="setting-label">
                            <label>IP Address</label>
                            <span>Local network address</span>
                        </div>
                        <strong>Not available</strong>
                    </div>

                    <div className="device-config-row">
                        <div className="setting-label">
                            <label>Last Seen</label>
                            <span>Last successful communication</span>
                        </div>
                        <strong>Not available</strong>
                    </div>

                </div>
            </section>

            {/* Wi-Fi Configuration */}
            <section className="device-config-section panel">
                <div className="device-config-section-heading">
                    <Wifi size={19} />
                    <div>
                        <h3>Wi-Fi Configuration</h3>
                        <p>Configure the network connection for your device</p>
                    </div>
                </div>

                <div className="device-config-content">

                    <div className="device-config-row">
                        <div className="setting-label">
                            <label>Current Network</label>
                            <span>Connected Wi-Fi network</span>
                        </div>

                        <strong>Not available yet</strong>
                    </div>

                    <div className="device-config-row">
                        <div className="setting-label">
                            <label>New Wi-Fi SSID</label>
                            <span>Enter the new network name</span>
                        </div>

                        <input
                            type="text"
                            value={wifiSSID}
                            onChange={(e) => setWifiSSID(e.target.value)}
                            placeholder="Enter Wi-Fi SSID"
                            className="settings-input"
                        />
                    </div>

                    <div className="device-config-row">
                        <div className="setting-label">
                            <label>New Wi-Fi Password</label>
                            <span>Enter the new network password</span>
                        </div>

                        <div className="device-name-control">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={wifiPassword}
                                onChange={(e) => setWifiPassword(e.target.value)}
                                placeholder="Enter new password"
                                className="settings-input"
                            />

                            <button
                                type="button"
                                className="device-save-button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </div>

                    <div className="wifi-save-container">
                        <button
                            className="device-save-button"
                            onClick={() => alert("Wi-Fi provisioning will be implemented with the backend.")}
                        >
                            <Save size={15} />
                            Save Wi-Fi Configuration
                        </button>
                    </div>

                </div>
            </section>

            {/* Device Management */}
            <section className="device-config-section panel">
                <div className="device-config-section-heading">
                    <Cpu size={19} />
                    <div>
                        <h3>Device Management</h3>
                        <p>Manage device operations and account association</p>
                    </div>
                </div>

                <div className="device-config-content">

                    <div className="device-config-row">
                        <div className="setting-label">
                            <label>Restart Device</label>
                            <span>Restart your NodeMCU remotely</span>
                        </div>

                        <button
                            className="device-save-button"
                            onClick={() => alert("Device restart will be implemented with the backend.")}
                        >
                            <Power size={15} />
                            Restart
                        </button>
                    </div>

                    <div className="device-config-row">
                        <div className="setting-label">
                            <label>Remove Device</label>
                            <span>Remove this device from your account</span>
                        </div>

                        <button
                            className="remove-device-button"
                            onClick={() => alert("Device removal will be implemented with the backend.")}
                        >
                            <Trash2 size={15} />
                            Remove Device
                        </button>
                    </div>

                </div>
            </section>

            {/* Device Information */}
            <section className="device-config-section panel">
                <div className="device-config-section-heading">
                    <Cpu size={19} />
                    <div>
                        <h3>Device Information</h3>
                        <p>Technical details about your smart device</p>
                    </div>
                </div>

                <div className="device-config-content">

                    <div className="device-config-row">
                        <div className="setting-label">
                            <label>Hardware Model</label>
                            <span>Device hardware platform</span>
                        </div>
                        <strong>NodeMCU ESP8266</strong>
                    </div>

                    <div className="device-config-row">
                        <div className="setting-label">
                            <label>Device Category</label>
                            <span>Device classification</span>
                        </div>
                        <strong>Smart Lighting</strong>
                    </div>

                    <div className="device-config-row">
                        <div className="setting-label">
                            <label>Firmware</label>
                            <span>Installed firmware version</span>
                        </div>
                        <strong>v1.0.0</strong>
                    </div>

                    <div className="device-config-row">
                        <div className="setting-label">
                            <label>Firmware Platform</label>
                            <span>Development framework</span>
                        </div>
                        <strong>PlatformIO / Arduino</strong>
                    </div>

                    <div className="device-config-row">
                        <div className="setting-label">
                            <label>Device ID</label>
                            <span>Unique device identifier</span>
                        </div>
                        <strong>{device.id}</strong>
                    </div>

                </div>
            </section>

        </div>
    );
}
