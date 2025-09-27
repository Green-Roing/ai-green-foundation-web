import { useState } from "react";

export default function Images() {
    const [modalImage, setModalImage] = useState(null);

    const handleScroll = (direction) => {
        const container = document.querySelector(".ngo-images-grid");
        const scrollAmount = 300; // Adjust the scroll amount as needed
        if (direction === "left") {
            container.scrollLeft -= scrollAmount;
        } else {
            container.scrollLeft += scrollAmount;
        }
    };

    const handleImageClick = (imageSrc) => {
        setModalImage(imageSrc);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    // Descriptions for each image
    const images = [
        {
            src: `${process.env.PUBLIC_URL}/image-7.jpeg`,
            alt: "NGO 1",
            description: "Made with 10000+ recycled bottles and 1200+ tonnes of scrap irons, “Waste to wonder” art installed at Jawaharlal Nehru Van Udyan (Park)in collaboration with District Administration."
        },
        {
            src: `${process.env.PUBLIC_URL}/image-1.jpeg`,
            alt: "NGO 2",
            description: "Tree plantation drive."
        },
        // {
        //     src: `${process.env.PUBLIC_URL}/image-2.jpeg`,
        //     alt: "NGO 3",
        //     description: ""
        // },
        {
            src: `${process.env.PUBLIC_URL}/image-3.jpeg`,
            alt: "NGO 4",
            description: "Material Recovery Facility (MRF) installation at Mayu, Roing."
        },
        // {
        //     src: `${process.env.PUBLIC_URL}/image-4.jpeg`,
        //     alt: "NGO 5",
        //     description: ""
        // },
        {
            src: `${process.env.PUBLIC_URL}/image-8.jpeg`,
            alt: "NGO 8",
            description: "Zero waste campaigns in schools Collaboration with School Eco clubs."
        },
        {
            src: `${process.env.PUBLIC_URL}/image-6.jpeg`,
            alt: "NGO 7",
            description: "Home made paper making workshop in schools."
        },
    ];

    return (
        <section className="ngo-images-section">
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#2c3e50', marginBottom: '40px' }}>Our NGO Initiatives</h2>

                {/* Left Arrow */}
                <button className="scroll-arrow left-arrow" onClick={() => handleScroll("left")}>&#9664;</button>

                <div className="ngo-images-grid">
                    {images.map((image, index) => (
                        <div key={index} className="ngo-image-container">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="ngo-image"
                                onClick={() => handleImageClick(image.src)}
                            />
                            <p className="ngo-image-description">{image.description}</p>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button className="scroll-arrow right-arrow" onClick={() => handleScroll("right")}>&#9654;</button>
            </div>

            {modalImage && (
                <div className="modal" onClick={closeModal}>
                    <span className="close">&times;</span>
                    <img className="modal-content" src={modalImage} alt="Enlarged NGO" />
                </div>
            )}
        </section>
    );
}
