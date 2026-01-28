import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (isHidden) setIsHidden(false);
        };

        const handleMouseEnter = () => setIsHidden(false);
        const handleMouseLeave = () => setIsHidden(true);

        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        // Add hover listeners to all interactive elements
        const updateHoverListeners = () => {
            const interactiveElements = document.querySelectorAll('a, button, input, textarea, .blueprint-card, .glass-card');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', handleHoverStart);
                el.addEventListener('mouseleave', handleHoverEnd);
            });
        };

        updateHoverListeners();

        // MutationObserver to handle dynamically added elements
        const observer = new MutationObserver(updateHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            observer.disconnect();
        };
    }, [isHidden]);

    if (isHidden) return null;

    return (
        <>
            {/* Main Dot */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '8px',
                height: '8px',
                background: 'var(--primary)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9999,
                transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
                transition: 'transform 0.1s ease-out',
                boxShadow: '0 0 10px var(--primary)'
            }} />

            {/* Trailing Ring */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: isHovering ? '60px' : '40px',
                height: isHovering ? '60px' : '40px',
                border: `1px solid ${isHovering ? 'var(--primary)' : 'rgba(45, 212, 191, 0.3)'}`,
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9998,
                transform: `translate3d(${position.x - (isHovering ? 30 : 20)}px, ${position.y - (isHovering ? 30 : 20)}px, 0)`,
                transition: 'transform 0.2s ease-out, width 0.3s ease, height 0.3s ease, border 0.3s ease',
                background: isHovering ? 'rgba(45, 212, 191, 0.05)' : 'transparent',
                backdropFilter: isHovering ? 'blur(2px)' : 'none'
            }} />

            <style>{`
                body {
                    cursor: none !important;
                }
                a, button, input, textarea, [role="button"] {
                    cursor: none !important;
                }
            `}</style>
        </>
    );
};

export default CustomCursor;
