import { ClipboardCheck, MessageCircle, Route, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Ceritakan kondisi",
    desc: "Kamu kirim posisi skripsi, revisi dosen, deadline, dan bagian yang paling bikin stuck.",
  },
  {
    icon: ClipboardCheck,
    title: "Kami baca hambatannya",
    desc: "Mentor bantu petakan masalah utama: struktur, metode, revisi, atau ritme progress.",
  },
  {
    icon: Route,
    title: "Dapat langkah pertama",
    desc: "Kamu mendapat arahan awal yang masuk akal sebelum memutuskan lanjut ke paket.",
  },
];

export const AfterWhatsapp = () => (
  <section className="section-shell bg-background">
    <div className="container">
      <div className="grid gap-8 rounded-2xl border border-border bg-soft p-5 shadow-card sm:p-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="section-eyebrow">Setelah klik WhatsApp</p>
          <h2 className="mt-3 text-[2rem] font-extrabold leading-tight tracking-tight sm:text-4xl">
            Tidak langsung dijualin paket. Kita mulai dari memahami kondisimu.
          </h2>
          <p className="mt-4 text-[15px] font-medium leading-7 text-foreground/75 md:text-lg md:leading-8">
            Konsultasi awal dibuat ringan dan aman. Tujuannya memastikan kamu
            tahu langkah pertama, lalu baru menentukan apakah butuh pendampingan
            intensif.
          </p>
          <div className="mt-5 inline-flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-xs font-bold leading-5 text-foreground/76 ring-1 ring-border">
            <ShieldCheck className="h-4 w-4 shrink-0 text-gold" />
            Private, tidak mengikat, dan tetap etis. Kami tidak mengambil alih pengerjaan skripsimu.
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-1">
          {steps.map(({ icon: Icon, title, desc }, index) => (
            <div key={title} className="rounded-2xl border border-border bg-white p-4 shadow-soft sm:p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary-deep text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[hsl(40_72%_38%)]">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-1 font-extrabold leading-tight">{title}</h3>
                </div>
              </div>
              <p className="mt-3 text-sm font-medium leading-7 text-foreground/72">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
