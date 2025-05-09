'use client';
import React from 'react';

function Video() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

        </div>
    );
}

export default Video;
