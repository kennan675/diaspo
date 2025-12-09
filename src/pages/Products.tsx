import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layouts/PageLayout";
import HomeProductShowcase from "@/components/home/HomeProductShowcase";

const Products = () => {
  return (
    <PageLayout mainClassName="space-y-0">
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#03060f] via-[#0a1b37] to-[#091124] px-6 py-24 text-white sm:px-12 md:px-20"
        data-animate="fade-up"
      >
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(255, 68, 79, 0.28), transparent 55%), radial-gradient(circle at 80% 0%, rgba(123, 97, 255, 0.38), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/80">
            The DiaspoCare system
          </p>
          <div className="space-y-6">
            <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Every product the diaspora asked for — on one proof-first platform.
            </h1>
            <p className="text-lg text-white/85">
              Mix direct-to-provider payments, smart wallets, hPod diagnostics, diaspora second opinions, and employer clinics to
              give every family, community, or workforce instant, verified care.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="hero" size="lg" className="flex-1 justify-center sm:flex-none sm:px-10">
              <a href="/care-coordination">Get started</a>
            </Button>
            <Button asChild variant="glass" size="lg" className="flex-1 justify-center border-white/30 text-white sm:flex-none sm:px-10">
              <a href="/contact">Talk to product specialist</a>
            </Button>
          </div>
        </div>
      </section>

      <HomeProductShowcase />

      <section className="px-6 pb-16 pt-10 sm:px-12 md:px-20" data-animate="fade-up">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-white/90 p-10 text-center shadow-[0_30px_100px_-70px_rgba(15,23,42,0.8)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Need a custom rollout?</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">Bundle products into a proof stack.</h2>
          <p className="mt-3 text-lg text-slate-600">
            Our team will map your family, community, or employer needs to the right combination of wallets, hPods, financing, and diaspora clinical oversight.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild variant="brand" size="lg" className="justify-center">
              <a href="/contact">Book a planning session</a>
            </Button>
            <Button asChild variant="brandOutline" size="lg" className="justify-center">
              <a href="/impact">See proof of impact</a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Products;
