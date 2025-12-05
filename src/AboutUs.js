import React from "react";
import Mission from "./Mission";
import Footer from "./Footer";
import KeyMilestones from "./Keymilestones";
import Projects from "./Projects";
import Images from "./Images";
import GreenRoing from "./GreenRoing";
import MobileApp from "./MobileApp";

export default function AboutUs() {
  return (
    <div className="about-us-page">
      {/* Enhanced Hero Section */}
      <div 
        className="hero-section"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${process.env.PUBLIC_URL}/HeaderImage.jpeg)`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          padding: '100px 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated particles background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(39, 174, 96, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(46, 204, 113, 0.1) 0%, transparent 50%)',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        
        <div style={{
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          zIndex: 2
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            animation: 'slideInDown 1s ease-out'
          }}>
            AI Green Foundation
          </h1>
          <p style={{
            fontSize: '1.3rem',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            animation: 'slideInUp 1s ease-out 0.3s both'
          }}>
            Supporting green initiatives and innovation
          </p>
        </div>
      </div>

      {/* Enhanced About Section */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Floating elements */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '100px',
            height: '100px',
            background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
            borderRadius: '50%',
            opacity: '0.1',
            animation: 'float 4s ease-in-out infinite'
          }}></div>
          
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#2c3e50',
              marginBottom: '20px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              position: 'relative'
            }}>
              About Our Foundation
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
                borderRadius: '2px'
              }}></div>
            </h2>
          </div>

          <div style={{
            background: 'white',
            padding: '50px',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decorative elements */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              left: '-50px',
              width: '100px',
              height: '100px',
              background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
              borderRadius: '50%',
              opacity: '0.1'
            }}></div>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#34495e',
              textAlign: 'justify',
              marginBottom: '30px',
              position: 'relative',
              zIndex: 1
            }}>
              Founded to tackle pressing environmental and social issues in all over India, the AI Green Foundation (AIGF) is a non-profit organization that focuses on sustainable development, environmental protection, and community welfare. Registered under the Ministry of Corporate Affairs (CIN: U88900AR2023NPL013908) and compliant with Section 12A and 80G of the Income Tax Act, the organization has been growing steadily since its inception, making a substantial impact in the field of waste management, river conservation, pollution control, and more.
            </p>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#34495e',
              textAlign: 'justify',
              position: 'relative',
              zIndex: 1
            }}>
              Starting its journey from Roing town in Lower Dibang Valley, AIGF's foundation was laid with a focus on promoting environmental stewardship through community participation, research, training, and hands-on initiatives.
            </p>
          </div>
        </div>
      </section>

      <KeyMilestones />
      <Images />
      <Mission />
      <Projects/>
      <GreenRoing />
      <MobileApp />
      <Footer />

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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
          .hero-section h1 {
            font-size: 2.5rem !important;
          }
          .hero-section p {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </div>
  );
}