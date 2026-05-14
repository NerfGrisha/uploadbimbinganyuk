import { useEffect, useState } from "react";
import { ArrowRight, Menu, MessageCircle, X } from "lucide-react";
import logo from "@/assets/logo-bimbinganyuk-optimized.png";
import { trackButtonClick, trackNavClick } from "@/lib/analytics";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";

const links = [
  { href: "#program", label: "Program", eventName: "nav_program_click" },
  { href: "#paket", label: "Paket", eventName: "nav_paket_click" },
  { href: "#affiliate", label: "Affiliate", eventName: "nav_affiliate_click" },
  { href: "#tentang", label: "Mentor", eventName: "nav_mentor_click" },
  { href: "#testimoni", label: "Testimoni", eventName: "nav_testimoni_click" },
  { href: "#faq", label: "FAQ", eventName: "nav_faq_click" },
];

const WA_URL = whatsappUrl(whatsappMessages.nav);

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-deep/92 py-2.5 shadow-2xl backdrop-blur-xl ring-1 ring-white/10"
          : "bg-primary-deep/35 py-3 backdrop-blur-md md:bg-primary-deep/10 md:py-4"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#beranda" className="flex min-w-0 items-center gap-2.5 rounded-lg" onClick={() => setOpen(false)} aria-label="BimbinganYuk beranda">
          <img src={logo} alt="" width={44} height={44} decoding="async" className="h-10 w-10 shrink-0 object-contain md:h-11 md:w-11" />
          <span className="leading-tight">
            <span className="block text-[15px] font-extrabold tracking-tight text-white sm:text-base">
              Bimbingan<span className="text-gold">Yuk</span>
            </span>
            <span className="hidden text-[10px] font-bold tracking-[0.2em] text-white/70 sm:block">
              SKRIPSI TANPA DRAMA
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => trackNavClick(l.eventName, l.label, "navbar_desktop")}
                className="transition hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackButtonClick("whatsapp_navbar_desktop_click", "Cek Skripsi Gratis", "navbar_desktop")}
            className="premium-button hidden items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-extrabold text-primary-deep shadow-[0_12px_30px_-18px_hsl(40_75%_55%/.9)] transition hover:brightness-110 md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Cek Skripsi Gratis
          </a>
          <button
            type="button"
            aria-label="Buka menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
            className={`relative grid h-12 w-12 place-items-center rounded-2xl border text-white shadow-lg backdrop-blur-xl transition duration-300 lg:hidden ${
              open
                ? "border-gold/70 bg-gold text-primary-deep"
                : "border-white/30 bg-white/16 ring-1 ring-white/10 hover:bg-white/24"
            }`}
          >
            <span className="sr-only">{open ? "Tutup menu" : "Buka menu"}</span>
            {open ? <X className="h-5 w-5" strokeWidth={2.8} /> : <Menu className="h-5 w-5" strokeWidth={2.8} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`fixed inset-0 top-[72px] z-40 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Tutup menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-primary-deep/78 backdrop-blur-md transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`premium-drawer-shadow absolute inset-x-3 top-2 origin-top overflow-hidden rounded-[1.75rem] border border-gold/20 bg-[hsl(222_60%_8%)] p-3 text-white ring-1 ring-white/12 transition duration-300 ease-out sm:inset-x-5 ${
            open ? "translate-y-0 scale-100 opacity-100" : "-translate-y-4 scale-[0.98] opacity-0"
          }`}
        >
          <div className="rounded-[1.35rem] bg-white/[0.04] p-2 ring-1 ring-white/12">
            <ul className="space-y-1 text-base font-extrabold text-white">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => {
                    trackNavClick(l.eventName, l.label, "navbar_mobile");
                    setOpen(false);
                  }}
                  className="flex min-h-12 items-center justify-between rounded-2xl bg-white/[0.075] px-4 py-3 text-white shadow-sm ring-1 ring-white/10 transition hover:bg-white/[0.13] hover:text-gold"
                >
                  <span>{l.label}</span>
                  <ArrowRight className="h-4 w-4 text-gold" />
                </a>
              </li>
            ))}
          </ul>
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              trackButtonClick("whatsapp_navbar_mobile_click", "Cek Skripsi Gratis", "navbar_mobile");
              setOpen(false);
            }}
            className="premium-button mt-3 flex items-center justify-center gap-2 rounded-2xl bg-gold px-5 py-4 text-sm font-extrabold text-primary-deep shadow-[0_20px_50px_-20px_hsl(40_75%_55%/.9)]"
          >
            <MessageCircle className="h-4 w-4" />
            Cek Skripsi Gratis
          </a>
          <p className="px-2 pb-1 pt-3 text-center text-xs font-semibold leading-5 text-white/82">
            Konsultasi awal gratis, private, dan tanpa komitmen paket.
          </p>
        </div>
      </div>
    </header>
  );
};
