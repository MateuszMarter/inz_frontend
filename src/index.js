import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TreningPlanPage from "./Test";
import HomePage from "./HomePage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/plan" element={<TreningPlanPage />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
