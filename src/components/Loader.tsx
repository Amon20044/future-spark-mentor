"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const AlwaysShowLoaderAnimation = () => {
  const [show, setShow] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const handsRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRefs = useRef<SVGPathElement[]>([]);

  // Reset path refs array
  pathRefs.current = [];

  // Add to the refs array
  const addToPathRefs = (el: SVGPathElement | null) => {
    if (el && !pathRefs.current.includes(el)) {
      pathRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Fixed animation duration - always shows for 3 seconds
    const totalDuration = 3; // in seconds
    
    // Create animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out the entire loader
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.8,
          onComplete: () => setShow(false)
        });
      }
    });

    // SVG path animation
    if (pathRefs.current.length) {
      pathRefs.current.forEach(path => {
        gsap.set(path, { 
          strokeDasharray: path.getTotalLength(),
          strokeDashoffset: path.getTotalLength(),
          opacity: 1
        });
      });
      
      tl.to(pathRefs.current, {
        strokeDashoffset: 0,
        duration: totalDuration * 0.4, // 40% of total time
        stagger: 0.1,
        ease: "power2.inOut"
      });
    }

    // Initial state for text
    gsap.set(textRef.current, { opacity: 0, y: 20 });

    // Animate text after hands
    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: totalDuration * 0.25, // 25% of total time
      ease: "power3.out"
    })
    
    // Add a gentle glow effect
    .to(handsRef.current, {
      filter: "drop-shadow(0 0 8px rgba(255, 215, 0, 0.7))",
      duration: totalDuration * 0.2, // 20% of total time
      repeat: 1,
      yoyo: true,
      ease: "power2.inOut"
    }, "-=0.4")
    
    // Final subtle animation
    .to(svgRef.current, {
      scale: 1.05,
      duration: totalDuration * 0.15, // 15% of total time
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut"
    }, "-=0.3");

  }, []);

  // If we shouldn't show the loader, return null
  if (!show) return null;

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
    >
      <div className="flex flex-col items-center space-y-8">
        <div 
          ref={handsRef} 
          className="w-40 h-40"
        >
          <svg 
            ref={svgRef}
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Left hand */}
            <path
              ref={addToPathRefs}
              d="M35,50 C35,42 38,35 45,30 C48,28 50,30 50,32 L50,65"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0"
            />
            
            {/* Right hand */}
            <path
              ref={addToPathRefs}
              d="M65,50 C65,42 62,35 55,30 C52,28 50,30 50,32 L50,65"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0"
            />
            
            {/* Palm base */}
            <path
              ref={addToPathRefs}
              d="M35,50 C35,58 40,65 50,65 C60,65 65,58 65,50"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0"
            />
          </svg>
        </div>
        <h1 
          ref={textRef}
          className="text-4xl font-light text-center text-amber-700"
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}
        >
          Jai Jinendra
        </h1>
      </div>
    </div>
  );
};

export default AlwaysShowLoaderAnimation;