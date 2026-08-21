const CHECKOUT_BASE_URL = 'https://kit-mente-activa.impultienda.ar/checkout';
const META_TRACKING_PARAMS = new Set(['fbclid', 'fbc', 'fbp']);

/**
 * Appends the current page's query string (utm_source, utm_campaign, gclid,
 * fbclid, etc.) to the checkout URL as-is, so tracking params survive the
 * redirect to Impultienda.
 */
export function getCheckoutUrl(): string {
  const checkoutUrl = new URL(CHECKOUT_BASE_URL);
  if (typeof window === 'undefined') return checkoutUrl.toString();

  const incomingParams = new URLSearchParams(window.location.search);
  incomingParams.forEach((value, key) => {
    const normalizedKey = key.toLowerCase();
    if (normalizedKey.startsWith('utm_') || META_TRACKING_PARAMS.has(normalizedKey)) {
      checkoutUrl.searchParams.set(key, value);
    }
  });

  return checkoutUrl.toString();
}

/**
 * Fires the Meta Pixel InitiateCheckout event when a buy button is clicked,
 * before the browser navigates to the external checkout domain.
 */
export function trackInitiateCheckout(): void {
  if (typeof window === 'undefined') return;
  const fbq = (window as any).fbq;
  if (typeof fbq === 'function') {
    fbq('track', 'InitiateCheckout');
  }
}
