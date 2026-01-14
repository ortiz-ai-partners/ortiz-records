import StarryBackground from "@/components/StarryBackground";
import ScrollContainer from "@/components/ScrollContainer";
import AudioVisualizer from "@/components/AudioVisualizer";
import ServiceCard from "@/components/ServiceCard";
import CertificateMockup from "@/components/CertificateMockup";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden font-sans">
      <StarryBackground />

      <ScrollContainer>
        <div className="flex flex-col gap-20 items-center pb-20">

          {/* --- HERO SECTION --- */}
          <section className="flex flex-col gap-8 items-center w-full">
            <div className="max-w-xl text-center leading-loose font-serif">
              <p className="text-xl mb-2 text-[var(--color-ink)]">
                The Archive of Sensations
              </p>
              <h2 className="text-sm font-bold opacity-60 tracking-[0.2em] uppercase text-[var(--color-ink)]">
                感覚を、科学する
              </h2>
            </div>

            {/* Visualizer Hook */}
            <AudioVisualizer />

            <p className="text-xs font-mono text-[var(--color-ink)]/60 text-center max-w-md">
              Speak into the void. See your voice transformed into data. <br />
              This is the beginning of your analysis.
            </p>
          </section>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-ink)]/20 to-transparent"></div>

          {/* --- CONCEPT SECTION --- */}
          <section className="max-w-2xl text-center space-y-6">
            <h2 className="text-3xl font-serif font-bold text-[var(--color-ink)]">
              Science x Fantasy
            </h2>
            <p className="text-[var(--color-ink)]/80 leading-relaxed font-serif">
              Ortiz Records is a dedicated analysis service for streamers, Vtubers, and vocalists.
              We don't just measure pitch; we quantify charisma.
              We analyze the <strong>harmonics</strong> of your soul and map them to <strong>fantasy skills</strong>.
            </p>
          </section>

          {/* --- SERVICE SECTION --- */}
          <section className="w-full max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-serif font-bold text-[var(--color-ink)] mb-2">Service Menu</h2>
              <p className="text-sm text-[var(--color-science-cyan)] font-mono">⚠️ BETA PHASE DISCOUNTS ACTIVE</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard
                title="Voice Diagnosis"
                priceBeta="¥1,000"
                priceRegular="¥1,500"
                features={["A cappella Analysis (1 min)", "Vocal Range & Pitch", "Harmonic Structure Check"]}
              />
              <ServiceCard
                title="Song Diagnosis"
                priceBeta="¥1,500"
                priceRegular="¥2,000"
                features={["Full Song Analysis", "Expression Dynamics", "Solfeggio Frequencies"]}
                isPremium={true}
              />
              <ServiceCard
                title="Pair Diagnosis"
                priceBeta="¥2,300"
                priceRegular="¥3,000"
                features={["Voice + Song Combo", "Detailed Comparison", "Best Value for Beginners"]}
              />
            </div>
          </section>

          {/* --- SKILL SYSTEM SECTION --- */}
          <section className="w-full max-w-3xl bg-[var(--color-ink)]/5 p-8 rounded-lg border border-[var(--color-ink)]/10">
            <h2 className="text-2xl font-serif font-bold text-[var(--color-ink)] mb-6 text-center">
              The Skill System
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-2">🛡️</div>
                <h3 className="font-bold text-[var(--color-ink)]">Common</h3>
                <p className="text-xs text-[var(--color-ink)]/60 mt-2">Standard detection (60-85%). Solid foundations.</p>
              </div>
              <div>
                <div className="text-4xl mb-2">✨</div>
                <h3 className="font-bold text-[var(--color-ink)]">Gifted</h3>
                <p className="text-xs text-[var(--color-ink)]/60 mt-2">High resonance (&gt;85%). A rare talent.</p>
              </div>
              <div>
                <div className="text-4xl mb-2">🔮</div>
                <h3 className="font-bold text-[var(--color-magic-gold)]">Unique</h3>
                <p className="text-xs text-[var(--color-ink)]/60 mt-2">Miraculous combinations. Only 5% probability.</p>
              </div>
            </div>
          </section>

          {/* --- CERTIFICATE PREVIEW --- */}
          <section className="w-full flex flex-col items-center gap-8">
            <div className="text-center">
              <h2 className="text-2xl font-serif font-bold text-[var(--color-ink)]">Proof of Existence</h2>
              <p className="text-sm text-[var(--color-ink)]/60 mt-2 font-mono">YOUR OFFICIAL ANALYSIS CERTIFICATE</p>
            </div>
            <CertificateMockup />
          </section>

          {/* --- FOOTER --- */}
          <section className="text-center pt-12 border-t border-[var(--color-ink)]/10 w-full">
            <p className="font-mono text-sm text-[var(--color-ink)]/50 tracking-widest mb-4">
              COMING SOON TO MINECRAFT
            </p>
            <a
              href="https://twitter.com/your_twitter"
              target="_blank"
              className="inline-block px-6 py-2 bg-[var(--color-ink)] text-[var(--color-parchment)] rounded-full text-xs font-bold hover:bg-[var(--color-science-cyan)] hover:text-[var(--color-ink)] transition-colors"
              rel="noreferrer"
            >
              Follow for Updates
            </a>
          </section>

        </div>
      </ScrollContainer>
    </main>
  );
}
