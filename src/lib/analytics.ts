declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: Record<string, string>) => void;
  }
}

export const trackCtaClick = (label: string, location: string) => {
  window.gtag?.("event", "cta_click", {
    event_category: "engagement",
    event_label: label,
    location,
  });
};
