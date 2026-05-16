import React, { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorRef = useRef(null);
  const positionRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });
  const requestRef = useRef();

  useEffect(() => {
    // Check if device is touch or small screen
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(mobile);
      if (mobile) {
        document.body.style.cursor = 'auto';
        document.documentElement.style.cursor = 'auto';
        const style = document.getElementById('cursor-hide-style');
        if (style) style.remove();
      } else {
        // Hide cursors on all elements globally, except when mobile
        if (!document.getElementById('cursor-hide-style')) {
          const style = document.createElement('style');
          style.id = 'cursor-hide-style';
          style.innerHTML = `
            * { cursor: none !important; }
          `;
          document.head.appendChild(style);
        }
      }
      return mobile;
    };

    const mobile = checkMobile();
    window.addEventListener('resize', checkMobile);

    if (mobile) return;

    const onMouseMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const interactiveSelectors = 'a, button, input, select, textarea, [role="button"], [tabindex]:not([tabindex="-1"])';

    const onMouseOver = (e) => {
      if (e.target.closest(interactiveSelectors)) {
        setIsHovering(true);
      }
    };

    const onMouseOut = (e) => {
      if (e.target.closest(interactiveSelectors)) {
        setIsHovering(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const updatePosition = () => {
      // Smooth interpolation
      positionRef.current.x = lerp(positionRef.current.x, targetRef.current.x, 0.35);
      positionRef.current.y = lerp(positionRef.current.y, targetRef.current.y, 0.35);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(updatePosition);
    };

    requestRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      
      const style = document.getElementById('cursor-hide-style');
      if (style) style.remove();
      document.body.style.cursor = 'auto';
      document.documentElement.style.cursor = 'auto';
    };
  }, []);

  if (isMobile) return null;

  // Crosshair variables
  const gap = isHovering ? 6 : 4;
  const length = isHovering ? 6 : 8;
  const thickness = 2;

  const lineStyle = {
    position: 'absolute',
    background: 'linear-gradient(135deg, rgba(124,106,247,0.95) 0%, rgba(224,95,142,0.95) 100%)',
    boxShadow: isHovering 
      ? '0 0 12px rgba(124,106,247,0.8), 0 0 18px rgba(224,95,142,0.6)' 
      : '0 0 6px rgba(124,106,247,0.5)',
    transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    borderRadius: '1px'
  };

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        pointerEvents: 'none',
        zIndex: 999999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          transform: `scale(${isHovering ? 1.2 : 1}) rotate(${isHovering ? '45deg' : '0deg'})`,
          transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Top */}
        <div style={{ ...lineStyle, width: thickness, height: length, top: -(gap + length), left: -thickness / 2 }} />
        {/* Bottom */}
        <div style={{ ...lineStyle, width: thickness, height: length, top: gap, left: -thickness / 2 }} />
        {/* Left */}
        <div style={{ ...lineStyle, width: length, height: thickness, left: -(gap + length), top: -thickness / 2 }} />
        {/* Right */}
        <div style={{ ...lineStyle, width: length, height: thickness, left: gap, top: -thickness / 2 }} />
        
        {/* Center dot */}
        <div style={{
          position: 'absolute',
          width: thickness,
          height: thickness,
          background: 'rgba(255,255,255,0.9)',
          borderRadius: '50%',
          top: -thickness / 2,
          left: -thickness / 2,
          boxShadow: isHovering ? '0 0 8px rgba(255,255,255,0.8)' : 'none',
          opacity: isHovering ? 0 : 1,
          transition: 'opacity 0.2s ease',
        }} />
      </div>
    </div>
  );
}
