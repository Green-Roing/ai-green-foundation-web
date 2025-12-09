import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

export default function KeyMilestones() {
    const [hoveredMilestone, setHoveredMilestone] = useState(null);

    const milestones = useMemo(() => [
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
    ], []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section 
            style={{
                padding: '80px 20px',
                background: "linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)",
                position: 'relative',
                overflow: 'hidden',
                scrollBehavior: 'smooth'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            {/* Simplified background elements */}
            <div 
                style={{
                    position: 'absolute',
                    top: '15%',
                    left: '10%',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    willChange: 'transform'
                }}
            ></div>
            
            <div 
                style={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '15%',
                    width: '100px',
                    height: '100px',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
                    borderRadius: '50%'
                }}
            ></div>

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 2
            }}>
                {/* Header */}
                <motion.div 
                    style={{
                        textAlign: 'center',
                        marginBottom: '60px',
                        color: 'white'
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 
                        style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            marginBottom: '20px',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                        }}
                    >
                        Key Milestones
                    </h2>
                    
                    <div 
                        style={{
                            width: '100px',
                            height: '4px',
                            background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
                            margin: '0 auto 30px',
                            borderRadius: '2px'
                        }}
                    ></div>
                    
                    <p 
                        style={{
                            fontSize: '1.2rem',
                            opacity: '0.9',
                            maxWidth: '600px',
                            margin: '0 auto',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                        }}
                    >
                        Our journey of environmental transformation and community impact
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div 
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '30px',
                        alignItems: 'stretch'
                    }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            style={{
                                background: 'rgba(255, 255, 255, 0.95)',
                                borderRadius: '20px',
                                padding: '40px 30px',
                                boxShadow: hoveredMilestone === index 
                                    ? '0 20px 40px rgba(0,0,0,0.15)' 
                                    : '0 10px 25px rgba(0,0,0,0.08)',
                                transform: hoveredMilestone === index 
                                    ? 'translateY(-8px)' 
                                    : 'translateY(0)',
                                transition: 'all 0.3s ease-out',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.2)',
                                textAlign: 'center',
                                willChange: 'transform'
                            }}
                            onMouseEnter={() => setHoveredMilestone(index)}
                            onMouseLeave={() => setHoveredMilestone(null)}
                            variants={cardVariants}
                        >
                            {/* Decorative background element */}
                            <div 
                                style={{
                                    position: 'absolute',
                                    top: '-50px',
                                    right: '-50px',
                                    width: '100px',
                                    height: '100px',
                                    background: `linear-gradient(45deg, ${milestone.color}, ${milestone.color}99)`,
                                    borderRadius: '50%',
                                    opacity: '0.08'
                                }}
                            ></div>

                            {/* Year Badge */}
                            <div 
                                style={{
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
                                }}
                            >
                                {milestone.year}
                            </div>

                            {/* Icon */}
                            <div 
                                style={{
                                    fontSize: '4rem',
                                    marginBottom: '20px',
                                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                                    transition: 'transform 0.2s ease',
                                    transform: hoveredMilestone === index ? 'scale(1.05)' : 'scale(1)'
                                }}
                            >
                                {milestone.icon}
                            </div>

                            {/* Title */}
                            <h3 
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}
                            >
                                {milestone.title}
                            </h3>

                            {/* Description */}
                            <p 
                                style={{
                                    fontSize: '1rem',
                                    color: '#7f8c8d',
                                    lineHeight: '1.6',
                                    marginBottom: '25px'
                                }}
                            >
                                {milestone.description}
                            </p>

                            {/* Stats Badge */}
                            <div 
                                style={{
                                    background: `linear-gradient(135deg, ${milestone.color}15, ${milestone.color}05)`,
                                    padding: '15px 20px',
                                    borderRadius: '15px',
                                    border: `2px solid ${milestone.color}30`,
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    color: milestone.color,
                                    transition: 'transform 0.2s ease',
                                    transform: hoveredMilestone === index ? 'scale(1.02)' : 'scale(1)'
                                }}
                            >
                                {milestone.stats}
                            </div>

                            {/* Progress indicator */}
                            <div 
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '0',
                                    right: '0',
                                    height: '4px',
                                    background: `linear-gradient(90deg, ${milestone.color}, ${milestone.color}dd)`,
                                    borderRadius: '0 0 20px 20px'
                                }}
                            ></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}