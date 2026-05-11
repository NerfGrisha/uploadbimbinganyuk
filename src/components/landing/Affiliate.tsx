import { ArrowRight, BadgePercent, Download, HandCoins, MessageCircle, Share2, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { trackCtaClick } from "@/lib/analytics";
import { whatsappMessages, whatsappUrl } from "@/lib/whatsapp";

const affiliateUrl = whatsappUrl(whatsappMessages.affiliate);

const steps = [
  {
    icon: Share2,
    title: "Rekomendasikan",
    desc: "Ajak teman, saudara, atau kenalan yang sedang stuck skripsi untuk cek kondisi gratis.",
  },
  {
    icon: UsersRound,
    title: "Mereka ikut paket",
    desc: "Komisi berlaku saat referral kamu benar-benar order dan pembayaran paket terkonfirmasi.",
  },
  {
    icon: HandCoins,
    title: "Kamu dapat 10%",
    desc: "Kamu mendapat komisi 10% dari nilai paket yang dibeli melalui referral-mu.",
  },
];

const examples = [
  ["Starter Direction", "Rp3.500.000", "Rp350.000"],
  ["Fast Track Progress", "Rp7.500.000", "Rp750.000"],
  ["VIP Wisuda 90 Hari", "Rp15.000.000", "Rp1.500.000"],
];

const promoPosters = [
  {
    title: "Poster Utama",
    desc: "Materi promosi BimbinganYuk untuk edukasi calon referral.",
    href: "/Poster BimbinganYuk.png",
    previewSrc: "/Poster BimbinganYuk-preview.jpg",
    fileName: "Poster BimbinganYuk.png",
  },
  {
    title: "Poster Affiliate",
    desc: "Materi khusus affiliator dengan info komisi dan ajakan daftar.",
    href: "/Poster Affiliate Bimbinganyuk.png",
    previewSrc: "/Poster Affiliate Bimbinganyuk-preview.jpg",
    fileName: "Poster Affiliate Bimbinganyuk.png",
  },
];

export const Affiliate = () => (
  <section id="affiliate" className="section-shell bg-primary-deep text-white">
    <div className="container">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/12 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-gold">
            <BadgePercent className="h-4 w-4" />
            Affiliate BimbinganYuk
          </div>
          <h2 className="mt-5 text-[2rem] font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Bantu temanmu keluar dari stuck skripsi, kamu dapat komisi 10%.
          </h2>
          <p className="mt-4 text-[15px] font-medium leading-7 text-white/82 md:text-lg md:leading-8">
            Kalau kamu punya teman, saudara, adik tingkat, atau kenalan yang
            butuh pendampingan skripsi, rekomendasikan BimbinganYuk. Saat mereka
            order paket memakai referral-mu, kamu mendapatkan komisi.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={affiliateUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackCtaClick("Daftar Affiliate", "affiliate_section")}
              className="premium-button inline-flex items-center justify-center gap-2 rounded-2xl bg-gold px-6 py-4 text-sm font-extrabold text-primary-deep shadow-2xl hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" />
              Daftar Affiliate
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#paket"
              onClick={() => trackCtaClick("Lihat Potensi Komisi", "affiliate_section")}
              className="premium-button inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold text-white hover:bg-white/14"
            >
              Lihat Paket
            </a>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-gold/25 bg-white/[0.07] shadow-2xl ring-1 ring-white/10 backdrop-blur">
            <div className="flex flex-col gap-3 border-b border-white/10 bg-white/[0.06] p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gold text-primary-deep shadow-lg">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-extrabold tracking-tight">Promo Kit Affiliator</h3>
                  <p className="mt-1 text-xs font-semibold leading-5 text-white/68">
                    Siap share ke WhatsApp, Instagram, grup kampus, atau calon referral.
                  </p>
                </div>
              </div>
              <span className="w-fit rounded-full border border-gold/35 bg-gold/12 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-gold">
                2 poster
              </span>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-2">
              {promoPosters.map((poster) => (
                <article key={poster.title} className="overflow-hidden rounded-2xl border border-white/10 bg-[hsl(222_60%_7%/.72)]">
                  <div className="relative aspect-[4/5] overflow-hidden bg-white/[0.05]">
                    <img
                      src={poster.previewSrc}
                      alt={poster.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-primary-deep/95 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-extrabold">{poster.title}</h4>
                    <p className="mt-1 min-h-[40px] text-xs font-medium leading-5 text-white/66">{poster.desc}</p>
                    <a
                      href={poster.href}
                      download={poster.fileName}
                      onClick={() => trackCtaClick(`Download ${poster.title}`, "affiliate_promo_kit")}
                      className="premium-button mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gold px-4 py-3 text-sm font-extrabold text-primary-deep shadow-lg hover:brightness-110"
                    >
                      <Download className="h-4 w-4" />
                      Download Poster
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-5 flex items-start gap-3 rounded-2xl bg-white/[0.08] p-4 text-sm font-semibold leading-7 text-white/82 ring-1 ring-white/10">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-gold" />
            Program ini cocok untuk mahasiswa, alumni, komunitas kampus, mentor,
            atau siapa pun yang ingin merekomendasikan bantuan skripsi yang etis.
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {steps.map(({ icon: Icon, title, desc }, index) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-2xl ring-1 ring-white/10 backdrop-blur">
                <div className="flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gold text-primary-deep">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-gold">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-1 font-extrabold tracking-tight">{title}</h3>
                    <p className="mt-2 text-sm font-medium leading-7 text-white/74">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-gold/25 bg-white text-primary-deep shadow-2xl">
            <div className="border-b border-border bg-gold-soft p-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[hsl(40_72%_38%)]">
                Contoh potensi komisi
              </p>
            </div>
            <div className="divide-y divide-border">
              {examples.map(([name, price, commission]) => (
                <div key={name} className="grid grid-cols-[1fr_auto] gap-3 p-4">
                  <div>
                    <p className="font-extrabold">{name}</p>
                    <p className="mt-1 text-xs font-semibold text-foreground/58">Harga paket {price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-extrabold text-[hsl(40_72%_38%)]">{commission}</p>
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-foreground/50">komisi</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
