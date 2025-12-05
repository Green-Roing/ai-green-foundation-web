import Programs from "./Programs";

export default function Projects() {
    const programs = [
        {   
            image: "fa fa-globe",
            alt: "Environmental Protection and Awareness",
            programTitle: "Environmental Protection and Awareness",
            programDesc: "Empowering communities with eco-friendly practices, sustainable living techniques, and environmental conservation awareness programs.",
            iconColor: "#3498db",
            programBody: "1.Research on eco-friendly waste management technologies, including composting systems to convert organic waste into compost.<br/>2.Facilitated the creation of composting units across villages, empowering self-help groups and kitchen garden owners.</br>3.Organized recycling programs with advanced sorting technologies and established a local Material Recovery Facility"
        },
        {
            image: "fa fa-tree",
            alt: "Social Forestry",
            programTitle: "Social Forestry",
            programDesc: "Creating green spaces through community-driven tree plantation drives, nursery development, and forest conservation initiatives.",
            iconColor: "#27ae60",
            programBody: "1.Developed nurseries and kitchen gardens for community-driven plantations.<br/>2.Actively conducted plantation drives and awareness programs across Lower Dibang Valley, encouraging community participation.<br/> 3.AIGF has planted numerous trees in collaboration with local communities, contributing to reforestation efforts and reducing air pollution."
        },
        {
            image: "greenRoingLogo",
            programTitle:"Green Roing Initiative" ,
            programDesc:"Revolutionary waste management system transforming Roing into a model sustainable city through innovative collection and recycling methods.",
            iconColor: "#e74c3c",
            programBody:
              "Launch: Focused on waste collection, segregation, and recycling.<br/> Collaborations: Worked alongside DUDA under guidance from the Lower Dibang Valley District Administration.<br/>Impact: Praised for efficiency and replicated in other districts, setting a model for solid waste management."
            ,
        },
        {
            image: "fa fa-recycle",
            programTitle:"Plastic Waste Management" ,
            programDesc:"Transforming plastic waste into valuable resources through cutting-edge recycling technologies and community engagement programs." ,
            iconColor: "#9b59b6",
            programBody:
              "AIGF developed a model to reduce the negative impact of plastic waste, aligning with the Swachh Bharat Mission. The program focuses on recycling, segregation, and creating economic sustainability through plastic waste management."
            ,
        },
        {
            image: "fa fa-dumpster",
            programTitle:"Solid Waste Management" ,
            programDesc:"Comprehensive waste management solutions promoting zero-waste communities through decentralized composting and sustainable disposal practices." ,
            iconColor: "#f39c12",
            programBody:
              "1.Promoted decentralized waste management through home and community composting.<br/>2.Reached high waste segregation in target areas by creating residential committees and fostering local ownership.<br/>3.Engaged local communities by raising awareness on the importance of recycling and sustainable waste disposal practices"
            ,
        },
    ];

    return (
        <>
            {/* Enhanced Header Section */}
            <section style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '80px 20px',
                textAlign: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Animated background elements */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    width: '100px',
                    height: '100px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    animation: 'float 6s ease-in-out infinite'
                }}></div>
                
                <div style={{
                    position: 'absolute',
                    top: '60%',
                    right: '15%',
                    width: '60px',
                    height: '60px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    animation: 'float 4s ease-in-out infinite 2s'
                }}></div>

                <div style={{
                    position: 'relative',
                    zIndex: 2
                }}>
                    <h1 style={{ 
                        fontSize: '3.2rem', 
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                        animation: 'slideInDown 1s ease-out'
                    }}>
                        Our Programs & Initiatives
                    </h1>
                    
                    <div style={{
                        width: '100px',
                        height: '4px',
                        background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
                        margin: '0 auto 30px',
                        borderRadius: '2px',
                        animation: 'slideInUp 1s ease-out 0.3s both'
                    }}></div>
                    
                    <p style={{ 
                        fontSize: '1.3rem',
                        opacity: '0.9',
                        maxWidth: '800px',
                        margin: '0 auto',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                        animation: 'slideInUp 1s ease-out 0.6s both'
                    }}>
                        Creating Impact through Environmental Conservation and Community Welfare
                    </p>
                </div>
            </section>

            {/* Enhanced Programs Section */}
            <section style={{ 
                padding: '80px 20px',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                position: 'relative'
            }}>
                {/* Decorative elements */}
                <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '5%',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(39, 174, 96, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%'
                }}></div>
                
                <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '5%',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(52, 152, 219, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%'
                }}></div>

                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '20px',
                        maxWidth: '1400px',
                        margin: '0 auto'
                    }}>
                        {programs.map((program, index) => (
                            <div
                                key={index}
                                style={{
                                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <Programs
                                    programTitle={program.programTitle}
                                    programDesc={program.programDesc}
                                    programBody={program.programBody}
                                    image={program.image}
                                    iconColor={program.iconColor}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Add CSS animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { 
                        transform: translateY(0px) rotate(0deg); 
                    }
                    50% { 
                        transform: translateY(-20px) rotate(180deg); 
                    }
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
                    h1 {
                        font-size: 2.5rem !important;
                    }
                    p {
                        font-size: 1.1rem !important;
                    }
                    div[style*="grid-template-columns"] {
                        grid-template-columns: 1fr !important;
                        gap: 15px !important;
                    }
                }
            `}</style>
        </>
    )
}