import { CheckCircle2, XCircle } from "lucide-react";

const goodFit = [
  "Kamu mau tetap mengerjakan skripsimu sendiri dengan arah yang lebih jelas.",
  "Kamu siap punya target kecil setiap minggu dan terbuka menerima feedback.",
  "Kamu butuh teman berpikir untuk membedah revisi, metode, dan struktur tulisan.",
];

const notFit = [
  "Kamu mencari joki atau ingin skripsi dikerjakan orang lain.",
  "Kamu ingin janji lulus instan tanpa proses akademik yang bisa dipertanggungjawabkan.",
  "Kamu belum siap mengirim progress, revisi, atau bahan diskusi sebelum sesi.",
];

export const FitCheck = () => (
  <section className="bg-background py-14 sm:py-16 md:py-20">
    <div className="container">
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-primary-deep p-5 text-white sm:p-7 md:p-8">
            <p className="section-eyebrow-dark">Bukan untuk semua orang</p>
            <h2 className="mt-3 text-[1.85rem] font-extrabold leading-tight tracking-tight sm:text-4xl">
              Pendampingan ini dibuat untuk mahasiswa yang mau bergerak, bukan mencari jalan pintas.
            </h2>
            <p className="mt-4 text-sm font-medium leading-7 text-white/80 sm:text-base">
              Kami sengaja menjaga prosesnya etis dan personal. Karena itu,
              konsultasi awal dipakai untuk memastikan kebutuhanmu cocok dengan
              cara kerja BimbinganYuk.
            </p>
          </div>

          <div className="grid gap-3 p-4 sm:p-5 md:grid-cols-2 md:p-6">
            <div className="rounded-2xl bg-gold-soft p-4 ring-1 ring-gold/20 sm:p-5">
              <div className="flex items-center gap-2 text-sm font-extrabold text-primary-deep">
                <CheckCircle2 className="h-5 w-5 text-gold" />
                Cocok kalau
              </div>
              <ul className="mt-4 space-y-3">
                {goodFit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-semibold leading-7 text-foreground/82">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-soft p-4 ring-1 ring-border/80 sm:p-5">
              <div className="flex items-center gap-2 text-sm font-extrabold text-primary-deep">
                <XCircle className="h-5 w-5 text-foreground/45" />
                Tidak cocok kalau
              </div>
              <ul className="mt-4 space-y-3">
                {notFit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-semibold leading-7 text-foreground/72">
                    <XCircle className="mt-1 h-4 w-4 shrink-0 text-foreground/38" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
