import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getCheckoutUrl, trackInitiateCheckout } from "../utils/checkoutUrl";
export function FinalPricingCTA() {
  return (
    <section className="py-10 md:py-14 bg-transparent text-[#EDF2F6] text-center relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[#E0932E]/10 blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="mb-5">
          <span className="inline-block px-6 py-2.5 rounded-full border border-white/15 bg-[#1D3550] text-[#EDF2F6] font-semibold tracking-[0.18em] uppercase text-xs">
            Última Oportunidad
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-[#EDF2F6] mb-8 leading-tight">
          Más Claridad. Más Estructura. Menos Improvisación.
        </h2>

        <div className="bg-[#16293B] border border-[#E0932E]/20 rounded-3xl p-6 md:p-7 shadow-lg shadow-black/20 max-w-xl mx-auto mb-6">
          <h3 className="font-bold text-[#6FA8C9] mb-2 text-sm md:text-base max-w-xs sm:max-w-none mx-auto">
            🎁 GEOLOGÍA PRO — 6 Tomos + 5 Bonos
          </h3>
          <div className="text-[#93A7B8] line-through mb-2">$68 USD</div>
          <div className="text-4xl font-bold text-[#E0932E] mb-2">
            $17 USD
          </div>
          <p className="text-[#93A7B8] text-sm mb-6">
            Pago único. Acceso inmediato y permanente. Incluye los 6
            tomos + los 5 bonos sin costo adicional.
          </p>
          <motion.a
            href={getCheckoutUrl()}
            onClick={trackInitiateCheckout}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-[#E0932E] hover:bg-[#C97D22] text-[#0E1E2E] font-bold text-[11.5px] sm:text-base md:text-lg px-5 py-4 sm:px-6 md:py-5 rounded-full shadow-lg shadow-[#E0932E]/30 transition-colors mb-4 whitespace-nowrap md:whitespace-normal"
          >
            <span className="text-center">
              🌍 Quiero Empezar Hoy
            </span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
          </motion.a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-1.5 sm:gap-4 text-xs sm:text-sm leading-tight text-[#93A7B8] font-medium">
          <span>
            <span aria-hidden="true">⭐</span> Material diseñado para docentes
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-white/15">
            |
          </span>
          <span>
            <span aria-hidden="true">🛡️</span> Garantía 7 Días
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-white/15">
            |
          </span>
          <span>
            <span aria-hidden="true">🔒</span> Pago Seguro
          </span>
        </div>
      </div>
    </section>
  );
}
