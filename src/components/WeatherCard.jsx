
import {
    CloudSun,
    Droplets,
    MapPin,
    RefreshCw,
    Wind
} from "lucide-react";

export default function WeatherCard({
    weather,
    onRefresh,
    isRefreshing
}) {

    return (
        <div className="panel weather-card">
            <div className="weather-header">
                <div>
                    <h3>Weather Overview</h3>
                    <p>Current environmental conditions</p>
                </div>

                <button
                    className={`weather-refresh ${isRefreshing ? "refreshing" : ""}`}
                    title={isRefreshing ? "Refreshing..." : "Refresh weather"}
                    onClick={onRefresh}
                    disabled={isRefreshing}
                >
                    <RefreshCw size={17} />
                </button>
            </div>

            <div className="weather-location">
                <MapPin size={15} />
                <span>{weather.city}, India</span>
            </div>

            <div className="weather-main">
                <CloudSun size={65} strokeWidth={1.5} />

                <div>
                    <h2>{weather.temperature}°C</h2>
                    <p>{weather.condition}</p>
                </div>
            </div>

            <div className="weather-details">
                <div className="weather-detail">
                    <Droplets size={21} />
                    <div>
                        <span>Humidity</span>
                        <strong>{weather.humidity}%</strong>
                    </div>
                </div>

                <div className="weather-detail">
                    <Wind size={21} />
                    <div>
                        <span>Wind Speed</span>
                        <strong>{weather.windSpeed} km/h</strong>
                    </div>
                </div>
            </div>

            <p className="weather-updated">
                <span></span>
                {weather.updated} · Hardware integration pending
            </p>
        </div>
    );
}
