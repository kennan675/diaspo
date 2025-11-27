import { useState } from "react";

const FAQS = [
  {
    question: "How does DiaspoCare guarantee transparency?",
    answer: "Bills come directly from providers, and payments go straight to verified clinics or pharmacies. You see the line items before approving anything.",
  },
  {
    question: "What is an hPOD?",
    answer: "An hPOD is a 15-minute diagnostic pod with onsite labs, digital results, and instant updates to diaspora sponsors.",
  },
  {
    question: "Can diaspora doctors participate?",
    answer: "Yes. Through DiaspoCare’s second-opinion network, diaspora clinicians review data, validate care, and guide treatment remotely.",
  },
  {
    question: "Can I make micropayments?",
    answer: "Absolutely. Send as little as $1–$5 directly to a provider or fill an invoice in parts without losing visibility.",
  },
  {
    question: "What if I support many relatives?",
    answer: "Create a Family Wallet so siblings contribute together, automate deposits, and keep every expense transparent.",
  },
  {
    question: "How does a Community Wallet work?",
    answer: "Communities deposit funds, 95% goes to real care, and DiaspoCare issues verifiable impact reports for every disbursement.",
  },
  {
    question: "Where is DiaspoCare available?",
    answer: "Piloted in Kenya and expanding across Somalia, Ethiopia, Nigeria, and Ghana with diaspora oversight.",
  },
  {
    question: "Do you support chronic care?",
    answer: "Yes. Condition Wallets bundle medication, diagnostics, and diaspora clinician oversight into predictable monthly plans.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-[#f7f8fb] py-24 px-6 sm:px-12 md:px-20" data-animate="fade-up">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#ffffff,transparent_60%)]" />
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0f172a]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            FAQ
          </span>
          <h2 className="mt-6 text-4xl font-semibold text-slate-900 sm:text-5xl">Straight answers. Zero fluff.</h2>
          <p className="mt-4 text-lg text-slate-600">The questions diaspora families ask before trusting a new healthcare system.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const expanded = openIndex === index;
            return (
              <article
                key={faq.question}
                className={`rounded-3xl border ${expanded ? "border-[#ff444f] bg-white" : "border-slate-200 bg-white/80"} p-6 shadow-[0_30px_60px_-50px_rgba(15,23,42,0.6)] transition-all`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 text-left"
                  onClick={() => setOpenIndex(expanded ? null : index)}
                >
                  <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
                  <span className={`text-2xl font-bold text-[#ff444f] transition-transform ${expanded ? "rotate-45" : ""}`}>+</span>
                </button>
                {expanded && <p className="mt-4 text-base text-slate-600">{faq.answer}</p>}
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/90 p-8 text-center shadow-inner sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Still need clarity?</p>
            <p className="mt-2 text-lg text-slate-700">Ping our care team and get an answer in minutes.</p>
          </div>
          <button className="rounded-2xl border border-[#ff444f] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff444f] transition-colors hover:bg-[#ff444f]/10">
            Contact Support →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
