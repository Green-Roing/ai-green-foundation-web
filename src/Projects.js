import Programs from "./Programs";
import { motion } from "framer-motion";

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
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {/* Enhanced Header Section */}
            <motion.section 
                style={{ 
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    padding: '80px 20px',
                    textAlign: 'center',
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden'
                }}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Animated background elements */}
                <motion.div 
                    style={{
                        position: 'absolute',
                        top: '10%',
                        left: '10%',
                        width: '100px',
                        height: '100px',
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '50%'
                    }}
                    animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                ></motion.div>
                
                <motion.div 
                    style={{
                        position: 'absolute',
                        top: '60%',
                        right: '15%',
                        width: '60px',
                        height: '60px',
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '50%'
                    }}
                    animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, -180, -360]
                    }}
                    transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 2
                    }}
                ></motion.div>

                <motion.div 
                    style={{
                        position: 'relative',
                        zIndex: 2
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.h1 
                        style={{ 
                            fontSize: '3.2rem', 
                            fontWeight: 'bold',
                            marginBottom: '20px',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Our Programs & Initiatives
                    </motion.h1>
                    
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
                        transition={{ duration: 0.8, delay: 0.5 }}
                    ></motion.div>
                    
                    <motion.p 
                        style={{ 
                            fontSize: '1.3rem',
                            opacity: '0.9',
                            maxWidth: '800px',
                            margin: '0 auto',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 0.9, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Creating Impact through Environmental Conservation and Community Welfare
                    </motion.p>
                </motion.div>
            </motion.section>

            {/* Enhanced Programs Section */}
            <motion.section 
                style={{ 
                    padding: '80px 20px',
                    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                    position: 'relative'
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {/* Decorative elements */}
                <motion.div 
                    style={{
                        position: 'absolute',
                        top: '20px',
                        left: '5%',
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle, rgba(39, 174, 96, 0.1) 0%, transparent 70%)',
                        borderRadius: '50%'
                    }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                
                <motion.div 
                    style={{
                        position: 'absolute',
                        bottom: '20px',
                        right: '5%',
                        width: '150px',
                        height: '150px',
                        background: 'radial-gradient(circle, rgba(52, 152, 219, 0.1) 0%, transparent 70%)',
                        borderRadius: '50%'
                    }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                ></motion.div>

                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <motion.div 
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '20px',
                            maxWidth: '1400px',
                            margin: '0 auto'
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {programs.map((program, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Programs
                                    programTitle={program.programTitle}
                                    programDesc={program.programDesc}
                                    programBody={program.programBody}
                                    image={program.image}
                                    iconColor={program.iconColor}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </motion.div>
    )
}