import Link from 'next/link';
import { ArrowRight, Crown, Download, ExternalLink, FileText, Globe, HandHeart, HeartHandshake, Instagram, Linkedin, MapPin, Sparkles, Star, TrendingUp } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { FadeIn, ScaleIn } from '@/components/animations/fade-in';

const profileStats = [
  { value: '22K', label: 'Instagram followers', sublabel: 'Active public reach' },
  { value: '295', label: 'Public posts', sublabel: 'Content & engagement' },
  { value: '2025', label: 'Miss Uganda year', sublabel: 'Platform visibility' },
  { value: '12K+', label: 'Fairfield lives touched', sublabel: 'Community impact' },
];

const profileMoments = [
  {
    title: 'Roots in service',
    copy: 'Her story begins with community, discipline, and a service instinct shaped long before public recognition.',
    location: 'Bukomansimbi District',
  },
  {
    title: 'Flight and formation',
    copy: 'Aviation sharpened confidence, procedure, and composure — all qualities now visible in how she carries purpose.',
    location: 'Soroti Flying School',
  },
  {
    title: 'Miss Uganda platform',
    copy: 'The crown turned attention into leverage, giving her a stronger microphone for causes that need sustained visibility.',
    location: 'National stage',
  },
  {
    title: 'Fairfield + Elle Cares',
    copy: "Her advocacy platform now amplifies Fairfield's work in dignity, girls' education, healing, and resilience.",
    location: 'Global reach',
  },
];

const differentiators = [
  {
    title: 'Beauty with structure',
    copy: 'Not just inspiration, but a platform that can support institutional storytelling and partner confidence.',
    icon: Crown,
  },
  {
    title: 'Advocacy with public reach',
    copy: 'Her social presence helps the mission travel further and resonate with younger, broader audiences.',
    icon: Instagram,
  },
  {
    title: 'Purpose with grounding',
    copy: 'Fairfield keeps the profile anchored in real work, real communities, and real program direction.',
    icon: HeartHandshake,
  },
];

const mediaAssets = [
  { label: 'Profile one-sheet', type: 'PDF', size: '2.1 MB' },
  { label: 'High-res photos', type: 'ZIP', size: '45 MB' },
  { label: 'Brand guidelines', type: 'PDF', size: '3.8 MB' },
];

