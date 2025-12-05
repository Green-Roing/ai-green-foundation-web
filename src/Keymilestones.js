import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
        <motion.section 
            style={{
                padding: '80px 20px',
              background: "linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)",
                position: 'relative',
                overflow: 'hidden'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {/* Animated background elements */}
            <motion.div 
                style={{
                    position: 'absolute',
                    top: '15%',
                    left: '10%',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                    borderRadius: '50%'
                }}
                animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 180, 360]
                }}
                transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
            ></motion.div>
            
            <motion.div 
                style={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '15%',
                    width: '100px',
                    height: '100px',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                    borderRadius: '50%'
                }}
                animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, -180, -360]
                }}
                transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 3
                }}
            ></motion.div>

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
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2 
                        style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            marginBottom: '20px',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Key Milestones
                    </motion.h2>
                    
                    <motion.div 
                        style={{
                            width: '100px',
                            height: '4px',
                            background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
                            margin: '0 auto 30px',
                            borderRadius: '2px'
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    ></motion.div>
                    
                    <motion.p 
                        style={{
                            fontSize: '1.2rem',
                            opacity: '0.9',
                            maxWidth: '600px',
                            margin: '0 auto',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 0.9, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Our journey of environmental transformation and community impact
                    </motion.p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div 
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '30px',
                        alignItems: 'stretch'
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {milestones.map((milestone, index) => (
                        <motion.div
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
                                textAlign: 'center'
                            }}
                            onMouseEnter={() => setHoveredMilestone(index)}
                            onMouseLeave={() => setHoveredMilestone(null)}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            {/* Decorative background element */}
                            <motion.div 
                                style={{
                                    position: 'absolute',
                                    top: '-50px',
                                    right: '-50px',
                                    width: '100px',
                                    height: '100px',
                                    background: `linear-gradient(45deg, ${milestone.color}, ${milestone.color}99)`,
                                    borderRadius: '50%',
                                    opacity: '0.1',
                                    transition: 'all 0.3s ease'
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            ></motion.div>

                            {/* Year Badge */}
                            <motion.div 
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
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                {milestone.year}
                            </motion.div>

                            {/* Icon */}
                            <motion.div 
                                style={{
                                    fontSize: '4rem',
                                    marginBottom: '20px',
                                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                                    transition: 'transform 0.3s ease',
                                    transform: hoveredMilestone === index ? 'scale(1.1) rotate(5deg)' : 'scale(1)'
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 200, 
                                    delay: index * 0.2 + 0.3 
                                }}
                                whileHover={{ scale: 1.2, rotate: 10 }}
                            >
                                {milestone.icon}
                            </motion.div>

                            {/* Title */}
                            <motion.h3 
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#2c3e50',
                                    marginBottom: '20px',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
                            >
                                {milestone.title}
                            </motion.h3>

                            {/* Description */}
                            <motion.p 
                                style={{
                                    fontSize: '1rem',
                                    color: '#7f8c8d',
                                    lineHeight: '1.6',
                                    marginBottom: '25px'
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                            >
                                {milestone.description}
                            </motion.p>

                            {/* Stats Badge */}
                            <motion.div 
                                style={{
                                    background: `linear-gradient(135deg, ${milestone.color}15, ${milestone.color}05)`,
                                    padding: '15px 20px',
                                    borderRadius: '15px',
                                    border: `2px solid ${milestone.color}30`,
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    color: milestone.color
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {milestone.stats}
                            </motion.div>

                            {/* Progress indicator */}
                            <motion.div 
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '0',
                                    right: '0',
                                    height: '4px',
                                    background: `linear-gradient(90deg, ${milestone.color}, ${milestone.color}dd)`,
                                    borderRadius: '0 0 20px 20px'
                                }}
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 + 0.7 }}
                            ></motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}