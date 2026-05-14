declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: Record<string, string>) => void;
  }
}

export const trackButtonClick = (eventName: string, label: string, location: string) => {
  window.gtag?.("event", eventName, {
    event_category: "button",
    event_label: label,
    location,
  });
};

export const trackNavClick = (eventName: string, label: string, location: string) => {
  window.gtag?.("event", eventName, {
    event_category: "navigation",
    event_label: label,
    location,
  });
};
