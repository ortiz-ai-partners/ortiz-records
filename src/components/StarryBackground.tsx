"use client";

import { useEffect, useState } from "react";

interface Star {
    id: number;
    top: string;
    left: string;
    size: string;
    animationDelay: string;
    animationDuration: string;
}

export default function StarryBackground() {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        // Generate random stars on client side to avoid hydration mismatch
        const count = 100;
        const newStars: Star[] = Array.from({ length: count }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 3 + 1}px`, // 1px to 4px
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
        }));
        setStars(newStars);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[var(--color-deep-space)]">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-[var(--color-star-white)] shadow-[0_0_4px_var(--color-star-white)]"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        animation: `twinkle ${star.animationDuration} ease-in-out infinite`,
                        animationDelay: star.animationDelay,
                        opacity: 0.7,
                    }}
                />
            ))}
            <div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-deep-space)] opacity-60"
                style={{ pointerEvents: 'none' }}
            />
        </div>
    );
}
