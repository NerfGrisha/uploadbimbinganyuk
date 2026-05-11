import { Globe, Instagram, Mail, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo-bimbinganyuk-optimized.png";
import { trackCtaClick } from "@/lib/analytics";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";

const WA = whatsappUrl(whatsappMessages.footer);
const FLOATING_WA = whatsappUrl(whatsappMessages.floating);
const MAPS_URL = "https://share.google/TNo51yunIKBpUtZgT";

export const CtaFooter = () => (
  <>
    <section className="relative overflow-hidden bg-primary-deep py-16 text-white sm:py-20 md:py-24">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(40_75%_55%/.22),transparent_42%)]"
      />
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="section-eyebrow-dark">
            Langkah pertama
          </p>
          <h2 className="mt-4 text-[2rem] font-extrabold leading-tight tracking-tight sm:mt-5 sm:text-4xl md:text-6xl">
            Jangan tunggu panik lagi baru cari bantuan.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] font-medium leading-7 text-white/90 sm:mt-6 md:text-lg md:leading-8">
            Ceritakan kondisi skripsimu sekarang. Kami bantu baca situasinya,
            lalu arahkan langkah pertama yang paling masuk akal.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row">
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackCtaClick("Cek Kondisi Skripsi Gratis", "footer_cta_section")}
              className="premium-button inline-flex items-center justify-center gap-2 rounded-2xl bg-gold px-6 py-4 text-center text-sm font-extrabold text-primary-deep shadow-2xl transition hover:brightness-110 sm:px-7 sm:text-base"
            >
              <MessageCircle className="h-5 w-5" />
              Cek Kondisi Skripsi Gratis
            </a>
            <a
              href="#paket"
              onClick={() => trackCtaClick("Lihat Opsi Paket", "footer_cta_section")}
              className="premium-button inline-flex items-center justify-center rounded-2xl border border-white/24 bg-white/10 px-6 py-4 text-center text-sm font-bold text-white transition hover:border-gold/50 hover:bg-white/14 sm:px-7 sm:text-base"
            >
              Lihat Opsi Paket
            </a>
          </div>
          <div className="mt-5 inline-flex max-w-full items-start gap-2 rounded-2xl bg-white/10 px-4 py-2 text-left text-xs font-bold leading-5 text-white/90 sm:mt-6 sm:items-center sm:rounded-full">
            <ShieldCheck className="h-4 w-4 text-gold" />
            Batch mentoring dibatasi agar feedback tetap intensif.
          </div>
        </div>
      </div>
    </section>

    <footer className="bg-[hsl(222,60%,7%)] pb-24 pt-10 text-sm text-white md:pb-10">
      <div className="container grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="BimbinganYuk" width={44} height={44} loading="lazy" decoding="async" className="h-11 w-11 object-contain" />
            <span className="leading-tight">
              <span className="block font-extrabold text-white">
                Bimbingan<span className="text-gold">Yuk</span>
              </span>
              <span className="block text-[10px] tracking-[0.2em] text-white/70">
                DARI STUCK KE WISUDA
              </span>
            </span>
          </div>
          <p className="mt-4 text-xs leading-6 text-white/90">
            Mentoring skripsi dan thesis yang membantu mahasiswa bergerak
            dengan arah, sistem, dan rasa tenang.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Menu</h4>
          <ul className="space-y-1.5 text-xs text-white/90">
            <li><a href="#beranda" className="hover:text-gold">Beranda</a></li>
            <li><a href="#program" className="hover:text-gold">Program</a></li>
            <li><a href="#paket" className="hover:text-gold">Paket</a></li>
            <li><a href="#affiliate" className="hover:text-gold">Affiliate</a></li>
            <li><a href="#tentang" className="hover:text-gold">Mentor</a></li>
            <li><a href="#testimoni" className="hover:text-gold">Testimoni</a></li>
            <li><a href="#faq" className="hover:text-gold">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Hubungi Kami</h4>
          <ul className="space-y-2 text-xs text-white/90">
            <li>
              <a href="mailto:hello@bimbinganyuk.id" className="flex items-center gap-2 hover:text-gold">
                <Mail className="h-3.5 w-3.5 text-gold" /> hello@bimbinganyuk.id
              </a>
            </li>
            <li>
              <a href="https://instagram.com/bimbinganyuk.id" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold">
                <Instagram className="h-3.5 w-3.5 text-gold" /> @bimbinganyuk.id
              </a>
            </li>
            <li>
              <a href="https://bimbinganyuk.skillupkids.id/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold">
                <Globe className="h-3.5 w-3.5 text-gold" /> bimbinganyuk.skillupkids.id
              </a>
            </li>
            <li>
              <a href={WA} target="_blank" rel="noreferrer" onClick={() => trackCtaClick("Nomor WhatsApp Footer", "footer_contact")} className="flex items-center gap-2 hover:text-gold">
                <MessageCircle className="h-3.5 w-3.5 text-gold" /> 0851-5875-8688
              </a>
            </li>
            <li>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="flex items-start gap-2 leading-relaxed hover:text-gold">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                <span>Basement Unit 5. Graha Universitas Amikom Yogyakarta, Jl. Ring Road Utara, Ngringin, Condong Catur, Depok, Sleman Regency, Special Region of Yogyakarta 55283.</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-white">Powered by</h4>
          <a
            href="https://skillupkids.id/"
            target="_blank"
            rel="noreferrer"
            className="premium-button inline-flex rounded-lg bg-white px-3 py-2 text-xs font-bold text-primary-deep hover:bg-gold"
          >
            SkillUpKids
          </a>
          <p className="mt-2 text-[11px] leading-5 text-white/80">Education ecosystem for every learning stage.</p>
        </div>
      </div>

      <div className="container mt-8 border-t border-white/10 pt-5 text-center text-[11px] leading-5 text-white/68 sm:mt-10 sm:text-left">
        Copyright 2026 BimbinganYuk. All Rights Reserved.
      </div>

      <a
        href={FLOATING_WA}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackCtaClick("Cek Skripsi Gratis", "floating_cta")}
        className="premium-button fixed bottom-4 left-4 right-4 z-50 inline-flex items-center justify-center gap-2 rounded-2xl bg-gold px-5 py-4 text-sm font-extrabold text-primary-deep shadow-2xl ring-1 ring-gold/70 transition hover:brightness-110 md:left-auto md:right-6 md:w-auto"
      >
        <MessageCircle className="h-5 w-5" />
        Cek Skripsi Gratis
      </a>
    </footer>
  </>
);
