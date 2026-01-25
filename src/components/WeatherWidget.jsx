import React, { useState, useEffect } from 'react';

const WeatherWidget = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/weather');
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error("Weather fetch failed:", error);
            }
        };
        fetchWeather();
        const interval = setInterval(fetchWeather, 300000); // Update every 5 minutes
        return () => clearInterval(interval);
    }, []);

    if (!weather) return null;

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--glass-border)',
            padding: '0 1rem',
            height: '40px',
            borderRadius: '8px',
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            backdropFilter: 'blur(10px)'
        }}>
            <span style={{ fontSize: '1.2rem' }}>{weather.icon}</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{weather.temperature}°C</span>
                <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>{weather.location}</span>
            </div>
        </div>
    );
};

export default WeatherWidget;
