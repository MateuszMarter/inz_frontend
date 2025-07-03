import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();
    const [time, setTime] = useState(90);
    const [days, setDays] = useState(4);

    const handleStart = () => {
        navigate(`/plan?time=${time}&days=${days}`);
    };

    return (
        <div className="container">
            <h1>Welcome to the Training App</h1>

            <div className="input-group">
                <label htmlFor="time">Training Time (minutes):</label>
                <input
                    type="number"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    min="10"
                    max="300"
                />
            </div>

            <div className="input-group">
                <label htmlFor="days">Training Days (1–7):</label>
                <input
                    type="number"
                    id="days"
                    value={days}
                    onChange={(e) => setDays(Math.min(Math.max(e.target.value, 1), 7))}
                    min="1"
                    max="7"
                />
            </div>

            <button onClick={handleStart} className="start-button">
                Start Training Plan
            </button>
        </div>
    );
};

export default HomePage;
