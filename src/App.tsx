import React, { useEffect, createElement } from "react";
import { Landing } from "./pages/Landing";
import { useScreenInit } from "./useScreenInit";
const PAGE_TITLE =
  "Sistema Blindaje Quirúrgico 2026 — Sistema Integral de Recursos Educativos para Docentes de Instrumentación Quirúrgica";
const PAGE_DESC =
  "6 tomos digitales + 5 bonos con guías didácticas, casos clínicos resueltos, protocolos de seguridad y herramientas de evaluación, listos para descargar y usar desde el primer día en tu materia de Instrumentación Quirúrgica.";
const HERO_IMAGE = `${import.meta.env.BASE_URL}mockup9.webp`;

const SITE_URL = "https://sistemablindaje2026.tupuntodigital.shop";
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
    setMeta("property", "og:site_name", "Sistema Blindaje Quirúrgico 2026");
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
        name: "Sistema Blindaje Quirúrgico 2026 — Sistema Integral de Recursos Educativos para Docentes de Instrumentación Quirúrgica",
        description: PAGE_DESC,
        image: HERO_IMAGE,
        brand: {
          "@type": "Brand",
          name: "Sistema Blindaje Quirúrgico 2026",
        },
        offers: {
          "@type": "Offer",
          price: "19",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: "https://sistemablindajequirurgico.impultienda.ar/checkout",
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
            a: "Es un producto 100% digital. Recibís el acceso al material después de la compra para descargarlo y usarlo desde tu computadora, tablet o celular en formato PDF.",
          },
          {
            q: "¿Sirve para cualquier país de Latinoamérica?",
            a: "Sí. El sistema está diseñado para LATAM y el Bono 4 te permite adaptar el contenido a tu país e institución.",
          },
          {
            q: "¿Necesito experiencia previa para usarlo?",
            a: "No. El Tomo 1 empieza desde los fundamentos y los bonos están pensados para docentes que recién comienzan o quieren ordenar su materia.",
          },
          {
            q: "¿Cuándo recibo el acceso?",
            a: "Inmediatamente después de la compra. El acceso es instantáneo.",
          },
          {
            q: "¿Reemplaza la formación universitaria o el asesoramiento institucional?",
            a: "No. Es una herramienta de apoyo pedagógico y organizacional. Debe adaptarse a la normativa y diseño curricular de cada institución.",
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
