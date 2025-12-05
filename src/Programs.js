import {useState} from "react";

export default function Programs({ programTitle, programDesc, programBody, image, iconColor }) {
    const [showOverlay, setShowOverlay] = useState(false);

    const toggleOverlay = () => setShowOverlay(!showOverlay);

    return (
        <div className="col-md-4" style={{ position: 'relative' }}>
            <div
                className="program-card"
                style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    height: '350px',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginBottom: "20px"
                }}
            >
                <div>
                    <div
                        className="icon"
                        style={{ fontSize: '50px', color: iconColor || '#27ae60' }}
                    >
                        {image === "greenRoingLogo" ? (
                            <img src={`${process.env.PUBLIC_URL}/grLogo.png`} alt="AI Green Foundation" height="100px" width="100px" />
                        ) : (
                            <i className={image}></i>
                        )}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginTop: '20px' }}>{programTitle}</h3>
                    <p
                        style={{
                            fontSize: '0.9rem',
                            marginTop: '10px',
                            color: '#7f8c8d',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            flexGrow: 1,
                        }}
                    >
                        {programDesc}
                    </p>
                </div>

                <button
                    className="btn"
                    onClick={toggleOverlay}
                    style={{
                        background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        marginTop: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                >
                    Learn More
                    <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i> {/* Add arrow icon */}
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
                        padding: '30px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        zIndex: '10',
                        textAlign: 'left',
                        overflowY: 'auto',
                        maxHeight: '400px',
                        transition: 'opacity 0.3s ease',
                    }}
                >
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>{programTitle}</h3>
                    <p
                        style={{ fontSize: '1rem', color: '#2c3e50' }}
                        dangerouslySetInnerHTML={{ __html: programBody }}
                    />
                    <i
                        className="fas fa-times"
                        onClick={toggleOverlay}
                        style={{
                            color: '#e74c3c',
                            fontSize: '24px',
                            cursor: 'pointer',
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
                        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                    ></i>
                </div>
            )}
        </div>
    );
}
