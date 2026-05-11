import {
  BatteryLow,
  CheckCircle2,
  Clock3,
  Compass,
  FileWarning,
  Frown,
  MessageSquareWarning,
  RefreshCw,
} from "lucide-react";

const pains = [
  { icon: Compass, text: "Bingung mulai dari mana dan takut salah metode." },
  { icon: RefreshCw, text: "Revisi muter terus, tapi kamu tidak tahu yang harus dibenahi." },
  { icon: Clock3, text: "Deadline makin dekat, progress masih terasa jalan di tempat." },
  { icon: BatteryLow, text: "Motivasi turun karena skripsi terasa berat dikerjakan sendirian." },
  { icon: MessageSquareWarning, text: "Takut chat dosen karena belum siap menjawab pertanyaan." },
  { icon: Frown, text: "Merasa tertinggal saat teman-teman mulai sidang dan wisuda." },
];

const outcomes = [
  "Punya prioritas revisi yang jelas",
  "Tahu struktur dan logika penelitianmu",
  "Berani konsultasi dosen karena sudah siap",
  "Progress terasa nyata setiap minggu",
];

export const Problems = () => (
  <section className="section-shell bg-background">
    <div className="container grid gap-9 sm:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div className="lg:sticky lg:top-28">
        <p className="section-eyebrow">
          Masalah sebenarnya
        </p>
        <h2 className="mt-3 text-[2rem] font-extrabold leading-tight tracking-tight sm:mt-4 sm:text-4xl md:text-5xl">
          Kamu bukan malas. Kamu cuma belum punya arah yang bisa dipercaya.
        </h2>
        <p className="mt-4 text-[15px] font-medium leading-7 text-foreground/75 sm:mt-5 md:text-lg md:leading-8">
          Skripsi jadi berat saat semuanya bercampur: revisi, metode, rasa
          takut, tekanan keluarga, dan rasa bersalah karena menunda. Kami bantu
          pecah semuanya jadi langkah kecil yang jelas.
        </p>
        <div className="mt-6 rounded-2xl border border-gold/25 bg-gold-soft p-4 sm:mt-8 sm:p-6">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gold text-primary-deep shadow-sm">
              <FileWarning className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-base font-extrabold leading-snug sm:text-lg">Yang kamu butuhkan bukan ceramah.</h3>
              <p className="mt-2 text-sm leading-7 text-foreground/75">
                Kamu butuh mentor yang bisa membaca kondisi skripsimu, memberi
                prioritas, dan menemani sampai kamu bergerak lagi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {pains.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="premium-card p-4 sm:p-5"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-soft text-gold ring-1 ring-border">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-[15px] font-semibold leading-7 text-foreground/90">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl bg-primary-deep p-5 text-white shadow-2xl sm:mt-5 sm:p-6 md:p-8">
          <p className="section-eyebrow-dark">
            Setelah didampingi
          </p>
          <h3 className="mt-3 text-[1.6rem] font-extrabold leading-tight tracking-tight md:text-3xl">
            Dari panik tiap buka file, jadi tahu harus mengerjakan apa hari ini.
          </h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {outcomes.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 p-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm font-semibold text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
