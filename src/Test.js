import React, { useState } from 'react';
import './treningPlan.css';

// Replace the ellipses with your JSON data or import from a file
const treningPlan = [
    {
        "cwiczenia": [
            {
                "cwiczenia": [
                    {
                        "id": 258,
                        "name": "Front pull wide",
                        "description": "",
                        "muscles": [
                            12
                        ],
                        "secondary_muscles": [
                            2,
                            1,
                            13
                        ],
                        "language": 2,
                        "category": 12
                    }
                ],
                "sets": [
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    }
                ]
            },
            {
                "cwiczenia": [
                    {
                        "id": 915,
                        "name": "BUS DRIVERS",
                        "description": "Sitting with a Weight Plate, used as wheel, in both hands; raised slightly below eye level",
                        "muscles": [
                            2
                        ],
                        "secondary_muscles": [],
                        "language": 2,
                        "category": 13
                    }
                ],
                "sets": [
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    }
                ]
            },
            {
                "cwiczenia": [
                    {
                        "id": 291,
                        "name": "Hindu Squats",
                        "description": "<p>Start with your feet shoulder width apart and arms slightly behind your back.</p>\n<p>As you descend towards the floor, raise your heels off the ground, while keeping your back as vertical  as possible. </p>\n<p>Upon attaining the bottom position, touch the hands to the heels.</p>\n<p>Then stand up ending with the heels on the ground, arms extended in front of the chest then rowing into the start position.</p>",
                        "muscles": [
                            10
                        ],
                        "secondary_muscles": [
                            8
                        ],
                        "language": 2,
                        "category": 9
                    }
                ],
                "sets": [
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    }
                ]
            },
            {
                "cwiczenia": [
                    {
                        "id": 902,
                        "name": "Barbell Hip Thrust",
                        "description": "Sit on the ground with a bench behind you, bending your knees so your feet are planted on the ground and holding a barbell resting below your hips. If you have a padded bar, or anything you can slip in between the bar and your body, it will go a long way to making the exercise more comfortable.",
                        "muscles": [
                            8
                        ],
                        "secondary_muscles": [],
                        "language": 2,
                        "category": 9
                    }
                ],
                "sets": [
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    }
                ]
            },
            {
                "cwiczenia": [
                    {
                        "id": 265,
                        "name": "Glute Bridge",
                        "description": "<p>Lie on you back with your hips and knees flexed, feet on the ground. From this position, raise your butt off of the ground to a height where your body makes a straight line from your knees to your shoulders. To make the exercise more intense, you can add weight by letting a barbell rest on your hips as you complete the motion, or you can put your feet on a slightly higher surface such as a step or a bench.</p>",
                        "muscles": [
                            8
                        ],
                        "secondary_muscles": [
                            11
                        ],
                        "language": 2,
                        "category": 9
                    }
                ],
                "sets": [
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    }
                ]
            },
            {
                "cwiczenia": [
                    {
                        "id": 493,
                        "name": "Reverse Bar Curl",
                        "description": "<p>Hold bar with reverse (or \"overhand\") grip, palms facing the floor.</p>",
                        "muscles": [
                            1
                        ],
                        "secondary_muscles": [],
                        "language": 2,
                        "category": 8
                    }
                ],
                "sets": [
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    }
                ]
            }
        ]
    },
    {
        "cwiczenia": [
            {
                "cwiczenia": [
                    {
                        "id": 184,
                        "name": "Deadlifts",
                        "description": "<p>Stand firmly, with your feet slightly more than shoulder wide apart. Stand directly behind the bar where it should barely touch your shin, your feet pointing a bit out. Bend down with a straight back, the knees also pointing somewhat out. Grab the bar with a shoulder wide grip, one underhand, one reverse grip.</p>\n<p>Pull the weight up. At the highest point make a slight hollow back and pull the bar back. Hold 1 or 2 seconds that position. Go down, making sure the back is not bent. Once down you can either go back again as soon as the weights touch the floor, or make a pause, depending on the weight.</p>",
                        "muscles": [
                            12
                        ],
                        "secondary_muscles": [
                            8
                        ],
                        "language": 2,
                        "category": 12
                    }
                ],
                "sets": [
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    }
                ]
            },
            {
                "cwiczenia": [
                    {
                        "id": 366,
                        "name": "Leg Curls (sitting)",
                        "description": "",
                        "muscles": [
                            11
                        ],
                        "secondary_muscles": [],
                        "language": 2,
                        "category": 9
                    }
                ],
                "sets": [
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    }
                ]
            },
            {
                "cwiczenia": [
                    {
                        "id": 188,
                        "name": "Decline Pushups",
                        "description": "<p>With your feet raised approximately 30cm on a platform, align your shoulders, elbows and hands, then perform regular pushups. This emphasises the clavicular fibers of the pectoralis major.</p>",
                        "muscles": [
                            4
                        ],
                        "secondary_muscles": [
                            2
                        ],
                        "language": 2,
                        "category": 11
                    }
                ],
                "sets": [
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    }
                ]
            },
            {
                "cwiczenia": [
                    {
                        "id": 397,
                        "name": "Low Box Squat - Wide Stance",
                        "description": "<p>Unrack the bar and set your stance wide, beyond your hips.  Push your hips back and sit down to a box that takes you below parallel.  Sit completely down, do not touch and go.  Then explosively stand up.  Stay tight in your upper back and torso throughout the movement.</p>",
                        "muscles": [
                            8,
                            10
                        ],
                        "secondary_muscles": [],
                        "language": 2,
                        "category": 9
                    }
                ],
                "sets": [
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    }
                ]
            },
            {
                "cwiczenia": [
                    {
                        "id": 916,
                        "name": "Smith Press",
                        "description": "Sitting almost 90 degree angle, smith machine&nbsp;",
                        "muscles": [
                            2
                        ],
                        "secondary_muscles": [],
                        "language": 2,
                        "category": 13
                    }
                ],
                "sets": [
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    }
                ]
            },
            {
                "cwiczenia": [
                    {
                        "id": 257,
                        "name": "Front Squats",
                        "description": "<p>Squats</p>",
                        "muscles": [
                            8
                        ],
                        "secondary_muscles": [
                            6
                        ],
                        "language": 2,
                        "category": 9
                    }
                ],
                "sets": [
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    }
                ]
            }
        ]
    },
    {
        "cwiczenia": [
            {
                "cwiczenia": [
                    {
                        "id": 655,
                        "name": "Tricep Dumbbell Kickback",
                        "description": "<ol>\n<li>Start with a dumbbell in each hand and your palms facing your torso. Keep your back straight with a slight bend in the knees and bend forward at the waist. Your torso should be almost parallel to the floor. Make sure to keep your head up. Your upper arms should be close to your torso and parallel to the floor. Your forearms should be pointed towards the floor as you hold the weights. There should be a 90-degree angle formed between your forearm and upper arm. This is your starting position.</li>\n<li>Now, while keeping your upper arms stationary, exhale and use your triceps to lift the weights until the arm is fully extended. Focus on moving the forearm.</li>\n<li>After a brief pause at the top contraction, inhale and slowly lower the dumbbells back down to the starting position.</li>\n<li>Repeat the movement for the prescribed amount of repetitions.</li>\n</ol>\n<p><strong>Variations:</strong> This exercise can be executed also one arm at a time much like the one arm rows are performed.</p>\n<p>Also, if you like the one arm variety, you can use a low pulley handle instead of a dumbbell for better peak contraction. In this case, the palms should be facing up (supinated grip) as opposed to the torso (neutral grip).</p>",
                        "muscles": [
                            5
                        ],
                        "secondary_muscles": [],
                        "language": 2,
                        "category": 8
                    }
                ],
                "sets": [
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    }
                ]
            },
            {
                "cwiczenia": [
                    {
                        "id": 259,
                        "name": "Front Pull narrow",
                        "description": "",
                        "muscles": [
                            12
                        ],
                        "secondary_muscles": [
                            1,
                            13
                        ],
                        "language": 2,
                        "category": 12
                    }
                ],
                "sets": [
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    }
                ]
            },
            {
                "cwiczenia": [
                    {
                        "id": 289,
                        "name": "High Pull",
                        "description": "<p>Use a light barbell, perform explosive lift up starting from underneath knee cap level. Lift/raise explosively using hips, at shoulder level. Tempo: 2111</p>",
                        "muscles": [
                            2
                        ],
                        "secondary_muscles": [
                            8
                        ],
                        "language": 2,
                        "category": 13
                    }
                ],
                "sets": [
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    }
                ]
            },
            {
                "cwiczenia": [
                    {
                        "id": 189,
                        "name": "Deficit Deadlift",
                        "description": "<p>Preparation</p>\n<p>Stand on weight plate, bumper plate, or shallow elevated platform with loaded bar above feet. Squat down and grasp bar with shoulder width or slightly wider overhand or mixed grip.</p>\n<p> </p>\n<p>Execution</p>\n<p>Lift bar by extending hips and knees to full extension. Pull shoulders back at top of lift if rounded. Return weights to floor by bending hips back while allowing knees to bend forward, keeping back straight and knees pointed same direction as feet. Repeat.</p>\n<p> </p>\n<p>Comments</p>\n<p>Throughout lift, keep hips low, shoulders high, arms and back straight. Knees should point same direction as feet throughout movement. Keep bar close to body to improve mechanical leverage. Grip strength and strength endurance often limit ability to perform multiple reps at heavy resistances. Gym chalk, wrist straps, grip work, and mixed grip can be used to enhance grip. Mixed grip indicates one hand holding with overhand grip and other hand holding with underhand grip. Lever barbell jack can be used to lift barbell from floor for easier loading and unloading of weight plates.</p>\n<p>Barbell Deficit Deadlift emphasizes building strength through lowest portion of Deadlift. Target muscle is exercised isometrically. Heavy barbell deadlifts significantly engages Latissmus Dorsi. See Barbell Deficit Deadlift under Gluteus Maximus. Also see Deadlift Analysis.</p>",
                        "muscles": [],
                        "secondary_muscles": [
                            11,
                            8,
                            12,
                            6,
                            15
                        ],
                        "language": 2,
                        "category": 12
                    }
                ],
                "sets": [
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    }
                ]
            },
            {
                "cwiczenia": [
                    {
                        "id": 310,
                        "name": "Incline Dumbbell Row",
                        "description": "<ol>\n<li>Using a neutral grip, lean into an incline bench.</li>\n<li>Take a dumbbell in each hand with a neutral grip, beginning with the arms straight. This will be your starting position.</li>\n<li>Retract the shoulder blades and flex the elbows to row the dumbbells to your side.</li>\n<li>Pause at the top of the motion, and then return to the starting position.</li>\n</ol>",
                        "muscles": [],
                        "secondary_muscles": [
                            12
                        ],
                        "language": 2,
                        "category": 12
                    }
                ],
                "sets": [
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    }
                ]
            },
            {
                "cwiczenia": [
                    {
                        "id": 716,
                        "name": "Wall Slides",
                        "description": "<p>Stand with heels, shoulders, back of head, and hips touching the wall. Start with biceps straight out and elbows at a 90 degree angle. Straighten the arms while remaining againstthe wall without arching the back off of the wall, mimicking a shoulder press movement. </p>",
                        "muscles": [
                            1,
                            11,
                            4,
                            9,
                            5
                        ],
                        "secondary_muscles": [],
                        "language": 2,
                        "category": 12
                    }
                ],
                "sets": [
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    },
                    {
                        "iloscPowtorzen": 10,
                        "ciezar": null
                    }
                ]
            }
        ]
    }
];

const TreningPlanPage = () => {
    const [expandedDays, setExpandedDays] = useState([]);

    const toggleDay = (index) => {
        setExpandedDays(prev => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const handleConfirmAll = () => {
        // Placeholder for confirm all action
        alert('All days confirmed!');
    };

    return (
        <div className="container">
            <h1 className="header">Trening Plan</h1>

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
                                                    dangerouslySetInnerHTML={{ __html: exercise.description }}
                                                />
                                            )}
                                            <ul className="list">
                                                <li><strong>Muscles:</strong> {exercise.muscles.join(', ')}</li>
                                                {exercise.secondary_muscles.length > 0 && (
                                                    <li><strong>Secondary Muscles:</strong> {exercise.secondary_muscles.join(', ')}</li>
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

            <button
                className="confirm-button"
                onClick={handleConfirmAll}
            >
                Confirm All
            </button>
        </div>
    );
};

export default TreningPlanPage;