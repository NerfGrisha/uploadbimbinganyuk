import { ClipboardCheck, Compass, Repeat2 } from "lucide-react";

const pillars = [
  {
    icon: ClipboardCheck,
    title: "Audit",
    desc: "Membaca posisi skripsi, revisi dosen, deadline, dan hambatan utama sebelum memberi saran.",
  },
  {
    icon: Compass,
    title: "Arahkan",
    desc: "Mengubah masalah yang terasa besar menjadi prioritas kerja, urutan bab, dan target yang realistis.",
  },
  {
    icon: Repeat2,
    title: "Accountability",
    desc: "Menjaga ritme progress agar kamu tidak kembali hilang arah setelah sesi mentoring selesai.",
  },
];

export const MethodFramework = () => (
  <section className="section-shell bg-soft">
    <div className="container">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="section-eyebrow">Metode 3A</p>
          <h2 className="mt-3 text-[2rem] font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Audit, Arahkan, Accountability: cara kami mengubah skripsi yang kacau jadi bisa dijalankan.
          </h2>
          <p className="mt-4 text-[15px] font-medium leading-7 text-foreground/75 md:text-lg md:leading-8">
            BimbinganYuk tidak hanya menjawab pertanyaan saat sesi. Kami memakai
            kerangka kerja yang membantu kamu tahu masalahnya apa, harus mulai
            dari mana, dan bagaimana menjaga progress tetap bergerak.
          </p>
        </div>

        <div className="grid gap-3">
          {pillars.map(({ icon: Icon, title, desc }, index) => (
            <div key={title} className="rounded-2xl border border-border bg-white p-5 shadow-soft">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-deep text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[hsl(40_72%_38%)]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm font-medium leading-7 text-foreground/72">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
