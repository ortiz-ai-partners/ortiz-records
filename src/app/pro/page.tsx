import StarryBackground from "@/components/StarryBackground";
import ScrollContainer from "@/components/ScrollContainer";
import ServiceCard from "@/components/ServiceCard";
import CertificateMockup from "@/components/CertificateMockup";
import Link from "next/link";

export default function ProPage() {
    return (
        <main className="min-h-screen relative overflow-hidden font-sans">
            <StarryBackground />

            <ScrollContainer title="PRO ANALYSIS">
                <div className="flex flex-col gap-20 items-center pb-20">

                    {/* Back Link */}
                    <div className="w-full">
                        <Link href="/" className="text-sm text-[var(--color-science-cyan)] hover:underline font-mono">
                            ← トップに戻る
                        </Link>
                    </div>

                    {/* --- INTRO --- */}
                    <section className="max-w-2xl text-center space-y-4">
                        <h2 className="text-3xl font-serif font-bold text-[var(--color-ink)]">
                            本格的なAI音声解析
                        </h2>
                        <p className="text-[var(--color-ink)]/80 leading-relaxed font-serif">
                            無料の波形表示では見えない、あなたの声の「本質」を解き明かします。<br />
                            AIが倍音構造・ソルフェジオ周波数・エネルギー変動を分析し、<br />
                            あなただけの「異世界スキル」を判定します。
                        </p>
                    </section>

                    {/* --- SERVICE SECTION --- */}
                    <section className="w-full max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-serif font-bold text-[var(--color-ink)] mb-2">Service Menu</h2>
                            <p className="text-sm text-[var(--color-science-cyan)] font-mono">⚠️ β版特別価格で提供中</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ServiceCard
                                title="Voice Diagnosis"
                                priceBeta="¥1,000"
                                priceRegular="¥1,500"
                                features={["アカペラ1曲分析 (約1分)", "音域・ピッチ測定", "倍音構造チェック"]}
                            />
                            <ServiceCard
                                title="Song Diagnosis"
                                priceBeta="¥1,500"
                                priceRegular="¥2,000"
                                features={["フル尺・伴奏付き楽曲分析", "表現力のダイナミクス測定", "ソルフェジオ周波数の検出"]}
                                isPremium={true}
                            />
                            <ServiceCard
                                title="Pair Diagnosis"
                                priceBeta="¥2,300"
                                priceRegular="¥3,000"
                                features={["声 + 楽曲の統合診断", "詳細な比較レポート", "初心者におすすめのセット"]}
                            />
                        </div>
                    </section>

                    {/* --- CERTIFICATE PREVIEW --- */}
                    <section className="w-full flex flex-col items-center gap-8">
                        <div className="text-center">
                            <h2 className="text-2xl font-serif font-bold text-[var(--color-ink)]">Proof of Existence</h2>
                            <p className="text-sm text-[var(--color-ink)]/60 mt-2 font-mono">あなただけの公式分析証明書</p>
                        </div>
                        <CertificateMockup />
                    </section>

                    {/* --- CTA --- */}
                    <section className="text-center">
                        <a
                            href="https://forms.google.com/your_form"
                            target="_blank"
                            className="inline-block px-8 py-4 bg-[var(--color-magic-gold)] text-[var(--color-ink)] rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg"
                            rel="noreferrer"
                        >
                            β版に申し込む
                        </a>
                        <p className="text-xs text-[var(--color-ink)]/40 mt-4">
                            先着10名様限定
                        </p>
                    </section>

                </div>
            </ScrollContainer>
        </main>
    );
}
