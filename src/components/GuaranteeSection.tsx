import React from "react";
import { ShieldCheck } from "lucide-react";
export function GuaranteeSection() {
  return (
    <section className="py-10 md:py-14 bg-transparent">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="mb-8">
          <span className="inline-block px-6 py-2.5 mb-5 rounded-full border border-white/15 bg-[#1D3550] text-[#EDF2F6] font-semibold tracking-[0.18em] uppercase text-xs">
            Tu Inversión Está 100% Protegida
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#EDF2F6] flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
            <ShieldCheck className="w-10 h-10 text-[#E0932E]" />
            Garantía de 7 Días
          </h2>
        </div>

        <div className="bg-[#16293B] border border-[#E0932E]/20 rounded-3xl p-4 md:p-8 shadow-sm">
          <p className="text-sm md:text-base text-[#93A7B8] leading-relaxed mb-4 md:mb-6">
            Tenés 7 días para probar el sistema. Si no es lo que
            prometemos, te devolvemos tu dinero. Sin preguntas difíciles.
          </p>
          <div className="inline-flex bg-[#1D3550] px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#E0932E]/25 text-[#9CC3DE] font-bold text-xs md:text-sm shadow-sm">
            Sin Riesgo ✅
          </div>
        </div>
      </div>
    </section>
  );
}