export default function MissWorldPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[var(--color-text-dark)]">
      <Header />

      <section className="relative isolate overflow-hidden bg-[#140b1f] text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(9,17,29,0.92)_15%,rgba(20,11,31,0.78)_55%,rgba(117,56,11,0.48)_100%)] z-10" />
          <ScaleIn className="absolute inset-0 h-full w-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=80')" }}
            />
          </ScaleIn>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,166,35,0.18),transparent_20%),radial-gradient(circle_at_bottom_left,rgba(43,188,179,0.12),transparent_30%)]" />
        </div>

        <div className="container relative z-20 flex min-h-[88vh] items-center py-28">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_420px] lg:items-end">
            <div>
              <FadeIn direction="up" delay={0.15}>
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur-md">
                  <Sparkles className="h-4 w-4 text-[var(--color-secondary)]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/78">Miss Uganda Profile • Sponsor Reference</span>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.28}>
                <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.04em] text-white md:text-7xl lg:text-[6.1rem]">
                  Elle Trivia Muhoza.
                  <br />
                  <span className="text-[var(--color-secondary)]">A modern titleholder with public purpose.</span>
                </h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.38}>
                <p className="mt-8 max-w-3xl border-l border-white/20 pl-6 text-lg font-light leading-relaxed text-slate-200 md:text-2xl">
                  This profile presents Elle as Miss Uganda, Fairfield Global Ambassador, and the face of <span className="font-medium text-white">Elle Cares</span> — a platform where visibility, advocacy, and structured community impact meet.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.48}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link href="/elle-story">
                    <Button className="rounded-full bg-[var(--color-secondary)] px-8 py-6 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-primary)] hover:bg-[#ffd075]">
                      Explore her story arc
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a
                    href="https://www.instagram.com/muhozatriviaelle/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-white/72 transition-colors hover:text-white"
                  >
                    <Instagram className="h-4 w-4" />
                    @muhozatriviaelle
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="left" delay={0.45}>
              <div className="rounded-[2rem] border border-white/12 bg-white/10 p-6 shadow-[0_30px_90px_-35px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-secondary)]">Profile summary</p>
                <div className="mt-5 space-y-4">
                  <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1421]/85 p-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">Current identity</p>
                    <p className="mt-2 text-lg font-semibold text-white">Miss Uganda • Fairfield Global Ambassador</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1421]/85 p-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">Advocacy platform</p>
                    <p className="mt-2 text-lg font-semibold text-white">Elle Cares</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1421]/85 p-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">Public signal</p>
                    <p className="mt-2 text-lg font-semibold text-white">22K followers • 295 posts</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1421]/85 p-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">For partners</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">Use this profile page to brief sponsors, introduce media opportunities, or anchor partnership presentations.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {profileStats.map((item, index) => (
              <FadeIn key={item.label} direction="up" delay={0.1 + index * 0.08} className="rounded-[1.75rem] border border-[var(--color-primary)]/8 bg-white p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)]">
                <div className="text-4xl font-semibold tracking-tight text-[var(--color-primary)]">{item.value}</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.24em] text-slate-500">{item.label}</div>
                <div className="mt-1 text-xs text-slate-400">{item.sublabel}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container grid gap-10 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-start">
          <FadeIn direction="right">
            <div className="sticky top-28 rounded-[2rem] border border-[var(--color-primary)]/10 bg-white p-7 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.35)]">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-secondary)]">Why this profile matters</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text-dark)]">She is becoming a stronger bridge between advocacy and institution-building.</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                This page isn't only about personal branding. It helps explain why Elle is relevant to Fairfield, to partners, and to a wider audience interested in purpose-led leadership.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-[var(--color-accent)]" /><span>Grounded in community identity and public representation.</span></div>
                <div className="flex items-start gap-3"><Globe className="mt-0.5 h-4 w-4 text-[var(--color-highlight)]" /><span>Capable of carrying local stories onto bigger regional and global stages.</span></div>
                <div className="flex items-start gap-3"><Star className="mt-0.5 h-4 w-4 text-[var(--color-secondary)]" /><span>Useful for sponsors, media introductions, and partnership presentations.</span></div>
              </div>

              <div className="mt-7 space-y-2">
                <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Media & sponsor assets</p>
                {mediaAssets.map((asset) => (
                  <button
                    key={asset.label}
                    className="flex w-full items-center justify-between rounded-2xl border border-[var(--color-primary)]/8 bg-slate-50 px-4 py-3 text-left text-sm transition-all hover:border-[var(--color-primary)]/20 hover:bg-white"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-[var(--color-primary)]" />
                      <div>
                        <div className="font-semibold text-[var(--color-text-dark)]">{asset.label}</div>
                        <div className="text-xs text-slate-400">{asset.type} • {asset.size}</div>
                      </div>
                    </div>
                    <Download className="h-4 w-4 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {profileMoments.map((item, index) => (
              <FadeIn key={item.title} direction="up" delay={0.08 * index} className="rounded-[2rem] border border-[var(--color-primary)]/8 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)]">
                <div className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-secondary)]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">0{index + 1}</span>
                  {item.location}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-text-dark)]">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{item.copy}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1625] py-24 text-white">
        <div className="container">
          <FadeIn direction="up">
            <div className="max-w-3xl">
              <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[var(--color-secondary)]">What makes this different</p>
              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">A titleholder profile that can actually support the Fairfield mission.</h2>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} direction="up" delay={0.12 + index * 0.08} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[var(--color-secondary)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.copy}</p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <FadeIn direction="up" className="rounded-[2.5rem] border border-[var(--color-primary)]/10 bg-white p-10 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.35)] lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-secondary)]">Next step</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-text-dark)] md:text-5xl">Use this profile to support sponsors, media, and Fairfield partnership conversations.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                  Elle's story is now positioned as something more useful: a credible public profile that complements Fairfield's mission and strengthens how the organization is presented to the world.
                </p>
              </div>
              <div className="space-y-3">
                <Link href="/partnership" className="block">
                  <Button className="w-full rounded-full bg-[var(--color-primary)] px-8 py-6 text-xs font-bold uppercase tracking-[0.24em] text-white hover:bg-[var(--color-primary-dark)]">
                    Explore partnerships
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/elle-story" className="block">
                  <Button variant="outline" className="w-full rounded-full border-[var(--color-primary)]/20 bg-transparent px-8 py-6 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5">
                    Return to Elle story
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
