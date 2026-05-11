import { Award, Check, ExternalLink, Instagram, Linkedin, Quote, ShieldCheck, Trophy } from "lucide-react";
import mentorImg from "@/assets/mentor-rachmat-optimized.jpg";

const points = [
  "Mahasiswa terbaik program studi",
  "Lulus cepat dengan pengalaman riset dan organisasi",
  "25+ prestasi nasional dan internasional",
  "Founder SkillUpKids, SinariDesa, CyberAI, dan BimbinganYuk",
  "Berpengalaman membuat sistem belajar dan pendampingan",
  "Fokus pada mentoring etis, bukan jalan pintas akademik",
];

const stats = [
  { value: "25+", label: "prestasi" },
  { value: "4", label: "inisiatif edukasi" },
  { value: "10+", label: "student impact" },
];

const mentorLinks = [
  {
    label: "Profil",
    href: "https://rachmat.cyberai.id/",
    icon: ExternalLink,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/cari.rachmat",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/carirachmat/",
    icon: Linkedin,
  },
];

export const Mentor = () => (
  <section id="tentang" className="section-shell bg-soft">
    <div className="container">
      <div className="grid gap-9 sm:gap-12 lg:grid-cols-[440px_1fr] lg:items-center">
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-gold/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl bg-primary-deep shadow-2xl ring-1 ring-gold/20">
            <img
              src={mentorImg}
              alt="Rachmat Fachrurrozi, mentor utama BimbinganYuk"
              loading="lazy"
              decoding="async"
              width={768}
              height={896}
              className="aspect-[4/5] h-auto w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-deep via-primary-deep/80 to-transparent p-6 text-white">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-gold">
                Mentor utama
              </p>
              <h3 className="mt-2 text-xl font-extrabold sm:text-2xl">Rachmat Fachrurrozi, S.Kom</h3>
              <p className="mt-1 text-sm text-white/80">Founder BimbinganYuk</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {mentorLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="premium-button inline-flex items-center gap-1.5 rounded-full border border-white/14 bg-white/12 px-3 py-2 text-xs font-extrabold text-white backdrop-blur transition hover:border-gold/50 hover:bg-gold hover:text-primary-deep"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="section-eyebrow">
            Authority yang human
          </p>
          <h2 className="mt-3 text-[2rem] font-extrabold leading-tight tracking-tight sm:mt-4 sm:text-4xl md:text-5xl">
            Dibimbing mentor yang pernah melewati tekanan akademik, bukan cuma memberi teori.
          </h2>
          <p className="mt-4 text-[15px] font-medium leading-7 text-foreground/75 sm:mt-5 md:text-lg md:leading-8">
            Kamu akan dibantu membaca masalah skripsi dengan kepala dingin:
            mana yang harus dibetulkan dulu, mana yang bisa ditunda, dan bagaimana
            menjelaskan keputusan akademikmu dengan lebih percaya diri.
          </p>

          <div className="mt-7 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-white p-3 text-center shadow-soft sm:p-4">
                <div className="text-xl font-extrabold text-primary-deep sm:text-2xl">{stat.value}</div>
                <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.08em] text-foreground/60 sm:text-[11px] sm:tracking-[0.12em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <ul className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm font-semibold leading-6 text-foreground/90">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-soft text-gold ring-1 ring-gold/30">
                  <Check className="h-3 w-3" strokeWidth={3.5} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-7 rounded-2xl bg-primary-deep p-5 text-white shadow-2xl sm:mt-8 sm:p-6 md:p-8">
            <Quote className="h-8 w-8 text-gold" />
            <p className="mt-4 text-base font-semibold leading-8 text-white/90 md:text-xl">
              "Skripsi tidak harus kamu hadapi sendirian. Kadang yang kamu butuh
              hanya orang yang bisa membantu menyusun ulang kekacauan itu menjadi
              langkah yang masuk akal."
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5 text-xs font-bold text-gold">
                <ShieldCheck className="h-4 w-4" />
                Etis
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5 text-xs font-bold text-gold">
                <Award className="h-4 w-4" />
                Terarah
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5 text-xs font-bold text-gold">
                <Trophy className="h-4 w-4" />
                Outcome-driven
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
