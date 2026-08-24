import React, { useEffect, useState } from "react";
import { scrollToOffer } from "../utils/scrollToOffer";

export function FloatingCTA() {
  const [scrolled, setScrolled] = useState(false);
  const [pricingCtaVisible, setPricingCtaVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = document.getElementById("pricing-cta-button");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPricingCtaVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const visible = scrolled && !pricingCtaVisible;

  if (!visible) return null;

  return (
    <div className="animate-float-cta-in fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto">
        <a
          href="#comprar"
          onClick={scrollToOffer}
          className="inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-[#E0932E] hover:bg-[#C97D22] text-[#0E1E2E] font-bold text-[11.5px] sm:text-base md:text-lg px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 rounded-full shadow-2xl shadow-[#E0932E]/40 border-2 border-white/20 transition-colors whitespace-nowrap"
        >
          🚀 Quiero mi Sistema Blindaje Quirúrgico
        </a>
      </div>
    </div>
  );
}
