import {
  ClipboardCheck,
  FileCheck2,
  FileEdit,
  Headphones,
  Map,
  MessageSquareText,
  Presentation,
  Search,
} from "lucide-react";
import gradImg from "@/assets/graduation-optimized.jpg";

const steps = [
  {
    icon: Search,
    title: "1. Diagnosis kondisi",
    desc: "Ceritakan posisi skripsimu: topik, bab, revisi, deadline, dan kendala dosen.",
  },
  {
    icon: Map,
    title: "2. Roadmap personal",
    desc: "Kami susun urutan kerja yang realistis, dari revisi paling penting sampai target sidang.",
  },
  {
    icon: FileEdit,
    title: "3. Review dan mentoring",
    desc: "Kamu bawa progress, mentor bantu bedah struktur, argumen, metode, dan next action.",
  },
  {
    icon: ClipboardCheck,
    title: "4. Accountability",
    desc: "Progress dipantau agar kamu tidak hilang arah, menunda, atau kembali stuck sendirian.",
  },
];

const deliverables = [
  "Audit naskah dan revisi dosen",
  "Roadmap pengerjaan skripsi",
  "Sesi mentoring private",
  "Feedback struktur dan metodologi",
  "Monitoring progress mingguan",
  "Persiapan konsultasi dosen",
  "Simulasi sidang dan Q&A",
  "Support WhatsApp sesuai paket",
];

const roadmapPreview = [
  ["Hari 1-3", "Audit revisi dan kondisi naskah"],
  ["Hari 4-10", "Prioritas bab dan target revisi pertama"],
  ["Minggu 2-4", "Review struktur, metode, dan argumen utama"],
  ["Menjelang sidang", "Latihan menjawab pertanyaan dosen"],
];

export const Program = () => (
  <section id="program" className="section-shell bg-soft">
    <div className="container">
      <div className="grid gap-5 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="section-eyebrow">
            Sistem pendampingan
          </p>
          <h2 className="mt-3 text-[2rem] font-extrabold leading-tight tracking-tight sm:mt-4 sm:text-4xl md:text-5xl">
            Program Wisuda 90 Hari yang bikin skripsi terasa punya jalur.
          </h2>
        </div>
        <p className="text-[15px] font-medium leading-7 text-foreground/75 md:text-lg md:leading-8">
          Fokusnya bukan janji instan. Fokusnya membuat kamu tahu apa yang harus
          dikerjakan, kenapa itu penting, dan bagaimana menyampaikannya dengan
          percaya diri ke dosen pembimbing.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-8 lg:grid-cols-[1fr_420px]">
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="premium-card p-5 sm:p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-deep text-gold">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold tracking-tight sm:mt-5 sm:text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/75">{desc}</p>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-primary-deep text-white shadow-2xl">
          <img
            src={gradImg}
            alt="Mahasiswa merayakan kelulusan setelah menyelesaikan skripsi"
            loading="lazy"
            decoding="async"
            width={720}
            height={860}
            className="h-72 w-full object-cover sm:h-80 lg:h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/55 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/14 px-3 py-1.5 text-xs font-bold text-gold backdrop-blur">
              <Presentation className="h-4 w-4" />
              Target akhir: siap sidang
            </div>
            <h3 className="mt-4 text-[1.55rem] font-extrabold leading-tight sm:text-3xl">
              Bukan cuma selesai nulis. Kamu juga siap menjelaskan penelitianmu.
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-white p-5 shadow-card sm:mt-8 sm:p-6 md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-eyebrow">
              Yang kamu dapatkan
            </p>
            <h3 className="mt-2 text-[1.45rem] font-extrabold leading-tight tracking-tight sm:text-2xl">
              Paket bimbingan yang terasa lengkap, bukan tambal sulam.
            </h3>
          </div>
          <a
            href="#paket"
            className="premium-button inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-deep px-5 py-3 text-sm font-bold text-white transition hover:bg-primary sm:w-auto"
          >
            Bandingkan Paket
            <MessageSquareText className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-6 grid gap-2.5 sm:mt-7 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
          {deliverables.map((item) => (
            <div key={item} className="rounded-xl bg-soft px-4 py-3 text-sm font-semibold text-foreground/90 ring-1 ring-border/60">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-start gap-3 rounded-2xl bg-gold-soft p-4 text-sm leading-7 text-foreground/80 ring-1 ring-gold/20">
          <Headphones className="mt-1 h-5 w-5 shrink-0 text-gold" />
          Konsultasi awal gratis dipakai untuk membaca kondisi dan merekomendasikan
          paket yang paling masuk akal untukmu.
        </div>
      </div>

      <div className="mt-6 grid gap-4 rounded-2xl border border-border bg-white p-5 shadow-card sm:mt-8 sm:p-6 lg:grid-cols-[0.85fr_1.15fr] lg:p-8">
        <div>
          <p className="section-eyebrow">Contoh deliverable</p>
          <h3 className="mt-2 text-[1.45rem] font-extrabold leading-tight tracking-tight sm:text-2xl">
            Kamu tidak pulang dari sesi hanya dengan motivasi. Kamu pulang dengan peta kerja.
          </h3>
          <p className="mt-4 text-sm font-medium leading-7 text-foreground/72">
            Format final menyesuaikan kondisi skripsimu, tapi contoh outputnya
            bisa berupa roadmap revisi, checklist konsultasi dosen, dan daftar
            prioritas per bab.
          </p>
        </div>

        <div className="rounded-2xl bg-soft p-4 ring-1 ring-border/70 sm:p-5">
          <div className="flex items-center gap-2 text-sm font-extrabold text-primary-deep">
            <FileCheck2 className="h-5 w-5 text-gold" />
            Preview Roadmap Revisi
          </div>
          <div className="mt-4 space-y-3">
            {roadmapPreview.map(([period, task]) => (
              <div key={period} className="grid gap-2 rounded-2xl bg-white p-4 ring-1 ring-border/70 sm:grid-cols-[110px_1fr] sm:items-center">
                <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[hsl(40_72%_38%)]">
                  {period}
                </span>
                <span className="text-sm font-semibold leading-6 text-foreground/82">{task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
