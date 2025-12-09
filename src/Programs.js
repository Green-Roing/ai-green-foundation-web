import {useState} from "react";
import { motion } from "framer-motion";

export default function Programs({ programTitle, programDesc, programBody, image, iconColor }) {
    const [showOverlay, setShowOverlay] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleOverlay = () => setShowOverlay(!showOverlay);

    return (
        <motion.div 
            style={{ position: 'relative', marginBottom: '20px' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
        >
            <motion.div
                className="program-card"
                style={{
                    backgroundColor: 'white',
                    padding: '40px 30px',
                    borderRadius: '20px',
                    boxShadow: isHovered 
                        ? '0 25px 50px rgba(0, 0, 0, 0.15)' 
                        : '0 10px 30px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    minHeight: '420px',
                    width: '100%',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {/* Decorative background elements */}
                <motion.div 
                    style={{
                        position: 'absolute',
                        top: '-50px',
                        right: '-50px',
                        width: '100px',
                        height: '100px',
                        background: `linear-gradient(45deg, ${iconColor || '#27ae60'}, ${iconColor || '#2ecc71'})`,
                        borderRadius: '50%',
                        opacity: '0.1',
                        transition: 'all 0.3s ease'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                ></motion.div>

                <motion.div 
                    style={{
                        position: 'absolute',
                        bottom: '-30px',
                        left: '-30px',
                        width: '60px',
                        height: '60px',
                        background: `linear-gradient(45deg, ${iconColor || '#27ae60'}, ${iconColor || '#2ecc71'})`,
                        borderRadius: '50%',
                        opacity: '0.05',
                        transition: 'all 0.3s ease'
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                ></motion.div>

                <div>
                    <motion.div
                        className="icon"
                        style={{ 
                            fontSize: '60px', 
                            color: iconColor || '#27ae60',
                            marginBottom: '20px',
                            transition: 'all 0.3s ease',
                            transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                            textShadow: '0 4px 8px rgba(0,0,0,0.1)'
                        }}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {image === "greenRoingLogo" ? (
                            <motion.img 
                                src={`${process.env.PUBLIC_URL}/grLogo.png`} 
                                alt="AI Green Foundation" 
                                height="80px" 
                                width="80px"
                                style={{
                                    transition: 'all 0.3s ease',
                                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                                }}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                            />
                        ) : (
                            <i className={image}></i>
                        )}
                    </motion.div>
                    
                    <motion.h3 
                        style={{ 
                            fontSize: '1.4rem', 
                            marginBottom: '15px',
                            color: '#2c3e50',
                            fontWeight: '700',
                            textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease'
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {programTitle}
                    </motion.h3>
                    
                    <motion.p 
                        style={{
                            fontSize: '0.95rem',
                            color: '#7f8c8d',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            flexGrow: 1,
                            lineHeight: '1.6',
                            marginBottom: '20px'
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {programDesc}
                    </motion.p>
                </div>

                <motion.button
                    className="btn"
                    onClick={() => {
                        if (programTitle === "Green Roing Initiative") {
                            window.open("https://greenroing.aigreenfoundation.com/", "_blank");
                        } else {
                            toggleOverlay();
                        }
                    }}
                    style={{
                        background: `linear-gradient(45deg, ${iconColor || '#27ae60'}, ${iconColor || '#2ecc71'})`,
                        color: 'white',
                        padding: '14px 28px',
                        borderRadius: '50px',
                        border: 'none',
                        fontSize: '1rem',
                        fontWeight: '600',
                        marginTop: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        cursor: 'pointer',
                        boxShadow: '0 8px 25px rgba(39, 174, 96, 0.3)',
                        textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <span style={{ position: 'relative', zIndex: 1 }}>Learn More</span>
                    <motion.i 
                        className="fas fa-arrow-right" 
                        style={{ 
                            marginLeft: '10px',
                            transition: 'transform 0.3s ease',
                            position: 'relative',
                            zIndex: 1
                        }}
                        whileHover={{ x: 5 }}
                    ></motion.i>
                </motion.button>
            </motion.div>

            {showOverlay && (
                <motion.div
                    className="overlay-card"
                    style={{
                        position: 'absolute',
                        top: '-20px',
                        left: '0',
                        right: '0',
                        backgroundColor: 'white',
                        padding: '40px',
                        borderRadius: '20px',
                        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
                        zIndex: '10',
                        textAlign: 'left',
                        overflowY: 'auto',
                        maxHeight: '450px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)'
                    }}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <motion.h3 
                        style={{ 
                            fontSize: '1.6rem', 
                            marginBottom: '25px',
                            color: '#2c3e50',
                            fontWeight: '700',
                            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        {programTitle}
                    </motion.h3>
                    
                    <motion.div 
                        style={{
                            fontSize: '1rem', 
                            color: '#34495e',
                            lineHeight: '1.7',
                            marginBottom: '20px'
                        }}
                        dangerouslySetInnerHTML={{ __html: programBody }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    />
                    
                    <motion.button
                        onClick={toggleOverlay}
                        style={{
                            position: 'absolute',
                            top: '15px',
                            right: '15px',
                            background: 'linear-gradient(45deg, #e74c3c, #c0392b)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 15px rgba(231, 76, 60, 0.3)'
                        }}
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <i className="fas fa-times" style={{ fontSize: '16px' }}></i>
                    </motion.button>
                </motion.div>
            )}
        </motion.div>
    );
}