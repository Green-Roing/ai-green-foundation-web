export default function KeyMilestones() {
    return (
        <section className="milestones-section" style={{ backgroundColor: '#f8f9fa', padding: '50px 0' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#2c3e50', marginBottom: '40px' }}>Key Milestones</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-icon" style={{ backgroundColor: '#28a745' }}>
                            <i className="fas fa-seedling" style={{ color: '#fff' }}></i>
                        </div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">2022 - Green Roing Initiative</h3>
                            <p>Launched the "Green Roing" initiative for effective solid waste management.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon" style={{ backgroundColor: '#ffc107' }}>
                            <i className="fas fa-award" style={{ color: '#fff' }}></i>
                        </div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">2023 - Chief Minister’s Award</h3>
                            <p>Awarded the Chief Minister’s Award for Urban Space Development through a joint collaboration with the district administration.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon" style={{ backgroundColor: '#17a2b8' }}>
                            <i className="fas fa-water" style={{ color: '#fff' }}></i>
                        </div>
                        <div className="timeline-content">
                            <h3 className="timeline-title">Expanded Efforts</h3>
                            <p>Expanded efforts to river conservation and social forestry projects.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
