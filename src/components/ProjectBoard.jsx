import React from 'react';

const ProjectBoard = () => {
    const projects = [
        {
            id: 1,
            title: "Next-Gen Fintech Dashboard",
            budget: "$5,000 - $8,000",
            duration: "2 Months",
            type: "Fixed Price",
            tags: ["React", "D3.js", "Financial"],
            posted: "2 hours ago"
        },
        {
            id: 2,
            title: "AI Mobile Assistant App",
            budget: "$40 - $70 / hr",
            duration: "Ongoing",
            type: "Hourly",
            tags: ["Flutter", "OpenAI", "Python"],
            posted: "5 hours ago"
        },
        {
            id: 3,
            title: "Brand Identity for Crypto Startup",
            budget: "$2,500 - $4,000",
            duration: "1 Month",
            type: "Fixed Price",
            tags: ["Branding", "UI Design", "3D"],
            posted: "1 day ago"
        },
        {
            id: 4,
            title: "Secure Cloud Storage Infrastructure",
            budget: "$10,000+",
            duration: "3 Months",
            type: "Fixed Price",
            tags: ["Kubernetes", "Azure", "Security"],
            posted: "3 hours ago"
        }
    ];

    return (
        <section id="projects" style={{ padding: '8rem 0', background: 'var(--bg-surface)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                    <div>
                        <h2 style={{ marginBottom: '1rem' }}>Active <span className="text-gradient">Opportunities</span></h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Browse the latest high-value projects looking for experts.</p>
                    </div>
                    <button className="btn btn-primary">Post a Project</button>
                </div>

                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {projects.map(project => (
                        <div key={project.id} className="card" style={{
                            padding: '2rem',
                            display: 'grid',
                            gridTemplateColumns: '1fr auto',
                            alignItems: 'center',
                            gap: '2rem'
                        }}>
                            <div>
                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                                    <span style={{ fontSize: '0.75rem', padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.03)', borderRadius: '100px', border: '1px solid var(--glass-border)', color: 'var(--primary)' }}>
                                        {project.type}
                                    </span>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>Posted {project.posted}</span>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>#{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div style={{ textAlign: 'right', borderLeft: '1px solid var(--glass-border)', paddingLeft: '2.5rem' }}>
                                <div style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.2rem' }}>{project.budget}</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Est. Time: {project.duration}</div>
                                <button className="btn btn-outline" style={{ padding: '0.6rem 1.8rem' }}>Apply Now</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <button className="btn btn-outline" style={{ border: 'none', textDecoration: 'underline' }}>View All Open Tasks</button>
                </div>
            </div>
        </section>
    );
};

export default ProjectBoard;
