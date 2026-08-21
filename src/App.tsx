import React, { useEffect, createElement } from "react";
import { MotionConfig } from "framer-motion";
import { Landing } from "./pages/Landing";
import { useScreenInit } from "./useScreenInit";
const META_PIXEL_ID = "1520308000113704";
const PAGE_TITLE =
  "Kit Mente Activa — Estimulación Cognitiva para Adultos Mayores";
const PAGE_DESC =
  "+480 ejercicios cognitivos imprimibles en 6 volúmenes, diseñados por especialistas para estimular memoria, atención, lenguaje, lógica y cálculo. Material premium en PDF, listo para imprimir y usar en familia.";
const HERO_IMAGE = `${import.meta.env.BASE_URL}mockup9.webp`;

const SITE_URL = "https://kit-mente-activa.tupuntodigital.shop";
function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
function addLink(
  rel: string,
  href: string,
  attrs: Record<string, string> = {},
) {
  const selector = `link[rel="${rel}"][href="${href}"]`;
  if (document.head.querySelector(selector)) return;
  const el = document.createElement("link");
  el.rel = rel;
  el.href = href;
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  document.head.appendChild(el);
}
export function App() {
  useScreenInit();
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = "es";
    document.title = PAGE_TITLE;
    addLink("preconnect", "/cdn.magicpatterns.com", {
      crossorigin: "",
    });
    addLink("canonical", SITE_URL);
    setMeta("name", "description", PAGE_DESC);
    setMeta(
      "name",
      "viewport",
      "width=device-width, initial-scale=1, viewport-fit=cover",
    );
    setMeta("name", "theme-color", "#0E1E2E");
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", PAGE_TITLE);
    setMeta("property", "og:description", PAGE_DESC);
    setMeta("property", "og:locale", "es_LA");
    setMeta("property", "og:image", HERO_IMAGE);
    setMeta("property", "og:url", SITE_URL);
    setMeta("property", "og:site_name", "Kit Mente Activa");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:image", HERO_IMAGE);
    setMeta("name", "twitter:title", PAGE_TITLE);
    setMeta("name", "twitter:description", PAGE_DESC);
    const ldId = "ld-product-schema";
    if (!document.getElementById(ldId)) {
      const ld = document.createElement("script");
      ld.id = ldId;
      ld.type = "application/ld+json";
      ld.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Kit Mente Activa — Estimulación Cognitiva para Adultos Mayores",
        description: PAGE_DESC,
        image: HERO_IMAGE,
        brand: {
          "@type": "Brand",
          name: "Kit Mente Activa",
        },
        offers: {
          "@type": "Offer",
          price: "21990",
          priceCurrency: "ARS",
          availability: "https://schema.org/InStock",
          url: "https://kit-mente-activa.impultienda.ar/checkout",
        },
      });
      document.head.appendChild(ld);
    }
    const faqId = "ld-faq-schema";
    if (!document.getElementById(faqId)) {
      const faq = document.createElement("script");
      faq.id = faqId;
      faq.type = "application/ld+json";
      faq.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            q: "¿Esto tiene aval profesional o son ejercicios genéricos de internet?",
            a: "Kit Mente Activa fue desarrollado con criterio clínico y pedagógico, aplicando principios de estimulación cognitiva validados para adultos mayores. Cada ejercicio respeta la dignidad del adulto mayor, se adapta a distintos niveles de capacidad y es útil tanto para un familiar como para un profesional.",
          },
          {
            q: "¿Qué pasa si lo compro y mi familiar no quiere usarlo o no le gusta?",
            a: "Por eso incluimos el Bono 1 (Guía de Primera Sesión) y el Bono 3 (Manual del Acompañante): ambos te ayudan a introducir el material sin presión ni frustración. Además, si dentro de los primeros 7 días no estás satisfecho/a, te devolvemos el dinero sin preguntas.",
          },
          {
            q: "No tengo impresora en casa. ¿Es difícil o costoso pasarlo a papel?",
            a: "Para nada. Los archivos son PDFs estándar que podés llevar a cualquier copistería o librería cercana, a un costo mínimo. El Bono 5 incluye una guía completa de impresión con recomendaciones de papel y organización.",
          },
          {
            q: "¿Me va a tocar estar al lado todo el tiempo explicando cómo se usa?",
            a: "No. Cada ejercicio tiene instrucciones claras, en letra grande y con lenguaje simple. El kit está diseñado para que el adulto mayor pueda usarlo solo si quiere, o acompañado si lo prefiere.",
          },
          {
            q: 'Me da miedo que el diseño parezca "para nenes de jardín". ¿Cómo está armado?',
            a: "Kit Mente Activa tiene una estética premium, elegante y completamente adulta: tipografía clara, colores sobrios, diseño editorial de alto nivel. Nada de dibujitos ni tonos infantilizantes.",
          },
          {
            q: "¿El pago es por única vez o me van a cobrar una suscripción?",
            a: "Es un pago único, para siempre. Sin suscripciones, sin cargos adicionales, sin sorpresas. Pagás una sola vez y el material es tuyo de por vida, incluyendo las actualizaciones futuras.",
          },
        ].map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      });
      document.head.appendChild(faq);
    }
  }, []);
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;
    if (!META_PIXEL_ID) return;
    const loadPixel = () => {
      const w = window as any;
      if (w.fbq) {
        w.fbq("track", "PageView");
        return;
      }
      const n: any = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      w.fbq = n;
      if (!w._fbq) w._fbq = n;
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      const target = document.head || document.body || document.documentElement;
      target.appendChild(script);
      w.fbq("init", META_PIXEL_ID);
      w.fbq("track", "PageView");
      const noscript = document.createElement("noscript");
      const img = document.createElement("img");
      img.height = 1;
      img.width = 1;
      img.style.display = "none";
      img.alt = "";
      img.src = `https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`;
      noscript.appendChild(img);
      target.appendChild(noscript);
    };
    const w = window as any;
    const schedule = w.requestIdleCallback || ((cb: () => void) => window.setTimeout(cb, 1));
    const cancel = w.cancelIdleCallback || window.clearTimeout;
    const id = schedule(loadPixel);
    return () => cancel(id);
  }, []);
  return (
    <MotionConfig reducedMotion="user">
      <Landing />
    </MotionConfig>
  );
}
