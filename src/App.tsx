import React, { useEffect, createElement } from "react";
import { Landing } from "./pages/Landing";
import { useScreenInit } from "./useScreenInit";
const PAGE_TITLE =
  "Kit Geología PRO 2026 — Sistema Integral de Recursos Educativos para Docentes de Ciencias de la Tierra";
const PAGE_DESC =
  "6 tomos digitales + 5 bonos con clases visuales, actividades y evaluaciones listas para enseñar Geología con estructura y profundidad: desde el origen del planeta hasta minerales, tectónica, volcanes y recursos naturales.";
const HERO_IMAGE = `${import.meta.env.BASE_URL}mockup9.webp`;

const SITE_URL = "https://geologia-lista.tupuntodigital.shop";
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
    setMeta("property", "og:site_name", "Kit Geología PRO 2026");
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
        name: "Kit Geología PRO 2026 — Sistema Integral de Recursos Educativos para Docentes de Ciencias de la Tierra",
        description: PAGE_DESC,
        image: HERO_IMAGE,
        brand: {
          "@type": "Brand",
          name: "Kit Geología PRO 2026",
        },
        offers: {
          "@type": "Offer",
          price: "19",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: "https://kitgeologialista.impultienda.ar/checkout",
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
            q: "¿Es un producto físico o digital?",
            a: "Es un producto 100% digital. Recibís acceso al material en formato PDF de alta resolución para descargarlo y utilizarlo desde tu computadora, tablet o dispositivo móvil.",
          },
          {
            q: "¿Puedo imprimirlo?",
            a: "Sí. Podés imprimir los tomos, las guías, los esquemas, las actividades y las evaluaciones para usarlas en clase.",
          },
          {
            q: "¿Sirve para secundaria?",
            a: "Sí. Es especialmente útil para secundaria y bachillerato, aunque también puede adaptarse a formación docente, cursos introductorios, talleres ambientales y primeros años de nivel superior.",
          },
          {
            q: "¿Necesito ser especialista en geología?",
            a: "No necesariamente. El material está pensado para docentes que necesitan explicar Ciencias de la Tierra con claridad, aunque no sean geólogos profesionales.",
          },
          {
            q: "¿Incluye actividades?",
            a: "Sí. Además de las actividades integradas en los tomos, recibís bonos específicos con guías de trabajo, esquemas, evaluaciones, rúbricas y preguntas disparadoras.",
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
  return <Landing />;
}
