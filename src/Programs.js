import {useState} from "react";

export default function Programs({ programTitle, programDesc, programBody, image, iconColor }) {
    const [showOverlay, setShowOverlay] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleOverlay = () => setShowOverlay(!showOverlay);

    return (
        <div style={{ position: 'relative', marginBottom: '20px' }}>
            <div
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
            >
                {/* Decorative background elements */}
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '100px',
                    height: '100px',
                    background: `linear-gradient(45deg, ${iconColor || '#27ae60'}, ${iconColor || '#2ecc71'})`,
                    borderRadius: '50%',
                    opacity: '0.1',
                    transition: 'all 0.3s ease'
                }}></div>

                <div style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '-30px',
                    width: '60px',
                    height: '60px',
                    background: `linear-gradient(45deg, ${iconColor || '#27ae60'}, ${iconColor || '#2ecc71'})`,
                    borderRadius: '50%',
                    opacity: '0.05',
                    transition: 'all 0.3s ease'
                }}></div>

                <div>
                    <div
                        className="icon"
                        style={{ 
                            fontSize: '60px', 
                            color: iconColor || '#27ae60',
                            marginBottom: '20px',
                            transition: 'all 0.3s ease',
                            transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                            textShadow: '0 4px 8px rgba(0,0,0,0.1)'
                        }}
                    >
                        {image === "greenRoingLogo" ? (
                            <img 
                                src={`${process.env.PUBLIC_URL}/grLogo.png`} 
                                alt="AI Green Foundation" 
                                height="80px" 
                                width="80px"
                                style={{
                                    transition: 'all 0.3s ease',
                                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                                }}
                            />
                        ) : (
                            <i className={image}></i>
                        )}
                    </div>
                    
                    <h3 style={{ 
                        fontSize: '1.4rem', 
                        marginBottom: '15px',
                        color: '#2c3e50',
                        fontWeight: '700',
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        transition: 'all 0.3s ease'
                    }}>
                        {programTitle}
                    </h3>
                    
                    <p style={{
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
                    }}>
                        {programDesc}
                    </p>
                </div>

                <button
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
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px) scale(1.05)';
                        e.target.style.boxShadow = '0 12px 35px rgba(39, 174, 96, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.boxShadow = '0 8px 25px rgba(39, 174, 96, 0.3)';
                    }}
                >
                    <span style={{ position: 'relative', zIndex: 1 }}>Learn More</span>
                    <i 
                        className="fas fa-arrow-right" 
                        style={{ 
                            marginLeft: '10px',
                            transition: 'transform 0.3s ease',
                            position: 'relative',
                            zIndex: 1
                        }}
                    ></i>
                    
                    {/* Button shine effect */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        transition: 'left 0.5s ease',
                        pointerEvents: 'none'
                    }}></div>
                </button>
            </div>

            {showOverlay && (
                <div
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
                        animation: 'slideIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <h3 style={{ 
                        fontSize: '1.6rem', 
                        marginBottom: '25px',
                        color: '#2c3e50',
                        fontWeight: '700',
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        {programTitle}
                    </h3>
                    
                    <div style={{
                        fontSize: '1rem', 
                        color: '#34495e',
                        lineHeight: '1.7',
                        marginBottom: '20px'
                    }}
                        dangerouslySetInnerHTML={{ __html: programBody }}
                    />
                    
                    <button
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
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.1) rotate(90deg)';
                            e.target.style.boxShadow = '0 6px 20px rgba(231, 76, 60, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1) rotate(0deg)';
                            e.target.style.boxShadow = '0 4px 15px rgba(231, 76, 60, 0.3)';
                        }}
                    >
                        <i className="fas fa-times" style={{ fontSize: '16px' }}></i>
                    </button>
                </div>
            )}

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-20px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </div>
    );
}