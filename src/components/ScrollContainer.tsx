"use client";

import { ReactNode } from "react";

interface ScrollContainerProps {
    children: ReactNode;
    title?: string;
}

export default function ScrollContainer({ children, title = "ORTIZ RECORDS" }: ScrollContainerProps) {
    return (
        <div className="relative z-10 flex min-h-screen w-full items-center justify-center p-4">
            {/* The Scroll Body */}
            <div
                className="relative w-full max-w-4xl rotate-0 scale-100 transition-all duration-700 ease-out"
                style={{ animation: 'float 6s ease-in-out infinite' }}
            >
                {/* Top Roll */}
                <div className="h-12 w-full rounded-full bg-[var(--color-parchment)] shadow-lg shine-overlay border-b-4 border-[var(--color-ink)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)]/20 via-transparent to-[var(--color-ink)]/20"></div>
                </div>

                {/* Main Paper Area */}
                <div className="relative min-h-[600px] w-[95%] mx-auto bg-[var(--color-parchment)] px-8 py-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] border-x-2 border-[var(--color-ink)]/10">

                    {/* Sci-Fi Grid Overlay */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-10"
                        style={{
                            backgroundImage: `linear-gradient(var(--color-science-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--color-science-cyan) 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }}
                    />

                    {/* Header / Title */}
                    <div className="mb-12 text-center relative">
                        <h1 className="text-4xl first-letter:text-6xl md:text-6xl md:first-letter:text-8xl font-serif font-bold text-[var(--color-ink)] tracking-widest uppercase" style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}>
                            {title}
                        </h1>
                        <div className="mt-2 h-1 w-32 mx-auto bg-[var(--color-ink)] flex items-center justify-center">
                            <div className="h-2 w-2 bg-[var(--color-science-cyan)] rounded-full animate-pulse shadow-[0_0_10px_var(--color-science-cyan)]"></div>
                        </div>
                        <p className="mt-4 text-[var(--color-ink)]/70 font-mono text-sm tracking-[0.3em]">
                            SENSATION SCIENCE
                        </p>
                    </div>

                    {/* Content Area */}
                    <div className="relative z-10 text-[var(--color-ink)]">
                        {children}
                    </div>

                    {/* Footer Markings / Decor */}
                    <div className="absolute bottom-4 right-4 opacity-30">
                        <div className="border border-[var(--color-ink)] p-2 rounded-full h-16 w-16 flex items-center justify-center rotate-12">
                            <span className="font-mono text-xs">EST.2025</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Roll */}
                <div className="h-12 w-full rounded-full bg-[var(--color-parchment)] shadow-lg shine-overlay border-t-4 border-[var(--color-ink)] relative overflow-hidden mt-[-1px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)]/20 via-transparent to-[var(--color-ink)]/20"></div>
                </div>
            </div>
        </div>
    );
}
