
"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Divisions", href: "#divisions" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

const divisions = [
  {
    number: "01",
    name: "KTI",
    fullName: "Karya Tulis Ilmiah",
    description:
      "Mengembangkan ide, melakukan penelitian, dan menghasilkan karya ilmiah yang inovatif.",
    icon: "✳",
  },
  {
    number: "02",
    name: "IT",
    fullName: "Information Technology",
    description:
      "Mengeksplorasi teknologi, pemrograman, dan solusi digital untuk berbagai permasalahan.",
    icon: "⌘",
  },
  {
    number: "03",
    name: "GSH",
    fullName: "Greenhouse Management",
    description:
      "Mengembangkan kepedulian lingkungan melalui pengelolaan greenhouse dan inovasi hijau.",
    icon: "❋",
  },
  {
    number: "04",
    name: "Jurnalistik",
    fullName: "Media & Journalism",
    description:
      "Mengabadikan kegiatan, mengolah informasi, dan menyampaikan cerita melalui media kreatif.",
    icon: "◈",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8faf7] text-[#183b2c]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[#183b2c]/10 bg-[#f8faf7]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#183b2c] text-xl font-bold text-[#c6f36b]">
              K
            </div>
            <div>
              <p className="text-lg font-black tracking-[0.12em]">
                KIRMAGO
              </p>
              <p className="text-[9px] font-semibold tracking-[0.16em] text-[#718579]">
                SMA NEGERI 1 ROGOJAMPI
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#557064] transition hover:text-[#83a936]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-[#183b2c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#315b42]"
            >
              Explore KIRMAGO ↗
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#183b2c]/15 text-xl md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-[#183b2c]/10 bg-[#f8faf7] px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-semibold text-[#557064]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden bg-[#183b2c] text-white"
      >
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#a5d94e]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#a5d94e]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32 lg:px-10">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-[#c6f36b]">
              <span className="h-2 w-2 rounded-full bg-[#c6f36b]" />
              STUDENT SCIENTIFIC COMMUNITY
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Curiosity
              <br />
              Creates <span className="text-[#c6f36b]">Innovation.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/65">
              Ruang bagi generasi muda untuk berpikir kritis, mengeksplorasi
              ilmu pengetahuan, dan menciptakan inovasi yang berdampak.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#about"
                className="rounded-full bg-[#c6f36b] px-7 py-4 text-sm font-bold text-[#183b2c] transition hover:bg-white"
              >
                Discover KIRMAGO ↗
              </a>
              <a
                href="#divisions"
                className="rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Our Divisions
              </a>
            </div>

            <div className="mt-14 flex items-center gap-8 border-t border-white/15 pt-7">
              <div>
                <p className="text-2xl font-black text-[#c6f36b]">01</p>
                <p className="mt-1 text-xs text-white/50">Community</p>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div>
                <p className="text-2xl font-black text-[#c6f36b]">04</p>
                <p className="mt-1 text-xs text-white/50">Divisions</p>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div>
                <p className="text-2xl font-black text-[#c6f36b]">∞</p>
                <p className="mt-1 text-xs text-white/50">Possibilities</p>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2rem] border border-[#c6f36b]/20 rotate-3" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#244b38] p-7 shadow-2xl sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-[#c6f36b]">
                  KIRMAGO / 2026
                </span>
                <span className="rounded-full bg-[#c6f36b]/10 px-3 py-1 text-[10px] text-[#c6f36b]">
                  THINK. CREATE. IMPACT.
                </span>
              </div>

              <div className="my-14 flex items-center justify-center">
                <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-[#c6f36b]/30">
                  <div className="absolute h-40 w-40 rounded-full border border-[#c6f36b]/40" />
                  <div className="absolute h-28 w-28 rounded-full bg-[#c6f36b]/10" />
                  <div className="relative text-7xl font-black text-[#c6f36b]">
                    K
                  </div>
                  <div className="absolute right-5 top-7 h-4 w-4 rounded-full bg-[#c6f36b]" />
                  <div className="absolute bottom-8 left-2 h-3 w-3 rounded-full bg-white" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {["RESEARCH", "TECHNOLOGY", "ENVIRONMENT", "CREATIVITY"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="text-[10px] text-[#c6f36b]">
                        0{index + 1}
                      </p>
                      <p className="mt-2 text-xs font-bold tracking-wider text-white/80">
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            <p className="mt-6 text-center text-xs tracking-[0.25em] text-white/35">
              A COMMUNITY OF CURIOUS MINDS
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-[#86a83d]">
              ABOUT OUR COMMUNITY
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Growing Ideas,
              <br />
              Building <span className="text-[#8bab45]">The Future.</span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#64796c]">
              KIRMAGO merupakan Kelompok Ilmiah Remaja SMA Negeri 1 Rogojampi
              yang menjadi ruang belajar, berkarya, dan berinovasi bagi
              siswa melalui kegiatan penelitian, teknologi, lingkungan,
              serta jurnalistik.
            </p>
            <a
              href="#divisions"
              className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-[#315b42] hover:text-[#86a83d]"
            >
              Explore our community <span>↗</span>
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {[
            {
              title: "Think Critically",
              desc: "Membangun pola pikir kritis dan rasa ingin tahu.",
              icon: "⌕",
            },
            {
              title: "Create Innovation",
              desc: "Mengembangkan ide menjadi karya dan solusi.",
              icon: "✳",
            },
            {
              title: "Make an Impact",
              desc: "Menghadirkan kontribusi positif bagi sekitar.",
              icon: "↗",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#183b2c]/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-3xl text-[#86a83d]">{item.icon}</div>
              <h3 className="mt-6 text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#718579]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DIVISIONS */}
      <section id="divisions" className="bg-[#edf2e9] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-[#86a83d]">
                EXPLORE OUR DIVISIONS
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                Different Fields,
                <br />
                <span className="text-[#8bab45]">One Vision.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#718579]">
              Empat bidang dengan fokus berbeda yang saling melengkapi
              dalam membangun komunitas ilmiah yang aktif dan kreatif.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {divisions.map((division) => (
              <article
                key={division.number}
                className="group rounded-2xl border border-[#183b2c]/10 bg-[#f8faf7] p-7 transition duration-300 hover:-translate-y-2 hover:bg-[#183b2c] hover:text-white hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#8bab45]">
                    {division.number}
                  </span>
                  <span className="text-3xl text-[#8bab45]">
                    {division.icon}
                  </span>
                </div>

                <h3 className="mt-12 text-2xl font-black">
                  {division.name}
                </h3>
                <p className="mt-2 text-xs font-semibold text-[#8bab45]">
                  {division.fullName}
                </p>
                <p className="mt-5 text-sm leading-7 text-[#718579] transition group-hover:text-white/65">
                  {division.description}
                </p>
                <div className="mt-8 border-t border-[#183b2c]/10 pt-5 text-sm font-bold text-[#8bab45] group-hover:border-white/20">
                  Explore division ↗
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-[#86a83d]">
              IDEAS INTO REALITY
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Explore Our
              <br />
              <span className="text-[#8bab45]">Works & Research.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#718579]">
            Tempat untuk mengenal karya, penelitian, eksperimen, dan
            berbagai gagasan kreatif anggota KIRMAGO.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl bg-[#183b2c] p-8 text-white sm:p-10">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-[#c6f36b]/20" />
            <p className="text-xs font-bold tracking-[0.2em] text-[#c6f36b]">
              RESEARCH & SCIENCE
            </p>
            <h3 className="relative mt-12 text-3xl font-black">
              Discover.
              <br />
              Investigate.
              <br />
              Innovate.
            </h3>
            <p className="relative mt-5 max-w-sm text-sm leading-7 text-white/60">
              Eksplorasi karya ilmiah dan penelitian yang dikembangkan
              oleh anggota KIRMAGO.
            </p>
            <span className="relative mt-10 inline-block text-sm font-bold text-[#c6f36b]">
              RESEARCH SPACE ↗
            </span>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-[#183b2c]/10 bg-[#edf2e9] p-8 sm:p-10">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-[#86a83d]">
                CREATIVE PUBLICATIONS
              </p>
              <h3 className="mt-12 text-3xl font-black">
                Knowledge
                <br />
                Worth Sharing.
              </h3>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#718579]">
                Artikel, informasi, dokumentasi, dan publikasi kreatif
                dari komunitas KIRMAGO.
              </p>
            </div>
            <span className="mt-10 text-sm font-bold text-[#315b42]">
              PUBLICATION SPACE ↗
            </span>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="px-6 pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#c6f36b] px-8 py-16 text-center sm:px-16">
          <p className="text-xs font-black tracking-[0.25em] text-[#315b42]">
            BE PART OF THE JOURNEY
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[#183b2c] sm:text-5xl">
            Every Great Idea Starts With Curiosity.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#315b42]">
            Terus belajar, berani mencoba, dan tumbuh bersama komunitas
            ilmiah yang inspiratif.
          </p>
          <a
            href="#home"
            className="mt-9 inline-block rounded-full bg-[#183b2c] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#315b42]"
          >
            Back to Top ↑
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#183b2c] px-6 py-10 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xl font-black tracking-[0.12em]">
              KIRMAGO<span className="text-[#c6f36b]">.</span>
            </p>
            <p className="mt-2 text-xs text-white/50">
              Kelompok Ilmiah Remaja SMA Negeri 1 Rogojampi
            </p>
          </div>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} KIRMAGO. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
