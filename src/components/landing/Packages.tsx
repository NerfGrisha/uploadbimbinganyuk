import { Check, Crown, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { trackButtonClick } from "@/lib/analytics";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";

const WA = (paket: string) => whatsappUrl(whatsappMessages.package(paket));

const packages = [
  {
    name: "Starter Direction",
    eventName: "whatsapp_package_starter_click",
    fit: "Untuk kamu yang bingung mulai dari mana dan butuh arah kerja pertama.",
    price: "Rp3.500.000",
    note: "Mulai dari",
    outcome: "Dalam 14 hari, kamu punya peta masalah, prioritas revisi, dan langkah kecil yang jelas untuk mulai bergerak lagi.",
    intensity: "2 sesi private + support chat ringan",
    features: ["Audit kondisi skripsi", "Diagnosis hambatan utama", "Roadmap kerja 14 hari", "Review prioritas revisi", "Support chat 14 hari"],
    popular: false,
  },
  {
    name: "Fast Track Progress",
    eventName: "whatsapp_package_fast_track_click",
    fit: "Untuk kamu yang sudah punya naskah/revisi dan ingin progress cepat.",
    price: "Rp7.500.000",
    note: "Paling direkomendasikan",
    outcome: "Dalam 45 hari, revisi terasa lebih terstruktur, target mingguan kebaca, dan kamu tidak hilang arah setelah sesi selesai.",
    intensity: "6 sesi private + monitoring mingguan",
    features: ["Audit naskah menyeluruh", "6x sesi mentoring private", "Roadmap 45 hari", "Monitoring progress mingguan", "Pendampingan revisi", "Persiapan konsultasi dosen", "Support chat 45 hari"],
    popular: true,
  },
  {
    name: "VIP Wisuda 90 Hari",
    eventName: "whatsapp_package_vip_click",
    fit: "Untuk kamu yang butuh pendampingan intensif sampai siap sidang.",
    price: "Rp15.000.000",
    note: "Pendampingan premium",
    outcome: "Dalam 90 hari, kamu punya sistem eksekusi, review intensif, persiapan konsultasi, dan latihan menjelaskan penelitian dengan percaya diri.",
    intensity: "Private intensif + support prioritas",
    features: ["Audit total dan strategi sidang", "Private mentoring intensif", "Roadmap 90 hari", "Accountability ketat", "Review revisi prioritas", "Simulasi sidang premium", "Support prioritas"],
    popular: false,
  },
];

const comparison = [
  ["Durasi roadmap", "14 hari", "45 hari", "90 hari"],
  ["Sesi private", "2x sesi", "6x sesi", "Intensif"],
  ["Review revisi", "Prioritas awal", "Menyeluruh", "Prioritas + strategi sidang"],
  ["Monitoring", "Chat 14 hari", "Mingguan", "Accountability ketat"],
  ["Persiapan sidang", "-", "Konsultasi dosen", "Simulasi sidang premium"],
  ["Support", "Ringan", "45 hari", "Prioritas"],
];

const vipReasons = [
  "Cocok untuk deadline dekat, revisi besar, atau tekanan sidang yang sudah terasa berat.",
  "Mendapat prioritas strategi: roadmap 90 hari, review intensif, dan simulasi menjelaskan penelitian.",
  "Batch dibatasi agar mentor punya ruang untuk membaca konteks, bukan hanya menjawab cepat.",
];

export const Packages = () => (
  <section id="paket" className="section-shell bg-background">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-eyebrow">
          Pilih jalurmu
        </p>
        <h2 className="mt-3 text-[2rem] font-extrabold leading-tight tracking-tight sm:mt-4 sm:text-4xl md:text-5xl">
          Mulai dari konsultasi kecil sampai pendampingan intensif.
        </h2>
        <p className="mt-4 text-[15px] font-medium leading-7 text-foreground/75 sm:mt-5 md:text-lg md:leading-8">
          Tidak semua mahasiswa butuh paket terbesar. Ceritakan kondisimu, kami
          bantu pilih intensitas yang paling masuk akal.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-3">
        {packages.map((p) => (
          <article
            key={p.name}
            className={`relative flex flex-col rounded-2xl border p-5 shadow-card transition duration-300 hover:-translate-y-0.5 sm:p-6 md:p-8 ${
              p.popular
                ? "border-gold bg-primary-deep text-white shadow-2xl lg:-translate-y-3"
                : "border-border bg-white"
            }`}
          >
            {p.popular && (
              <div className="absolute -top-4 left-6 inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-primary-deep shadow-lg">
                <Crown className="h-3.5 w-3.5" />
                Most chosen
              </div>
            )}
            <p className={`text-xs font-extrabold uppercase tracking-[0.16em] ${p.popular ? "text-gold" : "text-foreground/60"}`}>
              {p.note}
            </p>
            <h3 className="mt-3 text-[1.45rem] font-extrabold leading-tight tracking-tight sm:text-2xl">{p.name}</h3>
            <p className={`mt-3 min-h-[52px] text-sm leading-7 ${p.popular ? "text-white/80" : "text-foreground/75"}`}>
              {p.fit}
            </p>
            <div className={`mt-5 rounded-2xl p-4 ring-1 ${
              p.popular
                ? "bg-white/[0.08] text-white ring-white/12"
                : "bg-soft text-foreground ring-border/70"
            }`}>
              <div className={`flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] ${
                p.popular ? "text-gold" : "text-[hsl(40_72%_38%)]"
              }`}>
                <Sparkles className="h-4 w-4" />
                Outcome utama
              </div>
              <p className={`mt-3 text-sm font-semibold leading-7 ${
                p.popular ? "text-white/88" : "text-foreground/82"
              }`}>
                {p.outcome}
              </p>
            </div>
            <div className={`mt-6 border-y py-6 ${p.popular ? "border-white/12" : "border-border"}`}>
              <div className={`text-[2rem] font-extrabold tracking-tight sm:text-4xl ${p.popular ? "text-gold" : "text-primary-deep"}`}>
                {p.price}
              </div>
              <p className={`mt-2 text-xs font-semibold leading-5 ${p.popular ? "text-white/74" : "text-foreground/62"}`}>
                {p.intensity}. Harga final menyesuaikan kondisi dan durasi pendampingan.
              </p>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {p.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm font-medium leading-6">
                  <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                    p.popular ? "bg-gold text-primary-deep" : "bg-gold-soft text-gold ring-1 ring-gold/25"
                  }`}>
                    <Check className="h-3 w-3" strokeWidth={3.5} />
                  </span>
                  <span className={p.popular ? "text-white/90" : "text-foreground/90"}>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={WA(p.name)}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackButtonClick(p.eventName, `Paket ${p.name}`, "packages_card")}
              className={`premium-button mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-center text-sm font-extrabold transition ${
                p.popular
                  ? "bg-gold text-primary-deep hover:brightness-110"
                  : "bg-primary-deep text-white hover:bg-primary"
              }`}
            >
              <MessageCircle className="h-4 w-4" />
              Tanya Paket Ini
            </a>
          </article>
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white shadow-card sm:mt-10">
        <div className="flex flex-col gap-3 border-b border-border bg-soft p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
          <div>
            <p className="section-eyebrow">Bandingkan paket</p>
            <h3 className="mt-2 text-[1.45rem] font-extrabold leading-tight tracking-tight sm:text-2xl">
              Pilih intensitas yang paling sesuai dengan tekanan skripsimu.
            </h3>
          </div>
          <p className="max-w-md text-sm font-medium leading-7 text-foreground/68">
            Konsultasi awal membantu memilih paket paling masuk akal, bukan yang paling mahal.
          </p>
        </div>
        <div className="border-b border-border/70 bg-white px-5 py-3 text-xs font-bold text-foreground/58 sm:hidden">
          Geser tabel ke samping untuk melihat semua paket.
        </div>
        <div className="overflow-x-auto overscroll-x-contain">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-white">
                <th className="px-5 py-4 font-extrabold text-foreground/68">Fokus</th>
                {packages.map((p) => (
                  <th key={p.name} className={`px-5 py-4 font-extrabold ${p.popular ? "text-[hsl(40_72%_38%)]" : "text-primary-deep"}`}>
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map(([label, starter, fast, vip]) => (
                <tr key={label} className="border-b border-border/70 last:border-0">
                  <td className="px-5 py-4 font-extrabold text-foreground/72">{label}</td>
                  <td className="px-5 py-4 font-semibold text-foreground/72">{starter}</td>
                  <td className="bg-gold-soft/55 px-5 py-4 font-extrabold text-primary-deep">{fast}</td>
                  <td className="px-5 py-4 font-semibold text-foreground/72">{vip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-primary-deep p-5 text-white shadow-2xl sm:p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="section-eyebrow-dark">Kenapa VIP Rp15 juta?</p>
            <h3 className="mt-3 text-[1.55rem] font-extrabold leading-tight tracking-tight sm:text-3xl">
              VIP dibuat untuk kondisi yang butuh pendampingan serius, bukan sekadar sesi tambahan.
            </h3>
          </div>
          <div className="grid gap-3">
            {vipReasons.map((reason) => (
              <div key={reason} className="flex items-start gap-3 rounded-2xl bg-white/[0.08] p-4 ring-1 ring-white/10">
                <Check className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={3} />
                <p className="text-sm font-semibold leading-7 text-white/86">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-7 flex max-w-3xl items-start gap-3 rounded-2xl border border-border bg-soft p-4 text-sm leading-7 text-foreground/75 sm:mt-8 sm:p-5">
        <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-gold" />
        Semua paket bersifat mentoring akademik etis. Kami tidak menulis skripsi
        menggantikan kamu, tapi membantu kamu memahami, menyusun strategi, dan
        mengeksekusi dengan lebih rapi.
      </div>
    </div>
  </section>
);
