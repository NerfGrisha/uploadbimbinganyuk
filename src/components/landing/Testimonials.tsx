import { ArrowRight, CheckCircle2, FileText, MessageSquareText, Quote, Star } from "lucide-react";
import t1 from "@/assets/testi-1.jpg";
import t2 from "@/assets/testi-2.jpg";
import t3 from "@/assets/testi-3.jpg";

const testimonials = [
  {
    quote:
      "Sebelumnya revisi dosen terasa seperti tembok. Setelah dibimbing, saya tahu mana yang harus dikerjakan dulu dan akhirnya berani konsultasi lagi.",
    name: "Dinda A.",
    role: "Mahasiswa S1, stuck hampir 1 tahun",
    img: t1,
  },
  {
    quote:
      "Yang paling kerasa itu accountability-nya. Saya tidak lagi hilang selama berminggu-minggu karena setiap sesi ada target yang jelas.",
    name: "Fajar R.",
    role: "Mahasiswa S1 sambil kerja",
    img: t2,
  },
  {
    quote:
      "Mentornya bisa menjelaskan metodologi dengan bahasa yang mudah. Saya jadi lebih paham penelitian sendiri, bukan cuma ikut arahan.",
    name: "Nabilla S.",
    role: "Mahasiswa tingkat akhir",
    img: t3,
  },
];

const beforeAfter = [
  ["Sebelum", "File dibuka, panik, lalu ditutup lagi."],
  ["Sesudah", "Punya task kecil yang jelas untuk dikerjakan hari ini."],
  ["Sebelum", "Revisi dosen terasa ambigu dan menakutkan."],
  ["Sesudah", "Komentar dosen berubah jadi checklist prioritas."],
];

const caseSteps = [
  "Audit komentar dosen dan naskah terakhir",
  "Susun ulang prioritas revisi per bab",
  "Target mingguan dengan checkpoint mentor",
  "Latihan menjelaskan alasan metode dan temuan",
];

const proofSlots = [
  {
    icon: MessageSquareText,
    title: "Screenshot testimoni WhatsApp",
    desc: "Slot untuk chat asli yang sudah disensor nama, kampus, dan detail pribadi.",
  },
  {
    icon: FileText,
    title: "Before-after revisi",
    desc: "Slot untuk contoh komentar dosen yang diubah menjadi checklist prioritas.",
  },
];

export const Testimonials = () => (
  <section id="testimoni" className="section-shell bg-background">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-eyebrow">
          Bukti sosial
        </p>
        <h2 className="mt-3 text-[2rem] font-extrabold leading-tight tracking-tight sm:mt-4 sm:text-4xl md:text-5xl">
          Cerita mahasiswa yang akhirnya bergerak lagi.
        </h2>
        <p className="mt-4 text-[15px] font-medium leading-7 text-foreground/75 sm:mt-5 md:text-lg md:leading-8">
          Mereka datang dengan kondisi berbeda, tapi pola besarnya sama:
          butuh arah, butuh teman berpikir, dan butuh sistem yang menjaga progress.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-3">
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="relative rounded-2xl border border-border bg-white p-5 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-gold/45 sm:p-6"
          >
            <Quote className="absolute right-6 top-6 h-10 w-10 text-gold/15" />
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-5 text-[15px] font-semibold leading-8 text-foreground/90 sm:text-base">
              "{t.quote}"
            </p>
            <div className="mt-7 flex items-center gap-4 border-t border-border pt-5">
              <img
                src={t.img}
                alt={t.name}
                loading="lazy"
                decoding="async"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/30"
              />
              <div>
                <div className="font-extrabold">{t.name}</div>
                <div className="text-xs font-medium text-foreground/60">{t.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-2.5 rounded-2xl bg-primary-deep p-3 text-white shadow-2xl sm:mt-10 sm:gap-3 sm:p-4 md:grid-cols-4 md:p-5">
        {beforeAfter.map(([label, text]) => (
          <div key={`${label}-${text}`} className="rounded-2xl bg-white/8 p-4">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-gold">{label}</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-white/90">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-white shadow-card sm:mt-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-primary-deep p-5 text-white sm:p-7 md:p-8">
            <p className="section-eyebrow-dark">Mini case study</p>
            <h3 className="mt-3 text-[1.55rem] font-extrabold leading-tight tracking-tight sm:text-3xl">
              Dari revisi yang terasa buntu jadi roadmap yang bisa dijalankan.
            </h3>
            <p className="mt-4 text-sm font-medium leading-7 text-white/80 sm:text-base">
              Contoh pola pendampingan untuk mahasiswa yang sudah punya naskah,
              tapi tertahan karena komentar dosen terasa terlalu banyak dan tidak
              tahu mana yang harus dibereskan dulu.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {[
                ["8+", "revisi dipilah"],
                ["45 hari", "ritme progress"],
                ["1 roadmap", "prioritas kerja"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-white/[0.08] p-3 ring-1 ring-white/10">
                  <div className="text-lg font-extrabold text-gold sm:text-2xl">{value}</div>
                  <div className="mt-1 text-[10px] font-bold uppercase leading-4 tracking-[0.08em] text-white/70">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 sm:p-7 md:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {caseSteps.map((step, index) => (
                <div key={step} className="rounded-2xl bg-soft p-4 ring-1 ring-border/70">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[hsl(40_72%_38%)]">
                    <CheckCircle2 className="h-4 w-4" />
                    Step {index + 1}
                  </div>
                  <p className="mt-3 text-sm font-semibold leading-7 text-foreground/84">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-start gap-3 rounded-2xl bg-gold-soft p-4 text-sm font-semibold leading-7 text-foreground/78 ring-1 ring-gold/20">
              <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-gold" />
              Fokusnya bukan mengerjakan skripsi untuk mahasiswa, tapi membuat
              proses revisi lebih jelas, etis, dan bisa dipertanggungjawabkan.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:mt-8 md:grid-cols-2">
        {proofSlots.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-dashed border-gold/45 bg-gold-soft/55 p-5">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-gold ring-1 ring-gold/25">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-extrabold tracking-tight text-primary-deep">{title}</h3>
                <p className="mt-2 text-sm font-medium leading-7 text-foreground/72">{desc}</p>
                <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[hsl(40_72%_38%)]">
                  Siap diganti bukti asli
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
