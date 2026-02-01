import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import archImageFintech from '../assets/case-studies/fintech-architecture.png';
import uiImageFintech from '../assets/case-studies/fintech-ui.png';
import securityImageFintech from '../assets/case-studies/fintech-security.png';
import brandingMain from '../assets/case-studies/branding-main.png';
import brandingSystem from '../assets/case-studies/branding-system.png';
import brandingMockup from '../assets/case-studies/branding-mockup.png';
import designProcess from '../assets/case-studies/design-process.png';
import designComponents from '../assets/case-studies/design-components.png';
import designResearch from '../assets/case-studies/design-research.png';
import mobileMain from '../assets/case-studies/mobile-main.png';
import mobileArch from '../assets/case-studies/mobile-arch.png';
import mobileWearable from '../assets/case-studies/mobile-wearable.png';
import chatbotMain from '../assets/case-studies/chatbot-main.png';
import chatbotPipeline from '../assets/case-studies/chatbot-pipeline.png';
import chatbotSentiment from '../assets/case-studies/chatbot-sentiment.png';

const CaseStudy = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentProgress = (window.scrollY / totalScroll) * 100;
            setScrollProgress(currentProgress);
        };

        window.addEventListener('scroll', handleScroll);

        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-study').forEach(el => observer.observe(el));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const studies = {
        'full-stack-development': {
            title: "Next-Gen Fintech Platform",
            category: "Full Stack Development",
            client: "Global Finance Corp",
            duration: "6 Months",
            impact: "+45% Conversion",
            description: "A comprehensive digital transformation project involving the creation of a high-performance, secure fintech ecosystem and real-time transaction processing.",
            challenge: "The client faced extreme latency in transaction processing and a fragmented customer data layer that inhibited personalized offerings. Scalability was at its breaking point.",
            solution: "We implemented a distributed microservices architecture using Node.js and Redis for sub-100ms processing. The frontend was rebuilt in Next.js for server-side optimization and superior SEO.",
            results: [
                { label: "Processing Speed", value: "99.9%", sub: "Reduction in latency" },
                { label: "Active Users", value: "2.4M", sub: "Concurrent peak load" },
                { label: "System Uptime", value: "99.99%", sub: "High availability" }
            ],
            strategy: [
                { phase: "01", title: "Discovery & Audit", detail: "Comprehensive analysis of legacy bottlenecks and security vulnerabilities." },
                { phase: "02", title: "Core Architecture", detail: "Designing the microservices mesh and real-time data ingestion layers." },
                { phase: "03", title: "Interface Deployment", detail: "Building the high-fidelity React dashboard with real-time telemetry." },
                { phase: "04", title: "Hardening & Scale", detail: "Stress testing the infrastructure for 1M+ concurrent transactions." }
            ],
            tech: ["React", "Node.js", "Redis", "PostgreSQL", "AWS", "Docker"],
            testimonial: {
                quote: "Aster Technologies didn't just build a website; they re-engineered our entire business core. The ROI was visible within 30 days of launch.",
                author: "Sarah Jenkins",
                role: "CTO, Global Finance Corp"
            },
            mainImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            archImage: archImageFintech,
            uiImage: uiImageFintech,
            securityImage: securityImageFintech
        },
        'graphic-design': {
            title: "Aura Luxury Rebranding",
            category: "Graphic Design",
            client: "Aura & Co.",
            duration: "3 Months",
            impact: "200% Reach Growth",
            description: "A complete visual identity overhaul for a luxury lifestyle brand, focusing on timeless elegance and high-end market positioning.",
            challenge: "The brand's original identity was perceived as dated and lacked the premium feel required to compete in the luxury market. Visual communication was inconsistent across channels.",
            solution: "We developed a minimalist but powerful design system based on monochromatic palettes and gold accents. This included a custom logomark, typography guidelines, and a comprehensive set of print and digital assets.",
            results: [
                { label: "Market Perception", value: "+85%", sub: "Premium brand score" },
                { label: "Engagement", value: "3.2X", sub: "Social media interaction" },
                { label: "Asset Consistency", value: "100%", sub: "Cross-platform unified" }
            ],
            strategy: [
                { phase: "01", title: "Visual Audit", detail: "Analyzing market competitors and identifying gaps in the current brand perception." },
                { phase: "02", title: "Concept Evolution", detail: "Developing multiple directions for the new visual language and logomark." },
                { phase: "03", title: "Design System", detail: "Finalizing the brand toolkit including color, type, and layout rules." },
                { phase: "04", title: "Collateral Build", detail: "Producing a suite of high-end business cards, packaging, and digital templates." }
            ],
            tech: ["Adobe Photoshop", "Illustrator", "InDesign", "Figma", "Typography"],
            testimonial: {
                quote: "The brand has been completely transformed. We are now attracting the exact high-end clientele we were aiming for.",
                author: "Elena Vasquez",
                role: "Marketing Director, Aura & Co."
            },
            mainImage: brandingMain,
            archImage: brandingSystem,
            uiImage: brandingMockup
        },
        'modern-web-design': {
            title: "Lumira E-Commerce Core",
            category: "Modern Web Design",
            client: "Lumira Retail Group",
            duration: "5 Months",
            impact: "150% UX Score",
            description: "A comprehensive redesign of a high-traffic e-commerce platform, focusing on extreme usability, motion-driven engagement, and accessibility.",
            challenge: "High bounce rates on key product pages due to overwhelming cognitive load and lackluster visual storytelling. Mobile users felt neglected by the sparse responsive logic.",
            solution: "We implemented a 'Motion-First' design philosophy, where every interaction provides meaningful feedback. A deep research phase led to a custom component library built for speed and visual clarity.",
            results: [
                { label: "Mobile Conversions", value: "+120%", sub: "Post-launch lift" },
                { label: "Load Perceptibility", value: "-40%", sub: "Faster perceived speed" },
                { label: "Accessibility", value: "WCAG 2.1", sub: "Grade AA compliance" }
            ],
            strategy: [
                { phase: "01", title: "Empathy Mapping", detail: "Deep-diving into user pain points and shopping behavior patterns." },
                { phase: "02", title: "Motion Systems", detail: "Defining a global animation language for transitions and feedback." },
                { phase: "03", title: "Component Forge", detail: "Building a scalable, high-fidelity design system in Figma." },
                { phase: "04", title: "Usability Stress", detail: "Iterative testing with real users to refine the interactive mesh." }
            ],
            tech: ["Figma", "Adobe After Effects", "Spline 3D", "React", "CSS Motion"],
            testimonial: {
                quote: "The site doesn't just look better; it feels alive. Our customers are spending 3X more time engaging with the content.",
                author: "Julian Reed",
                role: "Product Owner, Lumira retail"
            },
            mainImage: designProcess,
            archImage: designResearch,
            uiImage: designComponents
        },
        'ai-chatbot-agents': {
            title: "NeuralSupport Agent v4",
            category: "AI Chatbot Agents",
            client: "NexGen Support Systems",
            duration: "5 Months",
            impact: "92% Resolution Rate",
            description: "Deploying a sophisticated multi-language AI support agent capable of complex intent classification and real-time sentiment analysis.",
            challenge: "The client was losing 30% of their customer base due to slow response times and inaccurate support documentation retrieval. Legacy chatbots were failing to understand nuanced user queries.",
            solution: "We engineered a neural processing core using LLM fine-tuning on domain-specific data. Integrated a real-time sentiment monitoring HUD for human agents to intervene when necessary.",
            results: [
                { label: "Response Time", value: "< 2s", sub: "Average latency" },
                { label: "Cost Savings", value: "65%", sub: "Operational reduction" },
                { label: "Language Support", value: "45+", sub: "Native translation" }
            ],
            strategy: [
                { phase: "01", title: "NLP Fine-Tuning", detail: "Training the core model on specific industry terminology and historical logs." },
                { phase: "02", title: "Intent Mapping", detail: "Developing the logic mesh for complex multi-step user requests." },
                { phase: "03", title: "Sentiment Mesh", detail: "Deploying real-time emotional analysis for prioritized escalation." },
                { phase: "04", title: "Global Training", detail: "Scaling the agent's knowledge base across 45+ languages and dialects." }
            ],
            tech: ["Python", "TensorFlow", "OpenAI API", "Redis", "WebSockets"],
            testimonial: {
                quote: "The NeuralSupport agent has completely revolutionized our customer experience. It handles 80% of queries without any human intervention.",
                author: "David Chen",
                role: "VP of Customer Success"
            },
            mainImage: chatbotMain,
            archImage: chatbotPipeline,
            uiImage: chatbotSentiment
        },
        'ai-website-integration': {
            title: "Dynamic Commerce Engine",
            category: "AI Website Integration",
            client: "Global Retail Dynamics",
            duration: "4 Months",
            impact: "4.5X Engagement",
            description: "Transforming standard static websites into intelligent platforms that adapt content and layout in real-time based on visitor behavior and intent.",
            challenge: "Static product discovery paths were leading to high drop-off rates. Customers were seeing irrelevant content, resulting in wasted marketing spend and stagnant conversion rates.",
            solution: "We integrated a behavioral AI layer that tracks user clickstreams and dwell time to restructure product grids dynamically. A server-side personalization engine ensures sub-50ms latency for all AI-driven changes.",
            results: [
                { label: "Click-Through Rate", value: "+180%", sub: "On personalized modules" },
                { label: "Avg Session Duration", value: "8.5m", sub: "Up from 2.1m legacy" },
                { label: "Conversion Lift", value: "42%", sub: "Directly attributed to AI" }
            ],
            strategy: [
                { phase: "01", title: "Behavioral Mapping", detail: "Identifying high-friction nodes in the user journey and conversion funnels." },
                { phase: "02", title: "Personalization Logic", detail: "Developing the ruleset for real-time content tailoring and dynamic grid sorting." },
                { phase: "03", title: "API Orchestration", detail: "Integrating the AI model with the frontend via high-speed Edge functions." },
                { phase: "04", title: "Adaptive A/B Mesh", detail: "Continuous self-optimization of UI elements based on real-time performance data." }
            ],
            tech: ["Next.js", "Vercel Edge", "TensorFlow.js", "Redis", "Cloudinary AI"],
            testimonial: {
                quote: "The ability of the site to 'predict' what our customers want is uncanny. It's like having our best salesperson talk to every visitor simultaneously.",
                author: "Robert Vance",
                role: "Digital Strategy Lead"
            },
            mainImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
            archImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop",
            uiImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
        },
        'database-development': {
            title: "VaultCloud Storage Mesh",
            category: "Database Development",
            client: "Vault Systems Inc.",
            duration: "5 Months",
            impact: "Zero Data Loss",
            description: "Architecting a high-performance, distributed database mesh with multi-region redundancy and real-time synchronization for a global logistics firm.",
            challenge: "The client suffered from frequent write-conflicts and slow query resolution during peak hours. Their legacy SQL setup was struggling with the 50TB+ data ingestion rate.",
            solution: "We migrated the core to a hybrid PostgreSQL/Redis architecture with automated sharding. Implemented high-availability replicas across three regions with sub-20ms global synchronization.",
            results: [
                { label: "Query Resolution", value: "-85%", sub: "Faster execution time" },
                { label: "Storage Efficiency", value: "+40%", sub: "Via advanced compression" },
                { label: "System Uptime", value: "99.999%", sub: "True high availability" }
            ],
            strategy: [
                { phase: "01", title: "Load Profiling", detail: "Analyzing query patterns and identifying hot-nodes in the legacy mesh." },
                { phase: "02", title: "Schema Evolution", detail: "Redesigning the relational model for distributed horizontal scale." },
                { phase: "03", title: "Migration Mesh", detail: "Zero-downtime data transition using shadowed write protocols." },
                { phase: "04", title: "Hardening & Ops", detail: "Automating backup cycles and enabling continuous performance monitoring." }
            ],
            tech: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes"],
            testimonial: {
                quote: "The reliability of our data layer is now our biggest asset. We haven't had a single second of downtime since the migration.",
                author: "Thomas Miller",
                role: "Director of Infrastructure"
            },
            mainImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop", // Futuristic Server Room
            archImage: "https://images.unsplash.com/photo-1558494949-ef010bd361c1?q=80&w=2070&auto=format&fit=crop", // Data Network
            uiImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Data Visualization
            securityImage: securityImageFintech
        },
        'auto-cad-design': {
            title: "Precision Industrial Complex",
            category: "Auto CAD Design",
            client: "Global Infra-Core",
            duration: "8 Months",
            impact: "Zero Draft Errors",
            description: "Developing comprehensive 2D and 3D architectural blueprints for a 200,000 sq ft high-tech manufacturing facility with extreme precision requirements.",
            challenge: "The project involved overlapping layers of electrical, mechanical, and structural systems. Even a 5mm error in the initial drafts would lead to millions in construction rework.",
            solution: "We employed advanced 3D modeling and collision detection in AutoCAD to ensure all systems integrated seamlessly. The design included a modular expansion plan for future scalability.",
            results: [
                { label: "Drafting Accuracy", value: "100%", sub: "Zero field-rework cases" },
                { label: "Design Time", value: "-25%", sub: "Via template automation" },
                { label: "Planning Approval", value: "1st Pass", sub: "100% regulatory success" }
            ],
            strategy: [
                { phase: "01", title: "Space Optimization", detail: "Maximizing operational flow and safety zones within the 200k sq ft complex." },
                { phase: "02", title: "System Layering", detail: "Integrating HVAC, Power, and Structural meshes in a unified 3D workspace." },
                { phase: "03", title: "Collision Audit", detail: "Running automated error-detection cycles to find structural overlaps." },
                { phase: "04", title: "Detail Forge", detail: "Producing construction-ready blueprints with sub-millimeter precision." }
            ],
            tech: ["AutoCAD 3D", "Revit", "SolidWorks", "BIM Integration", "Civil 3D"],
            testimonial: {
                quote: "Aster's attention to detail is unparalleled. The transition from digital blueprints to physical construction was perfectly seamless.",
                author: "James Sterling",
                role: "Chief Architect, Infra-Core"
            },
            mainImage: "https://images.unsplash.com/photo-1503387762-5927b682b68c?q=80&w=2070&auto=format&fit=crop", // Masterpiece Blueprint
            archImage: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=2070&auto=format&fit=crop", // 3D Engineering Structure
            uiImage: "https://images.unsplash.com/photo-1581101736217-27917bc21325?q=80&w=2070&auto=format&fit=crop" // Professional Drafting HUD view
        },
        'mobile-app-development': {
            title: "Omni-Channel Fitness App",
            category: "Mobile App Development",
            client: "FitLife Systems",
            duration: "4 Months",
            impact: "1M+ Downloads",
            description: "Developing a highly engaging, cross-platform fitness application featuring real-time biometric tracking and social community features.",
            challenge: "High churn rate due to a slow, buggy legacy app. Users needed a seamless experience across iOS, Android, and wearable devices.",
            solution: "Architected a Flutter-based solution with a localized SQLite database for offline tracking and Firebase integration for real-time community engagement.",
            results: [
                { label: "User Retention", value: "+60%", sub: "Month-over-month" },
                { label: "Crash Free", value: "99.8%", sub: "Session stability" },
                { label: "App Store Rank", value: "#4", sub: "Health & Fitness Category" }
            ],
            strategy: [
                { phase: "01", title: "UX Research", detail: "Mapping user journeys to identify key engagement friction points." },
                { phase: "02", title: "Cross-Platform Build", detail: "Developing a unified codebase using Flutter for dual-platform parity." },
                { phase: "03", title: "Biometric Sync", detail: "Integrating wearable API protocols for real-time health telemetry." },
                { phase: "04", title: "Community Launch", detail: "Deploying the real-time social layer using Firebase Cloud Mesh." }
            ],
            tech: ["Flutter", "Firebase", "SQLite", "Google Cloud", "Dart"],
            testimonial: {
                quote: "The speed of delivery and the quality of the UI/UX was beyond our expectations. Our community engagement has never been higher.",
                author: "Marcus Thorne",
                role: "Founder, FitLife"
            },
            mainImage: mobileMain,
            archImage: mobileArch,
            uiImage: mobileWearable
        }
    };

    const study = studies[id] || studies['full-stack-development'];

    return (
        <div style={{ background: 'var(--bg-deep)', minHeight: '100vh', color: 'var(--text-primary)', paddingTop: '100px', position: 'relative', overflowX: 'hidden' }}>
            {/* Scroll Progress Bar */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: `${scrollProgress}%`,
                height: '4px',
                background: 'linear-gradient(to right, var(--primary), var(--secondary))',
                zIndex: 1000,
                transition: 'width 0.1s ease'
            }}></div>

            {/* Background Texture */}
            <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.5, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Header Section */}
                <div className="reveal-study" style={{ marginBottom: '6rem' }}>
                    <button onClick={() => navigate('/')} style={{ background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--text-secondary)', padding: '0.8rem 1.5rem', borderRadius: '100px', cursor: 'pointer', marginBottom: '3rem', fontSize: '0.75rem', fontWeight: '800', transition: '0.3s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--primary)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--glass-border)'}>
                        ← BACK TO CORE INTERFACE
                    </button>

                    <div className="study-header-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 350px', gap: '6rem', alignItems: 'end' }}>
                        <div>
                            <span style={{ color: 'var(--primary)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.4em', fontSize: '0.8rem', display: 'block', marginBottom: '1.5rem' }}>{study.category}</span>
                            <h1 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: '900', lineHeight: '0.9', letterSpacing: '-0.05em', marginBottom: '2.5rem' }}>{study.title}</h1>
                            <p style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '800px' }}>{study.description}</p>
                        </div>
                        <div className="card" style={{ padding: '2.5rem', background: 'var(--bg-card)', border: '1px solid var(--glass-border)', borderRadius: '32px' }}>
                            <div style={{ display: 'grid', gap: '2rem' }}>
                                <div>
                                    <label style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Metric Impact</label>
                                    <div style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: '900' }}>{study.impact}</div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '0.3rem', display: 'block' }}>Timeline</label>
                                        <div style={{ fontWeight: '700' }}>{study.duration}</div>
                                    </div>
                                    <div>
                                        <label style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '0.3rem', display: 'block' }}>Client</label>
                                        <div style={{ fontWeight: '700' }}>{study.client}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Hero Visual */}
                <div className="reveal-study" style={{ borderRadius: '48px', overflow: 'hidden', height: '650px', position: 'relative', border: '1px solid var(--glass-border)', marginBottom: '8rem', boxShadow: 'var(--shadow-premium)' }}>
                    <img src={study.mainImage} alt={study.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-deep), transparent)' }}></div>
                </div>

                {/* The Matrix: Challenge & Solution */}
                <div className="study-matrix-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', marginBottom: '12rem' }}>
                    <div className="reveal-study">
                        <h2 style={{ fontSize: '2.8rem', fontWeight: '900', marginBottom: '2.5rem' }}>The <span style={{ color: 'var(--accent)' }}>Challenge</span></h2>
                        <div style={{ paddingLeft: '2.5rem', borderLeft: '3px solid var(--accent)', fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            {study.challenge}
                        </div>
                    </div>
                    <div className="reveal-study">
                        <h2 style={{ fontSize: '2.8rem', fontWeight: '900', marginBottom: '2.5rem' }}>The <span style={{ color: 'var(--primary)' }}>Deployment</span></h2>
                        <div style={{ paddingLeft: '2.5rem', borderLeft: '3px solid var(--primary)', fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            {study.solution}
                        </div>
                    </div>
                </div>

                {/* Architecture Visual Section */}
                <div className="study-dual-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '8rem', alignItems: 'center', marginBottom: '12rem' }}>
                    <div className="reveal-study">
                        <div style={{ color: 'var(--primary)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.4em', fontSize: '0.7rem', marginBottom: '1.5rem' }}>System Infrastructure</div>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '2rem' }}>Architectural <span className="text-gradient">Integrity</span></h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            We deployed a high-availability mesh that eliminates single points of failure while maximizing data throughput. Every layer of the stack is optimized for low-latency interactions and enterprise-grade security.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
                            {study.results.map((res, i) => (
                                <div key={i}>
                                    <div style={{ fontSize: '2.2rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '0.3rem' }}>{res.value}</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-primary)' }}>{res.label}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{res.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="reveal-study" style={{ position: 'relative' }}>
                        <div style={{ borderRadius: '32px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-premium)' }}>
                            <img src={study.archImage} alt="Architecture" style={{ width: '100%', display: 'block' }} />
                        </div>
                        {/* Decorative HUD */}
                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', borderTop: '2px solid var(--primary)', borderRight: '2px solid var(--primary)', opacity: 0.3 }}></div>
                        <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '100px', height: '100px', borderBottom: '2px solid var(--primary)', borderLeft: '2px solid var(--primary)', opacity: 0.3 }}></div>
                    </div>
                </div>

                {/* Strategic Roadmap Section */}
                <div className="reveal-study" style={{ marginBottom: '12rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '900' }}>Execution <span className="text-gradient">Strategy</span></h2>
                        <p style={{ color: 'var(--text-tertiary)', marginTop: '1rem', fontSize: '1.1rem' }}>A phased approach to systemic transformation and deployment.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {study.strategy.map((item, i) => (
                            <div key={i} className="card" style={{ padding: '3rem 2rem', background: 'var(--bg-card)', border: '1px solid var(--glass-border)', borderRadius: '24px', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '2rem', fontWeight: '900', opacity: 0.05, fontFamily: 'serif' }}>{item.phase}</div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1.2rem' }}>{item.title}</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Interface Deep Dive Section */}
                <div className="study-reverse-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '10rem', alignItems: 'center', marginBottom: '12rem' }}>
                    <div className="reveal-study">
                        <div style={{ borderRadius: '32px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-premium)', transform: 'perspective(1000px) rotateY(-5deg)' }}>
                            <img src={study.uiImage} alt="UI Interface" style={{ width: '100%', display: 'block' }} />
                        </div>
                    </div>
                    <div className="reveal-study">
                        <div style={{ color: 'var(--accent)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.4em', fontSize: '0.7rem', marginBottom: '1.5rem' }}>User-Centric Logic</div>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '2rem' }}>Experience <span style={{ color: 'var(--accent)' }}>Design</span></h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                            We don't just build systems; we build experiences. The interface was engineered for maximum accessibility and visual hierarchy, ensuring users can navigate complex data layers with zero friction.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {study.tech.map((t, i) => (
                                <span key={i} style={{ padding: '0.8rem 1.8rem', background: 'var(--bg-card)', border: '1px solid var(--glass-border)', borderRadius: '12px', fontSize: '0.9rem', fontWeight: '700' }}>{t}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Security Hardening Section - New */}
                {study.securityImage && (
                    <div className="study-dual-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '8rem', alignItems: 'center', marginBottom: '12rem' }}>
                        <div className="reveal-study">
                            <div style={{ color: 'var(--primary)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.4em', fontSize: '0.7rem', marginBottom: '1.5rem' }}>Protocol Shield</div>
                            <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '2rem' }}>Security <span className="text-gradient">Hardening</span></h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                                For high-stakes fintech environments, security isn't an afterthought. We integrated bank-grade AES-256 encryption, multi-factor authentication meshes, and real-time intrusion detection systems to ensure total data integrity.
                            </p>
                            <div style={{ display: 'grid', gap: '1.5rem' }}>
                                {['Zero Trust Architecture', 'Real-time Threat Monitoring', 'AES-256 Data Encryption'].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>✓</div>
                                        <div style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{item}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="reveal-study">
                            <div style={{ borderRadius: '32px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow-premium)', transform: 'perspective(1000px) rotateY(10deg)' }}>
                                <img src={study.securityImage} alt="Security Visual" style={{ width: '100%', display: 'block' }} />
                            </div>
                        </div>
                    </div>
                )}

                {/* Impact Statement / Testimonial */}
                <div className="reveal-study" style={{ marginBottom: '12rem', padding: '8rem 4rem', background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.03), rgba(147, 51, 234, 0.03))', borderRadius: '48px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
                    <div style={{ fontSize: '5rem', color: 'var(--primary)', opacity: 0.1, marginBottom: '-2rem', fontFamily: 'serif' }}>“</div>
                    <blockquote style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.3', maxWidth: '1000px', margin: '0 auto 3.5rem', letterSpacing: '-0.02em' }}>
                        {study.testimonial.quote}
                    </blockquote>
                    <cite style={{ fontStyle: 'normal' }}>
                        <div style={{ fontWeight: '900', fontSize: '1.2rem', color: 'var(--text-primary)' }}>{study.testimonial.author}</div>
                        <div style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '0.5rem' }}>{study.testimonial.role}</div>
                    </cite>
                </div>

                {/* Final CTA */}
                <div className="reveal-study" style={{ padding: '6rem', background: 'var(--bg-surface)', border: '1px solid var(--glass-border)', borderRadius: '48px', textAlign: 'center', marginBottom: '10rem' }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1.5rem' }}>Ready to Scale?</h2>
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>Our architectural team is ready to analyze your technical requirements and initiate a high-performance roadmap.</p>
                    <button onClick={() => navigate('/#contact')} className="btn btn-primary" style={{ padding: '1.5rem 5rem', fontSize: '1.1rem' }}>INITIATE CONSULTATION</button>
                </div>
            </div>

            <style>{`
                .reveal-study { opacity: 0; transform: translateY(40px); transition: all 1s cubic-bezier(0.23, 1, 0.32, 1); }
                .reveal-study.active { opacity: 1; transform: translateY(0); }
                .text-gradient { background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                
                @media (max-width: 1024px) {
                    .study-header-grid, .study-matrix-grid, .study-dual-grid, .study-reverse-grid {
                        grid-template-columns: 1fr !important;
                        gap: 4rem !important;
                        margin-bottom: 6rem !important;
                    }
                    .study-reverse-grid > div:first-child { order: 2; }
                    .study-reverse-grid > div:last-child { order: 1; }
                    h1 { font-size: 3.5rem !important; }
                }
                @media (max-width: 768px) {
                    .container { padding: 0 24px; }
                    blockquote { font-size: 1.5rem !important; }
                    .metric-card { padding: 1.5rem !important; }
                }
            `}</style>
        </div>
    );
};

export default CaseStudy;
