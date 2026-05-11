import { Eye, GraduationCap, LockKeyhole, ShieldCheck } from "lucide-react";

const assurances = [
  {
    icon: ShieldCheck,
    title: "Bukan joki",
    desc: "Anak tetap mengerjakan dan memahami skripsinya sendiri. Mentor membantu arah, struktur, dan strategi.",
  },
  {
    icon: Eye,
    title: "Progress lebih terpantau",
    desc: "Target dibuat kecil dan jelas, sehingga keluarga bisa melihat prosesnya lebih masuk akal.",
  },
  {
    icon: LockKeyhole,
    title: "Private dan rahasia",
    desc: "Cerita akademik, file, dan kondisi personal diperlakukan sebagai informasi sensitif.",
  },
  {
    icon: GraduationCap,
    title: "Fokus siap sidang",
    desc: "Bukan hanya selesai menulis, tapi juga berani menjelaskan isi penelitian di depan dosen.",
  },
];

export const ParentTrust = () => (
  <section className="section-shell bg-soft">
    <div className="container">
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
          <div className="bg-primary-deep p-5 text-white sm:p-7 md:p-8">
            <p className="section-eyebrow-dark">Untuk orang tua</p>
            <h2 className="mt-3 text-[2rem] font-extrabold leading-tight tracking-tight sm:text-4xl">
              Bantuan serius agar anak selesai tanpa jalan pintas akademik.
            </h2>
            <p className="mt-4 text-[15px] font-medium leading-7 text-white/82 md:text-lg md:leading-8">
              Jika keluarga ikut mendukung biaya pendampingan, prosesnya harus
              jelas, etis, dan bisa dipercaya. BimbinganYuk dirancang untuk
              membantu mahasiswa bergerak, bukan menggantikan tanggung jawabnya.
            </p>
          </div>

          <div className="grid gap-3 p-4 sm:p-5 md:grid-cols-2 md:p-6">
            {assurances.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-soft p-4 ring-1 ring-border/70">
                <Icon className="h-5 w-5 text-gold" />
                <h3 className="mt-3 font-extrabold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm font-medium leading-7 text-foreground/72">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
