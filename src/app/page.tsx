import StarryBackground from "@/components/StarryBackground";
import ScrollContainer from "@/components/ScrollContainer";
import AudioVisualizer from "@/components/AudioVisualizer";
import Link from "next/link";

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
              夜空に向かって、語りかけてください。<br />
              あなたの声が、光とデータへと変わります。
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
              オルティーズAIレコードは、配信者・Vtuber・ヴォーカリストのための<br className="hidden md:inline" />
              専門的なAI音声分析サービスです。<br /><br />
              私たちは単に音程を測るだけではありません。<br />
              あなたの<strong>「カリスマ性」</strong>を数値化し、<br />
              魂の<strong>倍音（ハーモニクス）</strong>を解析して、<br />
              それを<strong>異世界スキル</strong>として具現化します。
            </p>
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
                <p className="text-xs text-[var(--color-ink)]/60 mt-2">標準的な検出 (60-85%)。揺るぎない基礎能力。</p>
              </div>
              <div>
                <div className="text-4xl mb-2">✨</div>
                <h3 className="font-bold text-[var(--color-ink)]">Gifted</h3>
                <p className="text-xs text-[var(--color-ink)]/60 mt-2">高共鳴 (&gt;85%)。選ばれし天賦の才。</p>
              </div>
              <div>
                <div className="text-4xl mb-2">🔮</div>
                <h3 className="font-bold text-[var(--color-magic-gold)]">Unique</h3>
                <p className="text-xs text-[var(--color-ink)]/60 mt-2">奇跡的な組み合わせ。出現率わずか5%。</p>
              </div>
            </div>

            {/* Learn More Link */}
            <div className="mt-8 text-center">
              <Link
                href="/pro"
                className="text-sm text-[var(--color-science-cyan)] hover:underline font-mono"
              >
                本格的な解析について詳しく →
              </Link>
            </div>
          </section>

          {/* --- RECOMMENDED GEAR (Affiliate) --- */}
          <section className="w-full max-w-3xl">
            <h2 className="text-2xl font-serif font-bold text-[var(--color-ink)] mb-6 text-center">
              Recommended Gear
            </h2>
            <p className="text-center text-[var(--color-ink)]/60 text-sm mb-8">
              より良い声を届けるための、おすすめ機材
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Placeholder Affiliate Cards */}
              <div className="p-6 border border-[var(--color-ink)]/10 rounded-lg bg-white/30 hover:bg-white/50 transition-colors">
                <div className="text-3xl mb-3">🎙️</div>
                <h3 className="font-bold text-[var(--color-ink)] mb-2">配信用マイク</h3>
                <p className="text-xs text-[var(--color-ink)]/60">クリアな声を届けるためのコンデンサーマイク</p>
                <p className="text-xs text-[var(--color-ink)]/40 mt-4 font-mono">[準備中]</p>
              </div>
              <div className="p-6 border border-[var(--color-ink)]/10 rounded-lg bg-white/30 hover:bg-white/50 transition-colors">
                <div className="text-3xl mb-3">🎧</div>
                <h3 className="font-bold text-[var(--color-ink)] mb-2">モニターヘッドホン</h3>
                <p className="text-xs text-[var(--color-ink)]/60">自分の声を正確に聴くためのスタジオヘッドホン</p>
                <p className="text-xs text-[var(--color-ink)]/40 mt-4 font-mono">[準備中]</p>
              </div>
            </div>
          </section>

          {/* --- FOOTER --- */}
          <section className="text-center pt-12 border-t border-[var(--color-ink)]/10 w-full">
            <p className="font-mono text-sm text-[var(--color-ink)]/50 tracking-widest mb-4">
              COMING SOON
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
