export default function Mission() {
    return (
        <section className="mission-section" style={{ textAlign: 'center', backgroundColor: '#5a900f' }}>
            <div className="container" style={{ backgroundColor: '#5a900f'}}>
                <div className="row">
                    <div className="col-12 mb-4">
                        <h2 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '30px', fontWeight: 'bold', marginTop: "30px" }}>Our Mission & Vision</h2>
                    </div>

                    {/* Mission Card */}
                    <div className="col-md-6 mb-4">
                        <div className="card mission-card shadow-lg" style={{
                            padding: '30px',
                            borderRadius: '15px',
                            backgroundColor: '#ffffff',
                            backgroundImage: 'url("https://www.ecowatch.com/wp-content/uploads/2022/07/earth-from-space.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: '#5a900f',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                        }}>
                            <div className="icon-box" style={{ marginBottom: '20px' }}>
                                <i className="fa fa-globe" aria-hidden="true" style={{ fontSize: '50px' }}></i>
                            </div>
                            <h3 className="mission-title" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Mission</h3>
                            <p className="mission-description" style={{ fontSize: '1rem' }}>
                            To protect and enhance the environment through innovative programs and sustainable practices while addressing key issues like waste management, river conservation, and pollution control.
                            </p>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="col-md-6 mb-4">
                        <div className="card vision-card shadow-lg" style={{
                            padding: '30px',
                            borderRadius: '15px',
                            backgroundColor: '#ffffff',
                            backgroundImage: 'url("https://cdn.pixabay.com/photo/2020/10/29/05/23/sunset-5694964_960_720.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: '#5a900f',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                        }}>
                            <div className="icon-box" style={{ marginBottom: '20px' }}>
                                <i className="fa fa-bullseye" aria-hidden="true" style={{ fontSize: '50px'}}></i>
                            </div>
                            <h3 className="vision-title" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Vision</h3>
                            <p className="vision-description" style={{ fontSize: '1rem' }}>
                            To create a sustainable and pollution-free environment where communities not only survive but thrive, and fostering a deep sense of responsibility towards the management </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quote Section */}
            <div className="quote-section" style={{
                backgroundImage: 'url("https://res.cloudinary.com/simpleview/image/upload/v1627494161/clients/whitemountainsnh/Towns_LakesRegion_20853a40-13fc-446c-9080-d9372c1b1656.jpg")',
                backgroundSize: 'cover',
                padding: '60px 20px',
                marginTop: '50px',
                backgroundAttachment: 'fixed'
            }}>
                <blockquote className="quote" style={{
                    fontSize: '1.5rem',
                    color: '#ffffff',
                    textAlign: 'center',
                    maxWidth: '800px',
                    margin: '0 auto',
                    fontStyle: 'italic'
                }}>
                    <p>
                        "Innovation and green initiatives are the seeds of a thriving, sustainable future"
                    </p>
                    <cite style={{ display: 'block', marginTop: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>Ibi Mepo, Director(AIGF)</cite>
                </blockquote>
            </div>
        </section>
    );
}
