import { useEffect } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problems } from "@/components/landing/Problems";
import { AfterWhatsapp } from "@/components/landing/AfterWhatsapp";
import { MethodFramework } from "@/components/landing/MethodFramework";
import { WhyUs } from "@/components/landing/WhyUs";
import { Program } from "@/components/landing/Program";
import { Packages } from "@/components/landing/Packages";
import { FitCheck } from "@/components/landing/FitCheck";
import { Affiliate } from "@/components/landing/Affiliate";
import { ParentTrust } from "@/components/landing/ParentTrust";
import { Mentor } from "@/components/landing/Mentor";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { CtaFooter } from "@/components/landing/CtaFooter";
import { faqs } from "@/data/faqs";

const Index = () => {
  useEffect(() => {
    document.title = "BimbinganYuk | Mentor Skripsi Premium sampai Paham dan Terarah";
    const meta =
      document.querySelector('meta[name="description"]') ||
      document.head.appendChild(Object.assign(document.createElement("meta"), { name: "description" }));

    meta.setAttribute(
      "content",
      "Bimbingan skripsi dan thesis premium untuk mahasiswa yang stuck, bingung metodologi, revisi, dan butuh mentor sampai progress lebih terarah."
    );

    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.id = "faq-schema";
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    });
    document.getElementById("faq-schema")?.remove();
    document.head.appendChild(faqSchema);

    return () => {
      faqSchema.remove();
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".section-shell > .container, section:not(#beranda) article, .premium-card, [data-reveal]"
      )
    );

    revealItems.forEach((item, index) => {
      item.classList.add("reveal-on-scroll");
      item.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problems />
      <AfterWhatsapp />
      <MethodFramework />
      <WhyUs />
      <Program />
      <Packages />
      <FitCheck />
      <Affiliate />
      <ParentTrust />
      <Mentor />
      <Testimonials />
      <Faq />
      <CtaFooter />
    </main>
  );
};

export default Index;
