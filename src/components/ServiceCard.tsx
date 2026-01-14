"use client";

interface ServiceCardProps {
    title: string;
    priceBeta?: string;
    priceRegular: string;
    features: string[];
    isPremium?: boolean;
}

export default function ServiceCard({ title, priceBeta, priceRegular, features, isPremium = false }: ServiceCardProps) {
    return (
        <div className={`relative p-6 rounded-lg border-2 transition-all duration-300 hover:-translate-y-2 group
      ${isPremium
                ? "bg-[var(--color-ink)]/5 border-[var(--color-magic-gold)] shadow-[0_0_15px_rgba(218,165,32,0.1)]"
                : "bg-white/40 border-[var(--color-ink)]/20 hover:border-[var(--color-science-cyan)]"
            }
    `}>
            {/* Premium Glow */}
            {isPremium && (
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-magic-gold)]/5 to-transparent pointer-events-none"></div>
            )}

            {/* Header */}
            <h3 className={`text-xl font-serif font-bold mb-4 ${isPremium ? "text-[var(--color-magic-gold)]" : "text-[var(--color-ink)]"}`}>
                {title}
            </h3>

            {/* Price */}
            <div className="mb-6 font-mono">
                {priceBeta ? (
                    <div className="flex flex-col">
                        <span className="text-xs text-[var(--color-ink)]/50 line-through">Reg: {priceRegular}</span>
                        <span className="text-2xl font-bold text-[var(--color-science-cyan)]">
                            {priceBeta} <span className="text-xs font-normal text-[var(--color-ink)]/70">/ Beta</span>
                        </span>
                    </div>
                ) : (
                    <span className="text-2xl font-bold text-[var(--color-ink)]">{priceRegular}</span>
                )}
            </div>

            {/* Features Divider */}
            <div className="h-px w-full bg-[var(--color-ink)]/10 mb-6"></div>

            {/* Features List */}
            <ul className="space-y-3 text-sm text-[var(--color-ink)]/80">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                        <span className="text-[var(--color-science-cyan)] mt-1">✦</span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            {/* Hover Line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-[var(--color-science-cyan)] transition-all duration-300 group-hover:w-full"></div>
        </div>
    );
}
