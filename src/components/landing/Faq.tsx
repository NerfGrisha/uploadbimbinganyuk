import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-shell bg-soft">
      <div className="container">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-eyebrow">
              Masih ragu?
            </p>
            <h2 className="mt-3 text-[2rem] font-extrabold leading-tight tracking-tight sm:mt-4 sm:text-4xl md:text-5xl">
              Pertanyaan yang biasanya muncul sebelum booking.
            </h2>
            <p className="mt-4 text-[15px] font-medium leading-7 text-foreground/75 sm:mt-5 md:text-lg md:leading-8">
              Kami sengaja menjawab dengan jelas karena keputusan pendampingan
              skripsi harus terasa aman, etis, dan masuk akal.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <button
                key={f.q}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className={`w-full touch-manipulation rounded-2xl border bg-white p-4 text-left shadow-soft transition duration-200 hover:-translate-y-0.5 sm:p-5 ${
                  open === i ? "border-gold shadow-card" : "border-border hover:border-gold/45"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[15px] font-extrabold leading-7 sm:text-base">{f.q}</span>
                  <span
                    className={`mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full transition ${
                      open === i ? "rotate-180 bg-gold text-primary-deep" : "bg-soft text-gold"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </div>
                {open === i && (
                  <p className="mt-4 text-sm leading-7 text-foreground/75">{f.a}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
