import { useState, useEffect, useRef } from "react";

export default function Images() {
    const [modalImage, setModalImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const carouselRef = useRef(null);

    const images = [
        {
            src: `${process.env.PUBLIC_URL}/image-7.jpeg`,
            alt: "Waste to Wonder Art",
            title: "Waste to Wonder Installation",
            description: "Made with 10000+ recycled bottles and 1200+ tonnes of scrap irons, 'Waste to wonder' art installed at Jawaharlal Nehru Van Udyan (Park) in collaboration with District Administration."
        },
        {
            src: `${process.env.PUBLIC_URL}/image-1.jpeg`,
            alt: "Tree Plantation",
            title: "Green Plantation Drive",
            description: "Community-driven tree plantation initiatives to increase green cover and promote environmental sustainability across Lower Dibang Valley."
        },
        {
            src: `${process.env.PUBLIC_URL}/image-3.jpeg`,
            alt: "Material Recovery Facility",
            title: "MRF Installation",
            description: "Material Recovery Facility (MRF) installation at Mayu, Roing for efficient waste segregation and recycling operations."
        },
        {
            src: `${process.env.PUBLIC_URL}/image-8.jpeg`,
            alt: "School Campaign",
            title: "Zero Waste School Campaigns",
            description: "Zero waste campaigns in schools through collaboration with School Eco clubs, educating young minds about environmental responsibility."
        },
        {
            src: `${process.env.PUBLIC_URL}/image-6.jpeg`,
            alt: "Paper Making Workshop",
            title: "Sustainable Paper Workshop",
            description: "Home made paper making workshop in schools, teaching students eco-friendly alternatives and sustainable practices."
        }
    ];

    // Auto-scroll functionality
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, images.length]);

    const handlePrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    const handleImageClick = (imageSrc) => {
        setModalImage(imageSrc);
    };

    const closeModal = () => {
        setModalImage(null);
    };

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
                bottom: '15%',
                right: '10%',
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
                        Our NGO Initiatives
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
                        Showcasing our impactful environmental and community initiatives
                    </p>
                </div>

                {/* Carousel Container */}
                <div style={{
                    position: 'relative',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    {/* Main Carousel */}
                    <div 
                        ref={carouselRef}
                        style={{
                            overflow: 'hidden',
                            borderRadius: '25px',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            transform: `translateX(-${currentIndex * 100}%)`,
                            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}>
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    style={{
                                        minWidth: '100%',
                                        position: 'relative',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => handleImageClick(image.src)}
                                >
                                    {/* Image with frame effect */}
                                    <div style={{
                                        position: 'relative',
                                        padding: '20px',
                                        background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                                        borderRadius: '25px'
                                    }}>
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            style={{
                                                width: '100%',
                                                height: '400px',
                                                objectFit: 'cover',
                                                borderRadius: '15px',
                                                boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                                                transition: 'transform 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
                                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                        />
                                        
                                        {/* Decorative frame corners */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            left: '10px',
                                            width: '30px',
                                            height: '30px',
                                            border: '4px solid #27ae60',
                                            borderRight: 'none',
                                            borderBottom: 'none',
                                            borderRadius: '15px 0 0 0'
                                        }}></div>
                                        <div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            width: '30px',
                                            height: '30px',
                                            border: '4px solid #27ae60',
                                            borderLeft: 'none',
                                            borderBottom: 'none',
                                            borderRadius: '0 15px 0 0'
                                        }}></div>
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '10px',
                                            left: '10px',
                                            width: '30px',
                                            height: '30px',
                                            border: '4px solid #27ae60',
                                            borderRight: 'none',
                                            borderTop: 'none',
                                            borderRadius: '0 0 0 15px'
                                        }}></div>
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '10px',
                                            right: '10px',
                                            width: '30px',
                                            height: '30px',
                                            border: '4px solid #27ae60',
                                            borderLeft: 'none',
                                            borderTop: 'none',
                                            borderRadius: '0 0 15px 0'
                                        }}></div>
                                    </div>

                                    {/* Content Overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '0',
                                        right: '0',
                                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                        color: 'white',
                                        padding: '40px 30px 30px',
                                        borderRadius: '0 0 25px 25px'
                                    }}>
                                        <h3 style={{
                                            fontSize: '1.5rem',
                                            fontWeight: '700',
                                            marginBottom: '10px',
                                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                                        }}>
                                            {image.title}
                                        </h3>
                                        <p style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.5',
                                            opacity: '0.9',
                                            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                                        }}>
                                            {image.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>



                    {/* Dots Indicator */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '30px',
                        padding: '0 20px'
                    }}>
                        {/* Left Arrow */}
                        <button
                            onClick={handlePrevious}
                            style={{
                                background: 'rgba(255,255,255,0.9)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                color: '#2c3e50',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'white';
                                e.target.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(255,255,255,0.9)';
                                e.target.style.transform = 'scale(1)';
                            }}
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>

                        {/* Dots */}
                        <div style={{
                            display: 'flex',
                            gap: '8px'
                        }}>
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentIndex(index);
                                        setIsAutoPlaying(false);
                                        setTimeout(() => setIsAutoPlaying(true), 5000);
                                    }}
                                    style={{
                                        width: currentIndex === index ? '24px' : '8px',
                                        height: '8px',
                                        borderRadius: '4px',
                                        border: 'none',
                                        background: currentIndex === index 
                                            ? 'linear-gradient(45deg, #27ae60, #2ecc71)' 
                                            : 'rgba(255,255,255,0.5)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: currentIndex === index ? '0 2px 8px rgba(39, 174, 96, 0.4)' : 'none'
                                    }}
                                ></button>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={handleNext}
                            style={{
                                background: 'rgba(255,255,255,0.9)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                color: '#2c3e50',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'white';
                                e.target.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(255,255,255,0.9)';
                                e.target.style.transform = 'scale(1)';
                            }}
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>

                    {/* Auto-play indicator */}
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                    }}>
                        <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: isAutoPlaying ? '#27ae60' : '#e74c3c',
                            animation: isAutoPlaying ? 'pulse 1s ease-in-out infinite' : 'none'
                        }}></div>
                        {isAutoPlaying ? 'Auto' : 'Manual'}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modalImage && (
                <div 
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        padding: '20px'
                    }}
                    onClick={closeModal}
                >
                    <button
                        onClick={closeModal}
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'rgba(255,255,255,0.2)',
                            border: 'none',
                            color: 'white',
                            fontSize: '2rem',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        ×
                    </button>
                    <img 
                        src={modalImage} 
                        alt="Enlarged view"
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            borderRadius: '15px',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
                        }}
                    />
                </div>
            )}

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
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
                }
            `}</style>
        </section>
    );
}