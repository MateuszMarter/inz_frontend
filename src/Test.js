import React, { useState, useEffect } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import './treningPlan.css';

const TreningPlanPage = () => {
    const [treningPlan, setTreningPlan] = useState([]);
    const [expandedDays, setExpandedDays] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const aproxTime = queryParams.get('time') || 90;
    const days = queryParams.get('days') || 4;


    useEffect(() => {
        const fetchTrainingPlan = async () => {
            try {
                const response = await fetch(
                    `https://training-api-bjb0hgfkdagffyez.polandcentral-01.azurewebsites.net/user/GenTraining?aproxTime=${aproxTime}&days=${days}`
                );
                if (!response.ok) throw new Error('Failed to fetch training plan');
                const data = await response.json();
                setTreningPlan(data);
                setExpandedDays(new Array(data.length).fill(false));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTrainingPlan();
    }, [aproxTime, days, loading]);

    const toggleDay = (index) => {
        setExpandedDays(prev => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const handleConfirmAll = async () => {
        try {
            const response = await fetch(
                'https://training-api-bjb0hgfkdagffyez.polandcentral-01.azurewebsites.net/user/AddPlan/2',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(treningPlan),
                }
            );

            if (!response.ok) {
                throw new Error('Failed to submit training plan');
            }

            const result = await response.text();
            alert('Training plan submitted successfully!');
            console.log(result);
        } catch (error) {
            console.error('Error submitting training plan:', error);
            alert('There was an error submitting the plan.');
        }
    };
    if (loading) return <div className="container"><h2>Loading training plan...</h2></div>;
    if (error) return <div className="container"><h2>Error: {error}</h2></div>;

    return (
        <div className="container">
            <h1 className="header">Trening Plan</h1>

            <button onClick={() => navigate('/')} className="back-button">
                ← Back to Home
            </button>

            {treningPlan.map((day, dayIndex) => (
                <div
                    key={dayIndex}
                    className={`day-card ${expandedDays[dayIndex] ? 'expanded' : ''}`}
                >
                    <div className="day-header" onClick={() => toggleDay(dayIndex)}>
                        <h2 className="day-title">Day {dayIndex + 1}</h2>
                        <span className="toggle-icon">{expandedDays[dayIndex] ? '−' : '+'}</span>
                    </div>

                    {expandedDays[dayIndex] && (
                        <div className="day-content">
                            {day.cwiczenia.map((group, groupIndex) => (
                                <div key={groupIndex} className="card">
                                    {group.cwiczenia.map((exercise) => (
                                        <div key={exercise.id} className="exercise">
                                            <h3 className="exercise-name">{exercise.name}</h3>
                                            {exercise.description && (
                                                <div
                                                    className="description"
                                                    dangerouslySetInnerHTML={{__html: exercise.description}}
                                                />
                                            )}
                                            <ul className="list">
                                                <li><strong>Muscles:</strong> {exercise.muscles.join(', ')}</li>
                                                {exercise.secondary_muscles.length > 0 && (
                                                    <li><strong>Secondary
                                                        Muscles:</strong> {exercise.secondary_muscles.join(', ')}</li>
                                                )}
                                            </ul>
                                            <div className="list">
                                                <strong>Sets:</strong>
                                                <ul className="set-list">
                                                    {group.sets.map((set, setIndex) => (
                                                        <li key={setIndex}>
                                                            {set.iloscPowtorzen} reps{set.ciezar ? ` at ${set.ciezar} kg` : ''}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            <button className="confirm-button" onClick={handleConfirmAll}>
                Confirm All
            </button>
        </div>
    );
};

export default TreningPlanPage;
