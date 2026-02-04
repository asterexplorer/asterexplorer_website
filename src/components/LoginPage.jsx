import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { User, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate login delay
        setTimeout(() => {
            setLoading(false);
            // innovative redirection or error handling could go here
            console.log("Login attempt:", { email });
            alert("Sovereign Access: Authentication Protocol Simulated.");
            navigate('/');
        }, 1500);
    };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg-deep)', position: 'relative', overflow: 'hidden' }}>
            <Navbar />

            <div className="container" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '80px'
            }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        width: '100%',
                        maxWidth: '420px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '24px',
                        padding: '40px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                        position: 'relative'
                    }}
                >
                    {/* Decorative Elements */}
                    <div style={{
                        position: 'absolute',
                        top: '-1px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '120px',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, var(--primary), transparent)'
                    }} />

                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '16px',
                            background: 'rgba(0, 242, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 16px'
                        }}>
                            <ShieldCheck size={28} color="var(--primary)" />
                        </div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '8px' }}>Sovereign Login</h2>
                        <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>Enter your neural identity credentials.</p>
                    </div>

                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Access ID / Email
                            </label>
                            <div style={{ position: 'relative' }}>
                                <User size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="user@aster.tech"
                                    style={{
                                        width: '100%',
                                        padding: '12px 16px 12px 48px',
                                        background: 'rgba(0,0,0,0.2)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: '12px',
                                        color: 'white',
                                        fontSize: '0.95rem',
                                        outline: 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                                />
                            </div>
                        </div>

                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <label style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    Security Key
                                </label>
                                <a href="#" style={{ fontSize: '0.75rem', color: 'var(--primary)', textDecoration: 'none' }}>Lost key?</a>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <Lock size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    style={{
                                        width: '100%',
                                        padding: '12px 16px 12px 48px',
                                        background: 'rgba(0,0,0,0.2)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: '12px',
                                        color: 'white',
                                        fontSize: '0.95rem',
                                        outline: 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                marginTop: '8px',
                                padding: '14px',
                                background: 'var(--primary)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '12px',
                                fontSize: '0.9rem',
                                fontWeight: 900,
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                opacity: loading ? 0.7 : 1,
                                boxShadow: '0 0 20px rgba(0, 242, 255, 0.3)'
                            }}
                        >
                            {loading ? 'Authenticating...' : (
                                <>Initiate Session <ArrowRight size={18} /></>
                            )}
                        </button>
                    </form>

                    <div style={{ marginTop: '32px', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                        Request access? <Link to="/" style={{ color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'none' }}>Contact Admin</Link>
                    </div>

                    {/* Footer Status */}
                    <div style={{
                        marginTop: '32px',
                        borderTop: '1px solid var(--glass-border)',
                        paddingTop: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div style={{ display: 'flex', gap: '4px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', opacity: 0.5 }}></div>
                        </div>
                        <span style={{ fontSize: '0.65rem', fontWeight: 900, color: 'var(--text-tertiary)', letterSpacing: '2px' }}>SECURE CONNECTION</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LoginPage;
