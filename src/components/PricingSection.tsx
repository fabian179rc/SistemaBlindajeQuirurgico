import React from "react";
import { Flame, ArrowRight } from "lucide-react";
import { getCheckoutUrl, trackInitiateCheckout } from "../utils/checkoutUrl";
export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-b from-[#1D3550] via-[#12263A] to-[#091420] pt-12 md:pt-14 pb-0"
    >
      <div className="container mx-auto px-4 max-w-2xl text-center relative z-10">
        <span className="inline-block px-6 py-2.5 mb-6 rounded-full border border-white/30 bg-white/10 text-white/90 font-semibold tracking-[0.18em] uppercase text-xs">
          Precio de Lanzamiento
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          Kit Mente Activa{" "}
          <em className="italic font-bold text-[#CFE0EC]">Completo</em>
        </h2>

        <div className="relative inline-block mb-2 w-full max-w-md mx-auto">
          <img
            src={`${import.meta.env.BASE_URL}mockup9.webp`}
            alt="Kit Mente Activa — Estimulación Cognitiva para Adultos Mayores"
            width={900}
            height={900}
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-2xl shadow-2xl shadow-black/20"
          />

          <div className="absolute -top-3 -right-2 md:top-2 md:right-2 w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-[#c0392b] rotate-12"
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 12%, 78% 6%, 79% 24%, 96% 30%, 86% 45%, 100% 58%, 83% 64%, 86% 82%, 68% 80%, 60% 97%, 47% 84%, 30% 92%, 28% 73%, 9% 72%, 19% 56%, 4% 45%, 21% 38%, 14% 20%, 33% 22%, 38% 4%)",
              }}
            />
            <div className="relative text-center text-white leading-none rotate-12">
              <div className="text-2xl md:text-3xl font-extrabold">77%</div>
              <div className="text-[9px] md:text-[10px] font-bold tracking-wide mt-0.5">
                OFF
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="comprar"
        className="container mx-auto px-4 max-w-md relative z-10 pb-16 -mt-4 scroll-mt-6"
      >
        <div className="bg-[#16293B] rounded-3xl shadow-2xl shadow-black/30 p-7 md:p-8 text-center">
          <div className="text-[#93A7B8] text-base md:text-lg mb-3">
            Precio Habitual:{" "}
            <span className="line-through">$68 USD</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#E0932E] text-[#0E1E2E] font-bold px-5 py-2.5 rounded-full text-sm mb-5">
            <Flame className="w-4 h-4" /> 🔥 PRECIO DE LANZAMIENTO
          </div>

          <p className="text-[#93A7B8] text-base mb-1">
            Precio de lanzamiento:
          </p>
          <div className="font-heading text-5xl md:text-7xl font-bold text-[#E0932E] leading-none mb-2 whitespace-nowrap">
            $17 USD
          </div>
          <p className="text-[#93A7B8] text-sm mb-6">
            👁️ 14 personas viendo esto ahora
          </p>

          <a
            id="pricing-cta-button"
            href={getCheckoutUrl()}
            onClick={trackInitiateCheckout}
            className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-[#E0932E] hover:bg-[#C97D22] text-[#0E1E2E] font-bold text-[11.5px] sm:text-base md:text-lg px-5 py-4 sm:px-6 md:py-5 rounded-full shadow-lg shadow-[#E0932E]/30 transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] mb-6 whitespace-nowrap md:whitespace-normal"
          >
            <span className="flex items-center gap-2 text-center">
              👉 Quiero Acceder a mi Kit Mente Activa
            </span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
          </a>

          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1.5 text-sm text-[#93A7B8] font-medium">
            <span>
              <span aria-hidden="true">💳</span> Pagás en tu Moneda Local
            </span>
            <span>
              <span aria-hidden="true">🛡️</span> Garantía 7 Días
            </span>
            <span>
              <span aria-hidden="true">🔒</span> Pago Seguro
            </span>
            <span>
              <span aria-hidden="true">♾️</span> Acceso de por Vida
            </span>
          </div>

          <ul className="mt-6 pt-6 border-t border-white/10 text-left space-y-2 text-sm text-emerald-400">
            <li>✓ Los 6 Volúmenes (Inicial, Intermedio y Avanzado)</li>
            <li>✓ +480 páginas de ejercicios listas para imprimir</li>
            <li>✓ Los 6 Bonos de Regalo Exclusivos incluidos</li>
            <li>✓ Bono 1: Guía de Uso Rápido</li>
            <li>✓ Bono 3: Manual del Acompañante</li>
            <li>✓ Acceso ilimitado y de por vida</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
