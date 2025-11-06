import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useScrollReveal = (scope: React.RefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (!scope.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-animate='fade-up']").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 48 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "cubic-bezier(0.65, 0, 0.35, 1)",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-animate='fade-right']").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, x: -64 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 1,
            ease: "cubic-bezier(0.65, 0, 0.35, 1)",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-animate='fade-left']").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, x: 64 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 1,
            ease: "cubic-bezier(0.65, 0, 0.35, 1)",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-animate='scale-in']").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, scale: 0.9 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 1,
            ease: "cubic-bezier(0.65, 0, 0.35, 1)",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          },
        );
      });
    }, scope);

    return () => ctx.revert();
  }, [scope]);
};
