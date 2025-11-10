import { Phone, Mail, ArrowUpRight } from 'lucide-react';

const FOOTER_LINK_GROUPS = [
  {
    title: 'Solutions',
    links: [
      { label: 'Family Health Wallet', href: '/family-health-wallet' },
      { label: 'Concierge Care Coordination', href: '/care-coordination' },
      { label: 'MD Connect Specialist Access', href: '/md-connect' },
      { label: 'Verified Pharmacy Network', href: '/medication-search' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { label: 'Diaspora Families', href: '/solutions/diaspora' },
      { label: 'Local Clinics & Hospitals', href: '/solutions/providers' },
      { label: 'Community Pharmacies', href: '/solutions/pharmacies' },
      { label: 'Employers & NGOs', href: '/solutions/employers' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About DiaspoCare', href: '/about' },
      { label: 'Impact Stories', href: '/impact' },
      { label: 'Careers', href: 'https://diaspocare.com/careers' },
      { label: 'Press & News', href: 'https://diaspocare.com/newsroom' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help Center', href: 'https://diaspocare.com/support' },
      { label: 'DiaspoCare Blog', href: 'https://diaspocare.com/blog' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

const DiaspoFooter = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#f7f8fb] via-[#eef0f5] to-[#e4e7ef] text-[#1f2a37] py-16 px-6 sm:px-12 md:px-20">
      <div className="absolute inset-0 opacity-35">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 18% 20%, rgba(120, 132, 155, 0.18), transparent 65%), radial-gradient(circle at 75% 78%, rgba(102, 113, 138, 0.12), transparent 68%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-6">
          <div className="space-y-6 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src="/logo-full.png" alt="DiaspoCare Logo" className="h-10 w-auto" />
              <span className="text-xs font-semibold uppercase tracking-[0.36em] text-[#4a5669]">Care Across Borders</span>
            </div>
            <p className="text-[#364256] leading-relaxed text-base">
              DiaspoCare is the trusted cross-border care infrastructure for diaspora families, local clinics, and global partners to finance, coordinate, and verify healthcare everywhere it’s needed.
            </p>
            <div className="rounded-3xl border border-white/60 bg-white/80 p-5 shadow-sm shadow-primary/5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#1f2a37]/70">Global footprint</p>
              <p className="mt-2 text-sm text-[#364256]">🇰🇪 Kenya • 🇺🇬 Uganda • 🇬🇭 Ghana • 🇳🇬 Nigeria • 🇺🇸 United States</p>
            </div>
            <div className="space-y-4 text-[#47556a]/85">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0" />
                <div className="grid grid-cols-1 gap-1 text-sm sm:grid-cols-2">
                  <a href="tel:+16124400892" className="hover:text-[#1a4dab] transition-colors">🇺🇸 United States — +1 612 440 0892</a>
                  <a href="tel:+254700771125" className="hover:text-[#1a4dab] transition-colors">🇰🇪 Kenya — +254 700 771 125</a>
                  <a href="tel:+254700773074" className="hover:text-[#1a4dab] transition-colors">🇰🇪 Kenya — +254 700 773 074</a>
                  <a href="tel:+233550425321" className="hover:text-[#1a4dab] transition-colors">🇬🇭 Ghana — +233 55 042 5321</a>
                  <a href="tel:+2348058408055" className="hover:text-[#1a4dab] transition-colors">🇳🇬 Nigeria — +234 805 840 8055</a>
                  <a href="tel:+256760380092" className="hover:text-[#1a4dab] transition-colors">🇺🇬 Uganda — +256 760 380 092</a>
                </div>
              </div>
              <a href="mailto:hello@diaspocare.com" className="flex items-center gap-3 text-sm hover:text-[#1a4dab] transition-colors">
                <Mail className="h-5 w-5 flex-shrink-0" />
                hello@diaspocare.com
              </a>
            </div>
            <div className="flex flex-wrap gap-3 pt-2 text-[#1f2a37]">
              <a
                href="https://www.linkedin.com/company/diaspocare/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-sm transition-colors hover:bg-[#dfe4ee]"
              >
                in
              </a>
              <a
                href="https://twitter.com/diaspocare"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-sm transition-colors hover:bg-[#dfe4ee]"
              >
                𝕏
              </a>
              <a
                href="https://www.facebook.com/diaspocare/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-sm transition-colors hover:bg-[#dfe4ee]"
              >
                f
              </a>
              <a
                href="https://www.youtube.com/@diaspocare"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-sm transition-colors hover:bg-[#dfe4ee]"
              >
                ▶
              </a>
            </div>
            <a
              href="https://diaspocare.com/request-demo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1a4dab] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#1a4dab]/25 transition-transform hover:-translate-y-0.5 hover:bg-[#173e90]"
            >
              Talk to our team
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="text-lg font-semibold text-[#1f2a37]">{group.title}</h4>
              <ul className="space-y-2 text-sm text-[#47556a]/85">
                {group.links.map((link) => {
                  const isExternal = link.href.startsWith('http');
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-[#1a4dab]"
                      >
                        {link.label}
                        {isExternal && <ArrowUpRight className="h-3.5 w-3.5" />}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#c5cdda]/70 pt-8 text-[#5a677a]/75">
          <div className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
            <p>© 2025 DiaspoCare. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="https://diaspocare.com" target="_blank" rel="noreferrer" className="hover:text-[#1a4dab] transition-colors">
                DiaspoCare.com
              </a>
              <a href="https://diaspocare.com/security" target="_blank" rel="noreferrer" className="hover:text-[#1a4dab] transition-colors">
                Security & Compliance
              </a>
              <a href="/contact" className="hover:text-[#1a4dab] transition-colors">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DiaspoFooter;
