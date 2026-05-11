import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import heroBg from "@/assets/hero-bg-optimized.jpg";
import heroBgMobile from "@/assets/hero-bg-mobile-optimized.jpg";
import { trackCtaClick } from "@/lib/analytics";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";

const WA_URL = whatsappUrl(whatsappMessages.hero);

const proof = [
  { value: "10+", label: "mahasiswa dibantu menemukan arah" },
  { value: "4.9/5", label: "rating pengalaman konsultasi" },
  { value: "90 hari", label: "roadmap menuju siap sidang" },
];

const trust = [
  "Bukan joki. Bukan template.",
  "Roadmap personal sesuai kondisi skripsimu.",
  "Progress dicek agar kamu tidak hilang arah lagi.",
];

export const Hero = () => (
  <section
    id="beranda"
    className="relative isolate overflow-hidden bg-primary-deep text-white"
  >
    <picture>
      <source media="(min-width: 768px)" srcSet={heroBg} />
      <img
        src={heroBgMobile}
        alt=""
        aria-hidden
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[68%_center] opacity-80 sm:object-[72%_center] md:object-[75%_center] md:opacity-90"
      />
    </picture>
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(180deg,hsl(222_70%_6%/.92)_0%,hsl(222_65%_8%/.94)_48%,hsl(222_60%_8%/.84)_100%)] md:bg-[linear-gradient(90deg,hsl(222_70%_6%/.97)_0%,hsl(222_65%_8%/.88)_42%,hsl(222_55%_10%/.52)_70%,hsl(222_55%_10%/.18)_100%)]"
    />
    <div
      aria-hidden
      className="absolute inset-0 bg-[radial-gradient(700px_420px_at_18%_32%,hsl(40_75%_55%/.13),transparent_65%)]"
    />
    <div
      aria-hidden
      className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
    />

    <div className="container relative min-h-[690px] pb-14 pt-28 sm:min-h-[720px] sm:pb-16 lg:min-h-[760px] lg:pb-20 lg:pt-36">
      <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center lg:gap-12">
        <div className="max-w-3xl">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.08em] text-gold shadow-2xl backdrop-blur-md sm:px-3.5 sm:tracking-[0.12em]">
            <Star className="h-3.5 w-3.5 fill-gold" />
            <span className="truncate">Mentoring skripsi premium, etis, dan personal</span>
          </div>

          <h1 className="mt-6 max-w-4xl text-[clamp(2.55rem,12vw,4rem)] font-extrabold leading-[1.02] tracking-tight sm:mt-7 sm:text-6xl lg:text-[78px] lg:leading-[0.98]">
            Skripsi lebih cepat selesai, tanpa drama.
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] font-medium leading-7 text-white/88 sm:text-base md:mt-7 md:text-xl md:leading-8">
            Mentor skripsi yang bantu kamu paham arah, beresin revisi, dan
            punya progress mingguan yang jelas sampai siap sidang.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackCtaClick("Cek Kondisi Skripsi Gratis", "hero")}
              className="premium-button group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gold px-5 py-4 text-center text-sm font-extrabold text-primary-deep shadow-[0_18px_50px_-18px_hsl(40_75%_55%/.8)] ring-1 ring-gold/70 transition hover:brightness-110 sm:w-auto sm:px-6"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Cek Kondisi Skripsi Gratis</span>
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#paket"
              onClick={() => trackCtaClick("Lihat Program", "hero")}
              className="premium-button inline-flex w-full items-center justify-center rounded-2xl border border-white/24 bg-white/10 px-5 py-4 text-sm font-bold text-white backdrop-blur transition hover:border-gold/50 hover:bg-white/14 sm:w-auto sm:px-6"
            >
              Lihat Program
            </a>
          </div>

          <div className="mt-7 grid gap-3 text-[13px] font-semibold leading-6 text-white/88 sm:text-sm md:mt-8 md:grid-cols-3">
            {trust.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="rounded-3xl border border-white/12 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
            <div className="rounded-2xl bg-white p-5 text-primary-deep">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-foreground/60">
                    Status mentoring
                  </p>
                  <h2 className="mt-1 text-xl font-extrabold">Roadmap minggu ini</h2>
                </div>
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                  On track
                </span>
              </div>
              <div className="mt-5 space-y-4">
                {[
                  ["Bongkar revisi dosen", "Prioritas"],
                  ["Rapikan metode", "Mentoring"],
                  ["Target progress", "7 hari"],
                ].map(([label, status]) => (
                  <div key={label} className="flex items-center justify-between rounded-xl border border-border bg-soft px-4 py-3">
                    <span className="text-sm font-semibold">{label}</span>
                    <span className="text-xs font-bold text-gold">{status}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-primary-deep p-5 text-white">
                <div className="flex items-center gap-2 text-gold">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-[0.16em]">
                    Next step
                  </span>
                </div>
                <p className="mt-3 text-lg font-extrabold leading-snug">
                  Revisi yang terasa berantakan diubah jadi langkah kecil yang
                  bisa kamu kerjakan hari ini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-9 grid gap-2 rounded-[1.5rem] border border-white/12 bg-white/10 p-2.5 shadow-2xl backdrop-blur-xl sm:mt-12 sm:gap-3 sm:rounded-3xl sm:p-3 md:grid-cols-3">
        {proof.map((item) => (
          <div key={item.value} className="rounded-2xl bg-white/[0.08] p-4 sm:p-5">
            <div className="text-2xl font-extrabold text-gold sm:text-3xl">{item.value}</div>
            <div className="mt-1.5 text-[13px] font-medium leading-6 text-white/88 sm:mt-2 sm:text-sm">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-2 text-xs font-semibold leading-5 text-white/80 sm:mt-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="h-4 w-4 text-gold" />
          Private dan rahasia
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Users className="h-4 w-4 text-gold" />
          Batch dibatasi agar mentoring tetap intensif
        </span>
      </div>
    </div>
  </section>
);
