import { BarChart3, BookOpenCheck, CalendarCheck, Lock, Target, UsersRound } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Audit dulu, baru arahkan",
    desc: "Kami mulai dari kondisi naskah, kendala dosen, deadline, dan mental block. Jadi sarannya spesifik, bukan template.",
  },
  {
    icon: CalendarCheck,
    title: "Ritme progress mingguan",
    desc: "Setiap minggu ada target kecil yang realistis, sehingga kamu tidak lagi menunggu mood untuk bergerak.",
  },
  {
    icon: BookOpenCheck,
    title: "Dibimbing sampai paham",
    desc: "Kami bantu kamu memahami logika penelitian, bukan mengambil alih pekerjaanmu.",
  },
  {
    icon: BarChart3,
    title: "Revisi jadi action list",
    desc: "Komentar dosen yang terasa menakutkan diubah menjadi prioritas kerja yang jelas.",
  },
  {
    icon: Lock,
    title: "Aman dan rahasia",
    desc: "Kondisi akademik, file skripsi, dan cerita personalmu dijaga secara profesional.",
  },
  {
    icon: UsersRound,
    title: "Batch dibatasi",
    desc: "Kami tidak menerima terlalu banyak peserta sekaligus agar kualitas feedback tetap premium.",
  },
];

export const WhyUs = () => (
  <section className="section-shell relative overflow-hidden bg-primary-deep text-white">
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    />
    <div className="container relative">
      <div className="grid gap-5 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="section-eyebrow-dark">
            Kenapa terasa beda
          </p>
          <h2 className="mt-3 text-[2rem] font-extrabold leading-tight tracking-tight sm:mt-4 sm:text-4xl md:text-5xl">
            Bukan sekadar "revisi ini". Ini pendampingan sampai kamu berani jalan.
          </h2>
        </div>
        <p className="max-w-2xl text-[15px] font-medium leading-7 text-white/80 md:text-lg md:leading-8 lg:ml-auto">
          Banyak mahasiswa tahu harus selesai, tapi tidak tahu harus mulai dari
          mana. BimbinganYuk menggabungkan strategi akademik, coaching, dan
          accountability agar skripsi terasa bisa ditaklukkan.
        </p>
      </div>

      <div className="mt-10 grid gap-3 sm:mt-14 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 shadow-2xl backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:bg-white/[0.08] sm:p-6"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/12 text-gold ring-1 ring-gold/30">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-xl font-extrabold tracking-tight">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/80">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
