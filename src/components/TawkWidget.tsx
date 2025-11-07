import { useEffect } from "react";

interface TawkWidgetProps {
  propertyId: string;
  widgetId: string;
}

const TawkWidget = ({ propertyId, widgetId }: TawkWidgetProps) => {
  useEffect(() => {
    if (!propertyId || !widgetId) {
      console.warn("Tawk.to widget skipped: propertyId and widgetId must be provided.");
      return;
    }

    if (document.querySelector<HTMLScriptElement>("script[data-tawk-script]")) {
      return;
    }

    const s1 = document.createElement("script");
    s1.setAttribute("data-tawk-script", "true");
    s1.async = true;
    s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    const s0 = document.getElementsByTagName("script")[0];
    s0.parentNode?.insertBefore(s1, s0);

    return () => {
      const existingScript = document.querySelector<HTMLScriptElement>("script[data-tawk-script]");
      existingScript?.remove();
      const tawkIframe = document.getElementById("tawkchat-status-widget");
      tawkIframe?.remove();
    };
  }, [propertyId, widgetId]);

  return null;
};

export default TawkWidget;
