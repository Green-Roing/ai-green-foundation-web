import React, { useState } from 'react';

export default function GreenRoing() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const sections = [
        {
            title: 'Why Green Roing Was Started',
            description: 'Addressing the growing waste concerns in Roing due to increasing population and development.',
            icon: '🏙️',
            details: "Roing saw a significant increase in population after the commencement of India's longest bridge, generating large amounts of waste. Green Roing was started to manage this issue sustainably.",
            color: '#3498db'
        },
        {
            title: 'What We Do',
            description: 'Implementing sustainable waste management through segregation, transportation, and treatment.',
            icon: '♻️',
            details: 'Green Roing collects, segregates, and recycles waste in Roing. We work to reduce landfill waste and promote eco-friendly practices in the community.',
            color: '#27ae60'
        },
        {
            title: 'How We Work',
            description: 'Collaborating with local authorities and NGOs to promote the 4Rs: Reduce, Reuse, Recycle, and Refuse.',
            icon: '🤝',
            details: 'Green Roing educates citizens through door-to-door campaigns and collaborates with local organizations for better waste management practices.',
            color: '#e74c3c'
        },
        {
            title: 'Sustainability Model',
            description: 'Self-sustained through nominal fees for garbage collection and selling recyclable materials.',
            icon: '🌱',
            details: 'Green Roing operates on a service-based model, collecting fees and selling recyclables to sustain itself. This model helps cover salaries, vehicle maintenance, and other expenses.',
            color: '#f39c12'
        },
        {
            title: 'Daily Waste Collected',
            description: 'Collecting around 7.5 tons of waste daily from markets and villages.',
            icon: '🗑️',
            details: 'Green Roing collects approximately 3 tons of waste daily from markets and 4.5 tons from surrounding villages.',
            color: '#9b59b6'
        },
        {
            title: 'Future Plans',
            description: 'Plans to adopt Zero Waste villages, create eco-friendly parks, and develop composting units.',
            icon: '🌿',
            details: 'Green Roing plans to expand into more areas, promoting zero-waste villages and creating eco-friendly public spaces, among other green initiatives.',
            color: '#1abc9c'
        },
    ];

    return (
        <section style={{
            padding: '80px 20px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated background elements */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '5%',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 8s ease-in-out infinite'
            }}></div>
            
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '5%',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 6s ease-in-out infinite 2s'
            }}></div>

            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 2
            }}>
                {/* Header Section */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '60px',
                    color: 'white'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '30px',
                        gap: '20px'
                    }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/grLogo.png`}
                            alt="Green Roing Logo"
                            style={{
                                width: '100px',
                                height: '100px',
                                background: 'white',
                                borderRadius: '8%',
                                padding: '4px',
                                // boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                animation: 'pulse 2s ease-in-out infinite'
                            }}
                        />
                        <div>
                            <h2 style={{
                                fontSize: '3rem',
                                fontWeight: 'bold',
                                margin: '0',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                animation: 'slideInRight 1s ease-out'
                            }}>
                                Empowering Change
                            </h2>
                            <p style={{
                                fontSize: '1.3rem',
                                margin: '10px 0 0 0',
                                opacity: '0.9',
                                textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                                animation: 'slideInRight 1s ease-out 0.3s both'
                            }}>
                                The Green Roing Initiative
                            </p>
                        </div>
                    </div>
                    
                    <div style={{
                        width: '100px',
                        height: '4px',
                        background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
                        margin: '0 auto',
                        borderRadius: '2px',
                        animation: 'slideInUp 1s ease-out 0.6s both'
                    }}></div>
                </div>

                {/* Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '25px'
                }}>
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'rgba(255, 255, 255, 0.95)',
                                borderRadius: '20px',
                                padding: '30px',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: hoveredCard === index 
                                    ? '0 25px 50px rgba(0,0,0,0.2)' 
                                    : '0 15px 35px rgba(0,0,0,0.1)',
                                transform: hoveredCard === index 
                                    ? 'translateY(-10px) scale(1.02)' 
                                    : 'translateY(0) scale(1)',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                cursor: 'pointer',
                                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            onClick={() => toggleExpand(index)}
                        >
                            {/* Decorative background element */}
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '100px',
                                height: '100px',
                                background: `linear-gradient(45deg, ${section.color}, ${section.color}99)`,
                                borderRadius: '50%',
                                opacity: '0.1',
                                transition: 'all 0.3s ease'
                            }}></div>

                            {/* Icon and Title */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                marginBottom: '20px'
                            }}>
                                <span style={{
                                    fontSize: '3.5rem',
                                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                                    transition: 'transform 0.3s ease',
                                    transform: hoveredCard === index ? 'scale(1.1) rotate(5deg)' : 'scale(1)'
                                }}>
                                    {section.icon}
                                </span>
                                <h3 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    margin: '0',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}>
                                    {section.title}
                                </h3>
                            </div>

                            <p style={{
                                fontSize: '1rem',
                                color: '#7f8c8d',
                                lineHeight: '1.6',
                                marginBottom: expandedIndex === index ? '20px' : '0'
                            }}>
                                {section.description}
                            </p>

                            {/* Expanded Details */}
                            {expandedIndex === index && (
                                <div style={{
                                    padding: '20px',
                                    background: `linear-gradient(135deg, ${section.color}15, ${section.color}05)`,
                                    borderRadius: '15px',
                                    marginTop: '15px',
                                    border: `2px solid ${section.color}30`,
                                    animation: 'expandIn 0.3s ease-out'
                                }}>
                                    <p style={{
                                        fontSize: '0.95rem',
                                        color: '#34495e',
                                        lineHeight: '1.7',
                                        margin: '0'
                                    }}>
                                        {section.details}
                                    </p>
                                </div>
                            )}

                            {/* Expand/Collapse Button */}
                            <button style={{
                                position: 'absolute',
                                bottom: '20px',
                                right: '20px',
                                background: `linear-gradient(45deg, ${section.color}, ${section.color}dd)`,
                                color: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: `0 4px 15px ${section.color}40`,
                                transition: 'all 0.3s ease',
                                transform: expandedIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}>
                                <i className="fas fa-chevron-down" style={{ fontSize: '14px' }}></i>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
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
                
                @keyframes expandIn {
                    from {
                        opacity: 0;
                        transform: scaleY(0);
                    }
                    to {
                        opacity: 1;
                        transform: scaleY(1);
                    }
                }
                
                @media (max-width: 768px) {
                    h2 {
                        font-size: 2.2rem !important;
                    }
                    p {
                        font-size: 1.1rem !important;
                    }
                    div[style*="grid-template-columns"] {
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                    }
                }
            `}</style>
        </section>
    );
}