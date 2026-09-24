import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(media.matches);

    updatePreference();
    media.addEventListener("change", updatePreference);

    const hideDelay = media.matches ? 800 : 1200;
    const fadeDelay = media.matches ? 0 : 500;
    const fallbackDelay = media.matches ? 1200 : 1800;

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, hideDelay + fadeDelay);

    const fallbackTimer = window.setTimeout(() => {
      setVisible(false);
    }, fallbackDelay);

    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(fallbackTimer);
      media.removeEventListener("change", updatePreference);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111914]/90 backdrop-blur-[2px]"
      aria-live="polite"
      role="status"
      aria-label="Loading website"
      style={{
        transition: reducedMotion ? "none" : "opacity 500ms ease",
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src="/logooooo.png"
          alt="The Interior & Exterior Solution logo"
          className="mb-4 h-[64px] w-[64px] object-contain sm:h-[72px] sm:w-[72px]"
          style={{ display: "block" }}
        />
        <div className="flex flex-col items-center leading-none">
          <span className="font-serif text-[0.7rem] uppercase tracking-[0.18em] text-ivory sm:text-[0.8rem] md:text-base">
            THE INTERIOR &amp; EXTERIOR
          </span>
          <span className="mt-2 text-[0.56rem] font-medium uppercase tracking-[0.32em] text-gold-light sm:text-[0.62rem] md:text-[0.7rem]">
            SOLUTION
          </span>
        </div>
      </div>
    </div>
  );
}
