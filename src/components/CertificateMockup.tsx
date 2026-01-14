"use client";

export default function CertificateMockup() {
    return (
        <div className="relative w-full max-w-2xl mx-auto aspect-[1/1.4] md:aspect-[1.4/1] bg-white border-[8px] border-double border-[var(--color-ink)]/20 p-8 shadow-2xl rotate-1 transition-transform hover:rotate-0 duration-500">

            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
                <div className="w-[500px] h-[500px] rounded-full border-[20px] border-[var(--color-ink)] flex items-center justify-center text-[var(--color-ink)] text-9xl font-serif font-bold rotate-[-15deg]">
                    ORTIZ
                </div>
            </div>

            {/* Content Layout */}
            <div className="relative z-10 h-full flex flex-col md:flex-row gap-8">

                {/* Left: Stats & Radar */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="relative w-48 h-48 md:w-56 md:h-56">
                        {/* SVG Radar Chart Mockup */}
                        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                            {/* Grid */}
                            <polygon points="50,5 95,27 95,73 50,95 5,73 5,27" fill="none" stroke="var(--color-ink)" strokeWidth="0.5" strokeOpacity="0.2" />
                            <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" fill="none" stroke="var(--color-ink)" strokeWidth="0.5" strokeOpacity="0.2" />

                            {/* The Stats Shape */}
                            <polygon points="50,10 90,30 85,75 50,85 15,60 15,30" fill="var(--color-science-cyan)" fillOpacity="0.2" stroke="var(--color-science-cyan)" strokeWidth="1.5" className="drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">
                                <animate attributeName="points" dur="4s" repeatCount="indefinite"
                                    values="50,10 90,30 85,75 50,85 15,60 15,30; 50,15 85,35 80,70 50,80 20,65 20,35; 50,10 90,30 85,75 50,85 15,60 15,30" />
                            </polygon>
                        </svg>

                        {/* Labels */}
                        <span className="absolute top-[-20px] left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widest text-[var(--color-ink)]">HARMONICS</span>
                        <span className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widest text-[var(--color-ink)]">DYNAMICS</span>
                        <span className="absolute top-1/4 left-[-30px] text-[10px] font-mono tracking-widest text-[var(--color-ink)]">PITCH</span>
                        <span className="absolute top-1/4 right-[-30px] text-[10px] font-mono tracking-widest text-[var(--color-ink)]">RANGE</span>
                    </div>
                </div>

                {/* Right: Text & Skill */}
                <div className="flex-1 flex flex-col justify-between py-4 text-center md:text-left">
                    <div>
                        <div className="text-xs font-mono tracking-[0.2em] text-[var(--color-ink)]/60 mb-2">SAMPLE ANALYSIS REPORT</div>
                        <h2 className="text-3xl font-serif font-bold text-[var(--color-ink)] mb-1">Singer of the Spirit Forest</h2>
                        <h3 className="text-sm font-serif italic text-[var(--color-magic-gold)] mb-6">Unique Skill / 精霊の森の歌い手</h3>

                        <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed font-serif">
                            Detected frequencies of 285Hz, 528Hz, and 741Hz suggest a rare restorative vocal quality. This voice possesses the characteristics of ancient healing rites, capable of stabilizing the listener's emotional state.
                        </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[var(--color-ink)]/10 flex justify-between items-end">
                        <div className="text-left">
                            <div className="text-[10px] uppercase text-[var(--color-ink)]/40">Authorized by</div>
                            <div className="font-script text-xl text-[var(--color-ink)]">Ortiz Records</div>
                        </div>
                        <div className="w-16 h-16 rounded-full border-2 border-[var(--color-magic-gold)] flex items-center justify-center">
                            <span className="text-[var(--color-magic-gold)] font-bold text-xl">S</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
