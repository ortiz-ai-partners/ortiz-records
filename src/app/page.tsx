import StarryBackground from "@/components/StarryBackground";
import ScrollContainer from "@/components/ScrollContainer";
import AudioVisualizer from "@/components/AudioVisualizer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden font-sans">
      <StarryBackground />

      <ScrollContainer>
        <div className="flex flex-col gap-12 items-center">

          {/* Introduction Text */}
          <div className="max-w-xl text-center leading-loose font-serif text-lg">
            <p className="mb-4">
              The archive of sensations. Where frequency meets fantasy.
            </p>
            <p className="italic text-sm opacity-80">
              感覚を、科学する。
            </p>
          </div>

          {/* Real-time Audio Visualizer */}
          <AudioVisualizer />

        </div>
      </ScrollContainer>
    </main>
  );
}
