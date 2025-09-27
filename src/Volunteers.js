import React from "react";

export default function Volunteers() {
  return (
    <section className="volunteer-section">
      <div className="volunteer-container">
        <div className="volunteer-content">
          <h3 className="volunteer-title">Volunteer for India &amp; her Environment with E.F.I</h3>
          <p className="volunteer-text">
            We scientifically restore lakes/ponds, as they are important habitats for all life forms. In addition to our lake restoration efforts, we at E.F.I run the following programs to get you involved in conserving India’s environment.
          </p>
          <div className="slider-container">
            <div className="slider">
              {[
                {
                  image: "https://indiaenvironment.org/wp-content/uploads/2019/02/Lake-Safari-300x300.jpg",
                  alt: "Lake Safari",
                  title: "Lake Safari",
                  description: "An ecological tour to the lakes in our neighborhood. Learn about water bodies in detail – history, geography, and more.",
                },
                {
                  image: "https://indiaenvironment.org/wp-content/uploads/2019/02/save-water-300x300.jpg",
                  alt: "E.F.I’s Wall-E",
                  title: "E.F.I’s Wall-E",
                  description: "An awareness wall-painting initiative to popularize India’s wildlife and habitats by painting public walls with biodiversity info.",
                },
                {
                  image: "https://indiaenvironment.org/wp-content/uploads/2019/02/Hydrostan-logo-300x300.jpg",
                  alt: "Hydrostan",
                  title: "Hydrostan",
                  description: "Environmental Film Association (E.F.A) makes weekly infotainment videos on India’s Environment. Watch inspiring water stories.",
                },
                {
                  image: "https://indiaenvironment.org/wp-content/uploads/2019/02/ScienceBadge-300x300.jpg",
                  alt: "Science Badge",
                  title: "Science Badge",
                  description: "Through Science Badge orientation, E.F.I identifies young talent from schools across India &amp; nurtures them as future leaders.",
                },
                {
                  image: "https://indiaenvironment.org/wp-content/uploads/2019/02/Lake-Cleanup-300x300.jpg",
                  alt: "Cyclakes",
                  title: "Cyclakes",
                  description: "Combine fitness with passion for the environment via weekend cycle tours to lakes and habitats, exploring natural wonders.",
                },
              ].map((slide, index) => (
                <div key={index} className="slide">
                  <img src={slide.image} alt={slide.alt} />
                  <h4>{slide.title}</h4>
                  <p style={{ textWrap: "wrap"}}>{slide.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}