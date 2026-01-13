"use client";

import { useEffect, useRef, useState } from "react";

export default function AudioVisualizer() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const animationRef = useRef<number>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);

    const startAnalysis = async () => {
        setError(null);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            const analyser = audioContext.createAnalyser();
            const source = audioContext.createMediaStreamSource(stream);

            source.connect(analyser);

            // Configuration for the visualizer
            analyser.fftSize = 2048;

            audioContextRef.current = audioContext;
            analyserRef.current = analyser;
            sourceRef.current = source;
            setIsAnalyzing(true);

            draw();
        } catch (err) {
            console.error("Error accessing microphone:", err);
            setError("Microphone access denied or not available.");
        }
    };

    const stopAnalysis = () => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }
        if (sourceRef.current) {
            sourceRef.current.disconnect();
        }
        if (audioContextRef.current) {
            audioContextRef.current.close();
        }
        setIsAnalyzing(false);
    };

    const draw = () => {
        if (!canvasRef.current || !analyserRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const bufferLength = analyserRef.current.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const renderFrame = () => {
            animationRef.current = requestAnimationFrame(renderFrame);
            analyserRef.current!.getByteTimeDomainData(dataArray);

            // Clear with a slight fade effect for trails (optional, keeping it clean for now)
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw styling
            ctx.lineWidth = 2;
            ctx.strokeStyle = "var(--color-science-cyan)"; // Using our global variable
            ctx.shadowBlur = 10;
            ctx.shadowColor = "var(--color-science-cyan)";

            ctx.beginPath();

            const sliceWidth = (canvas.width * 1.0) / bufferLength;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                const v = dataArray[i] / 128.0;
                const y = (v * canvas.height) / 2;

                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }

                x += sliceWidth;
            }

            ctx.lineTo(canvas.width, canvas.height / 2);
            ctx.stroke();
        };

        renderFrame();
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            stopAnalysis();
        };
    }, []);

    return (
        <div className="w-full flex flex-col items-center gap-6">
            <div className="relative w-full max-w-lg aspect-video rounded-sm border border-[var(--color-ink)]/20 bg-[var(--color-ink)]/5 overflow-hidden group hover:border-[var(--color-science-cyan)] transition-colors duration-500">

                {/* Holographic Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,240,255,0.05)_50%)] bg-[length:100%_4px] pointer-events-none"></div>

                {/* Label */}
                <div className="absolute top-2 left-2 text-[var(--color-ink)]/50 font-mono text-xs z-10">
                    SPECTRAL ANALYSIS UNIT // {isAnalyzing ? "ACTIVE" : "STANDBY"}
                </div>

                {/* The Canvas */}
                <canvas
                    ref={canvasRef}
                    width={800}
                    height={450}
                    className="w-full h-full relative z-0 opacity-90"
                />

                {/* Status Indicator */}
                {!isAnalyzing && !error && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-[var(--color-science-cyan)]/50 font-mono text-sm animate-pulse">
                            WAITING FOR INPUT...
                        </div>
                    </div>
                )}

                {error && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 p-4 text-center">
                        <p className="text-red-400 font-mono text-sm">{error}</p>
                    </div>
                )}
            </div>

            {/* Control Button */}
            {!isAnalyzing ? (
                <button
                    onClick={startAnalysis}
                    className="group relative px-8 py-4 bg-[var(--color-parchment)] rounded-full border border-[var(--color-ink)] font-mono text-sm tracking-widest uppercase hover:text-[var(--color-science-cyan)] hover:border-[var(--color-science-cyan)] transition-all duration-300 flex items-center gap-3 cursor-pointer"
                >
                    <span className="absolute inset-0 rounded-full border border-[var(--color-science-cyan)] scale-110 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>
                    <span className="w-2 h-2 rounded-full bg-[var(--color-science-cyan)] animate-pulse"></span>
                    Initialize Sensor
                </button>
            ) : (
                <button
                    onClick={stopAnalysis}
                    className="px-6 py-2 border border-red-900/30 text-red-900/50 hover:bg-red-900/10 rounded-full font-mono text-xs transition-colors"
                >
                    Terminate Sequence
                </button>
            )}
        </div>
    );
}
