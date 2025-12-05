import React, { useState } from 'react';

export default function KeyMilestones() {
    const [hoveredMilestone, setHoveredMilestone] = useState(null);

    const milestones = [
        {
            year: '2022',
            title: 'Green Roing Initiative Launch',
            description: 'Launched the revolutionary "Green Roing" initiative for effective solid waste management, transforming Roing into a model sustainable city.',
            icon: '🌱',
            color: '#27ae60',
            stats: '7.5 tons daily waste collection'
        },
        {
            year: '2023',
            title: 'Chief Minister\'s Award',
            description: 'Awarded the prestigious Chief Minister\'s Award for Urban Space Development through innovative collaboration with district administration.',
            icon: '🏆',
            color: '#f39c12',
            stats: 'State-level recognition'
        },
        {
            year: '2024',
            title: 'Expanded Conservation Efforts',
            description: 'Expanded our mission to include comprehensive river conservation, social forestry projects, and community-driven environmental initiatives.',
            icon: '🌊',
            color: '#3498db',
            stats: '50+ villages impacted'
        }
    ];

    return (
        <section style={{
            padding: '80px 20px',
            background: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated background elements */}
            <div style={{
                position: 'absolute',
                top: '15%',
                left: '10%',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 8s ease-in-out infinite'
            }}></div>
            
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '15%',
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 6s ease-in-out infinite 3s'
            }}></div>

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 2
            }}>
                {/* Header */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '60px',
                    color: 'white'
                }}>
                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                        animation: 'slideInDown 1s ease-out'
                    }}>
                        Key Milestones
                    </h2>
                    
                    <div style={{
                        width: '100px',
                        height: '4px',
                        background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
                        margin: '0 auto 30px',
                        borderRadius: '2px',
                        animation: 'slideInUp 1s ease-out 0.3s both'
                    }}></div>
                    
                    <p style={{
                        fontSize: '1.2rem',
                        opacity: '0.9',
                        maxWidth: '600px',
                        margin: '0 auto',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                        animation: 'slideInUp 1s ease-out 0.6s both'
                    }}>
                        Our journey of environmental transformation and community impact
                    </p>
                </div>

                {/* Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '30px',
                    alignItems: 'stretch'
                }}>
                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'rgba(255, 255, 255, 0.95)',
                                borderRadius: '20px',
                                padding: '40px 30px',
                                boxShadow: hoveredMilestone === index 
                                    ? '0 25px 50px rgba(0,0,0,0.2)' 
                                    : '0 15px 35px rgba(0,0,0,0.1)',
                                transform: hoveredMilestone === index 
                                    ? 'translateY(-10px) scale(1.02)' 
                                    : 'translateY(0) scale(1)',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                animation: `slideInUp 0.8s ease-out ${index * 0.2}s both`,
                                textAlign: 'center'
                            }}
                            onMouseEnter={() => setHoveredMilestone(index)}
                            onMouseLeave={() => setHoveredMilestone(null)}
                        >
                            {/* Decorative background element */}
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '100px',
                                height: '100px',
                                background: `linear-gradient(45deg, ${milestone.color}, ${milestone.color}99)`,
                                borderRadius: '50%',
                                opacity: '0.1',
                                transition: 'all 0.3s ease'
                            }}></div>

                            {/* Year Badge */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                left: '20px',
                                background: `linear-gradient(45deg, ${milestone.color}, ${milestone.color}dd)`,
                                color: 'white',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                boxShadow: `0 4px 15px ${milestone.color}40`
                            }}>
                                {milestone.year}
                            </div>

                            {/* Icon */}
                            <div style={{
                                fontSize: '4rem',
                                marginBottom: '20px',
                                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                                transition: 'transform 0.3s ease',
                                transform: hoveredMilestone === index ? 'scale(1.1) rotate(5deg)' : 'scale(1)'
                            }}>
                                {milestone.icon}
                            </div>

                            {/* Title */}
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: '#2c3e50',
                                marginBottom: '20px',
                                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}>
                                {milestone.title}
                            </h3>

                            {/* Description */}
                            <p style={{
                                fontSize: '1rem',
                                color: '#7f8c8d',
                                lineHeight: '1.6',
                                marginBottom: '25px'
                            }}>
                                {milestone.description}
                            </p>

                            {/* Stats Badge */}
                            <div style={{
                                background: `linear-gradient(135deg, ${milestone.color}15, ${milestone.color}05)`,
                                padding: '15px 20px',
                                borderRadius: '15px',
                                border: `2px solid ${milestone.color}30`,
                                fontSize: '1rem',
                                fontWeight: '600',
                                color: milestone.color
                            }}>
                                {milestone.stats}
                            </div>

                            {/* Progress indicator */}
                            <div style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                right: '0',
                                height: '4px',
                                background: `linear-gradient(90deg, ${milestone.color}, ${milestone.color}dd)`,
                                borderRadius: '0 0 20px 20px'
                            }}></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(180deg); }
                }
                
                @keyframes slideInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @media (max-width: 768px) {
                    h2 {
                        font-size: 2.2rem !important;
                    }
                    p {
                        font-size: 1rem !important;
                    }
                    div[style*="grid-template-columns"] {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                    }
                    div[style*="padding: 40px 30px"] {
                        padding: 30px 20px !important;
                    }
                }
            `}</style>
        </section>
    );
}