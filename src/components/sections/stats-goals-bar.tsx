'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Crown, Megaphone, Rocket, Sparkles, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const milestones = [
  {
    year: '2019',
    short: '2019',
    title: 'Fairfield founded',
    description: 'The organization begins its work with a small but committed community footprint in rural Uganda.',
    lives: 120,
    duration: 1200,
    tag: 'Inception',
    link: '/about',
    eventSummary: 'Small team, big vision. Local programs begin with mental health support and recovery outreach.',
  },
  {
    year: '2020',
    short: '2020',
    title: 'Early outreach network',
    description: 'Field support expands carefully as Fairfield deepens local relationships and trust.',
    lives: 280,
    duration: 1100,
    tag: 'Steady rise',
    link: '/about',
    eventSummary: 'Community health workers join the platform. First district partnerships established.',
  },
  {
    year: '2021',
    short: '2021',
    title: 'Recovery support grows',
    description: 'Mental health and family support become stronger parts of the response model.',
    lives: 560,
    duration: 1000,
    tag: 'Community trust',
    link: '/about',
    eventSummary: 'Trauma support programs expand. Household economic resilience becomes a focus area.',
  },
  {
    year: '2022',
    short: '2022',
    title: 'Education access builds',
    description: 'Programs supporting girls and school continuity create a wider base of impact.',
    lives: 1100,
    duration: 900,
    tag: 'Program base',
    link: '/musomesa',
    eventSummary: 'Musomesa platform launched. 500+ girls supported with menstrual dignity products.',
  },
  {
    year: '2023',
    short: '2023',
    title: 'District reach expands',
    description: 'Fairfield begins reaching more communities with greater consistency.',
    lives: 2300,
    duration: 800,
    tag: 'Expansion',
    link: '/about',
    eventSummary: 'Reached 15 districts. Partnership with OWC strengthens logistical capacity.',
  },
  {
    year: '2024',
    short: '2024',
    title: 'Momentum before the spotlight',
    description: 'The platform matures and prepares for broader visibility and partnership traction.',
    lives: 4300,
    duration: 700,
    tag: 'Momentum',
    link: '/partnership',
    eventSummary: 'Digital infrastructure upgraded. Strategic partnerships secured with General Salim Saleh.',
  },
  {
    year: '2025',
    short: '2025',
    title: 'Elle crowned Miss Uganda',
    description: 'A major visibility moment drives a sharp jump in awareness, reach, and support.',
    lives: 8600,
    duration: 400,
    tag: 'Visibility boost',
    icon: Crown,
    featured: true,
    link: '/miss-world',
    eventSummary: 'National platform visibility doubles overnight. Media coverage reaches 2M+ Ugandans.',
  },
  {
    year: '2025',
    short: '2025+',
    title: 'Elle becomes Fairfield Ambassador',
    description: "Her platform becomes directly connected to Fairfield's mission, accelerating community impact.",
    lives: 10300,
    duration: 350,
    tag: 'Ambassador effect',
    icon: Megaphone,
    featured: true,
    link: '/elle-story',
    eventSummary: 'Elle Cares initiative launched. Ambassador role brings institutional credibility and public trust.',
  },
  {
    year: '2026',
    short: 'Today',
    title: 'Elle Cares • Miss World 73rd',
    description: "The advocacy platform amplifies Fairfield's message and pushes the growth curve to its strongest point yet.",
    lives: 12000,
    duration: 300,
    tag: 'Fast acceleration',
    icon: Rocket,
    featured: true,
    link: '/miss-world',
    eventSummary: 'Global advocacy reach. 23 districts engaged. 12,000+ lives directly touched through programs.',
  },
] as const;

const yAxisLabels = [0, 3000, 6000, 9000, 12000];
const graphWidth = 760;
const graphHeight = 360;
const padding = { top: 28, right: 28, bottom: 56, left: 36 };

function formatLives(value: number) {
  return new Intl.NumberFormat('en-US').format(Math.round(value));
}

function easeForSegment(progress: number, fast: boolean) {
  if (fast) {
    return 1 - Math.pow(1 - progress, 2.5);
  }
  return progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2;
}

export function StatsGoalsBar() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-120px' });
  const hasAnimated = useRef(false);
  const [animatedLives, setAnimatedLives] = useState(0);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isMobile = typeof window !== 'undefined' && isMounted ? window.innerWidth < 768 : false;

  const maxLives = milestones[milestones.length - 1].lives;

  const points = useMemo(() => {
    return milestones.map((milestone, index) => {
      const x = padding.left + (index / (milestones.length - 1)) * (graphWidth - padding.left - padding.right);
      const y = padding.top + (1 - milestone.lives / maxLives) * (graphHeight - padding.top - padding.bottom);
      return { x, y };
    });
  }, [maxLives]);

  const linePath = useMemo(() => {
    return points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');
  }, [points]);

  const areaPath = useMemo(() => {
    const baseline = graphHeight - padding.bottom;
    const start = points[0];
    const end = points[points.length - 1];
    return `${linePath} L ${end.x} ${baseline} L ${start.x} ${baseline} Z`;
  }, [graphHeight, linePath, points]);

  useEffect(() => {
    if (!isInView || hasAnimated.current) {
      return;
    }

    hasAnimated.current = true;

    let frameId = 0;
    let segmentIndex = 0;
    let segmentStartTime: number | null = null;
    let segmentStartValue = 0;

    const run = (timestamp: number) => {
      const milestone = milestones[segmentIndex];

      if (!milestone) {
        setAnimatedLives(maxLives);
        return;
      }

      if (segmentStartTime === null) {
        segmentStartTime = timestamp;
      }

      const progress = Math.min((timestamp - segmentStartTime) / milestone.duration, 1);
      const eased = easeForSegment(progress, milestone.lives >= 8600);
      const nextValue = segmentStartValue + (milestone.lives - segmentStartValue) * eased;
      setAnimatedLives(nextValue);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(run);
        return;
      }

      segmentIndex += 1;
      segmentStartTime = null;
      segmentStartValue = milestone.lives;
      frameId = window.requestAnimationFrame(run);
    };

    frameId = window.requestAnimationFrame(run);

    return () => window.cancelAnimationFrame(frameId);
  }, [isInView, maxLives]);

  const activeIndex = milestones.reduce((current, milestone, index) => {
    return animatedLives >= milestone.lives ? index : current;
  }, 0);

  const activeMilestone = milestones[activeIndex];
  const ActiveIcon = 'icon' in activeMilestone ? activeMilestone.icon : Sparkles;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[linear-gradient(145deg,#091423_0%,#102746_48%,#08111d_100%)] py-24 text-white"
    >
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[var(--color-highlight)]/12 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="mb-8 md:mb-14 flex flex-col gap-4 md:gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="mb-3 md:mb-4 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.24em] md:tracking-[0.28em] text-[var(--color-secondary)]">Impact trajectory • 2019 to today</p>
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Watch the growth accelerate.
              <br />
              <span className="text-[var(--color-secondary)]">Every milestone tells a story.</span>
            </h2>
          </div>
          <div className="max-w-xl text-sm md:text-base leading-relaxed text-slate-300">
            <span className="hidden md:inline">Hover over</span><span className="md:hidden">Tap</span> any point to see what happened. <span className="hidden md:inline">Click</span><span className="md:hidden">Tap twice</span> to explore that chapter. Notice how the curve speeds up
            when Elle's crowning and the <span className="text-white">Elle Cares</span> initiative brought visibility
            and momentum.
          </div>
        </div>

        <div className="grid gap-4 md:gap-6 xl:grid-cols-[minmax(0,1.2fr)_360px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="w-full rounded-xl md:rounded-2xl border border-white/10 bg-white/[0.04] p-3 md:p-5 lg:p-6 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
          >
            <div className="mb-3 rounded-lg bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 p-2.5 text-center md:hidden">
              <p className="text-[11px] font-semibold text-[var(--color-secondary)]">👉 Tap any point for details</p>
            </div>
            <div className="w-full overflow-x-auto overflow-y-visible pb-2">
              <div className="w-full min-w-[700px] relative" style={{ height: '400px' }}>
                <svg viewBox={`0 0 ${graphWidth} ${graphHeight}`} className="h-auto w-full">
                  <defs>
                    <linearGradient id="impact-line" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#2BBCB3" />
                      <stop offset="55%" stopColor="#F5A623" />
                      <stop offset="100%" stopColor="#E85D3A" />
                    </linearGradient>
                    <linearGradient id="impact-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(245,166,35,0.26)" />
                      <stop offset="100%" stopColor="rgba(245,166,35,0.02)" />
                    </linearGradient>
                    <filter id="impact-glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {yAxisLabels.map((label) => {
                    const y = padding.top + (1 - label / maxLives) * (graphHeight - padding.top - padding.bottom);
                    return (
                      <g key={label}>
                        <line x1={padding.left} y1={y} x2={graphWidth - padding.right} y2={y} stroke="rgba(255,255,255,0.10)" strokeDasharray="5 7" />
                        <text x={0} y={y + 4} fill="rgba(255,255,255,0.45)" fontSize="11" letterSpacing="0.14em">
                          {label === 0 ? '0' : `${label / 1000}K`}
                        </text>
                      </g>
                    );
                  })}

                  <path d={areaPath} fill="url(#impact-fill)" opacity="0.9" />
                  <motion.path
                    d={linePath}
                    fill="none"
                    stroke="url(#impact-line)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#impact-glow)"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 5.5, ease: 'easeInOut' }}
                  />

                  {points.map((point, index) => {
                    const milestone = milestones[index];
                    const isActive = index <= activeIndex;
                    const isFeatured = 'featured' in milestone && Boolean(milestone.featured);
                    const isHovered = hoveredPoint === index;
                    return (
                      <g key={`${milestone.year}-${milestone.title}`}>
                        <Link href={milestone.link}>
                          <g
                            onMouseEnter={() => setHoveredPoint(index)}
                            onMouseLeave={() => setHoveredPoint(null)}
                            onClick={(e) => {
                              if (hoveredPoint === index) {
                                // Let link work
                              } else {
                                e.preventDefault();
                                setHoveredPoint(index);
                              }
                            }}
                            onTouchStart={(e) => {
                              e.preventDefault();
                              setHoveredPoint(hoveredPoint === index ? null : index);
                            }}
                            className="cursor-pointer"
                          >
                            {isFeatured && (
                              <circle
                                cx={point.x}
                                cy={point.y}
                                r={isHovered ? 20 : 14}
                                fill="rgba(245,166,35,0.10)"
                                stroke="rgba(245,166,35,0.22)"
                                className="transition-all duration-300"
                              />
                            )}
                            <motion.circle
                              cx={point.x}
                              cy={point.y}
                              r={isFeatured ? 7.5 : 6}
                              fill={isActive ? '#F5A623' : '#0d2037'}
                              stroke={isActive ? '#fff' : 'rgba(255,255,255,0.26)'}
                              strokeWidth="2"
                              animate={{ scale: isActive ? (isHovered ? 1.3 : [1, 1.12, 1]) : 1 }}
                              transition={{ duration: isHovered ? 0.2 : 0.55 }}
                              className="transition-all duration-300"
                            />
                            <text
                              x={point.x}
                              y={graphHeight - 20}
                              textAnchor="middle"
                              fill={isActive ? '#ffffff' : 'rgba(255,255,255,0.55)'}
                              fontSize="11"
                              letterSpacing="0.14em"
                              className={isHovered ? 'font-bold' : ''}
                            >
                              {milestone.short}
                            </text>
                          </g>
                        </Link>
                      </g>
                    );
                  })}
                </svg>

                <AnimatePresence>
                  {hoveredPoint !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-4 sm:top-8 z-50 w-[92%] max-w-[300px] sm:max-w-[340px] md:max-w-[360px] -translate-x-1/2 rounded-xl sm:rounded-2xl border border-white/20 bg-[#0b1421]/98 p-3 sm:p-4 md:p-5 shadow-2xl backdrop-blur-xl"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <span className="rounded-full bg-[var(--color-secondary)]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--color-secondary)]">
                          {milestones[hoveredPoint].tag}
                        </span>
                        <span className="text-sm font-semibold text-white">{milestones[hoveredPoint].year}</span>
                      </div>
                      <h3 className="mb-2 text-base md:text-lg font-semibold text-white">{milestones[hoveredPoint].title}</h3>
                      <p className="mb-3 md:mb-4 text-xs md:text-sm leading-relaxed text-slate-300">{milestones[hoveredPoint].eventSummary}</p>
                      <div className="flex items-center justify-between border-t border-white/10 pt-3">
                        <div>
                          <div className="text-xl md:text-2xl font-semibold text-[var(--color-secondary)]">{formatLives(milestones[hoveredPoint].lives)}</div>
                          <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-slate-400">Lives touched</div>
                        </div>
                        <Link href={milestones[hoveredPoint].link} className="block md:hidden rounded-full bg-[var(--color-secondary)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
                          Explore
                        </Link>
                        <span className="hidden md:inline text-xs font-semibold uppercase tracking-wider text-white/60">Click to explore →</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-4 md:mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-xl md:rounded-[1.5rem] border border-white/8 bg-[#091120]/90 p-3 md:p-4">
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.24em] text-white/45">Current curve</p>
                <div className="mt-1.5 md:mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white">{formatLives(animatedLives)}+</div>
                <p className="mt-1.5 md:mt-2 text-xs md:text-sm leading-relaxed text-slate-400">Lives touched as the curve advances through Fairfield's major growth moments.</p>
              </div>
              <div className="rounded-xl md:rounded-[1.5rem] border border-white/8 bg-[#091120]/90 p-3 md:p-4">
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.24em] text-white/45">Animation note</p>
                <div className="mt-1.5 md:mt-2 text-base md:text-lg font-semibold tracking-tight text-white">Watch it accelerate</div>
                <p className="mt-1.5 md:mt-2 text-xs md:text-sm leading-relaxed text-slate-400">The graph slows early, then speeds up after Elle's crowning.</p>
              </div>
              <div className="rounded-xl md:rounded-[1.5rem] border border-white/8 bg-[#091120]/90 p-3 md:p-4 sm:col-span-2 md:col-span-1">
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.24em] text-white/45">Interaction tip</p>
                <div className="mt-1.5 md:mt-2 text-base md:text-lg font-semibold tracking-tight text-white"><span className="hidden md:inline">Hover &</span> <span className="md:hidden">Tap</span> Click</div>
                <p className="mt-1.5 md:mt-2 text-xs md:text-sm leading-relaxed text-slate-400">Each point shows details and links to the story page.</p>
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 backdrop-blur-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]/80">Active milestone</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">{activeMilestone.title}</h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-[var(--color-secondary)]">
                <ActiveIcon className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-[#091120]/85 p-5">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">Lives touched at this point</p>
              <div className="mt-2 text-5xl font-semibold tracking-tight text-white">{formatLives(animatedLives)}</div>
              <div className="mt-3 inline-flex rounded-full border border-[var(--color-secondary)]/25 bg-[var(--color-secondary)]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-secondary)]">
                {activeMilestone.year} • {activeMilestone.tag}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{activeMilestone.description}</p>
            </div>

            <div className="mt-6 space-y-3">
              {milestones.map((milestone, index) => {
                const Icon = 'icon' in milestone ? milestone.icon : null;
                const reached = index <= activeIndex;
                return (
                  <Link key={`${milestone.year}-${milestone.title}-list`} href={milestone.link}>
                    <div
                      className={`cursor-pointer rounded-2xl border px-4 py-3 transition-all ${reached ? 'border-[var(--color-secondary)]/25 bg-white/[0.07] hover:bg-white/[0.10]' : 'border-white/8 bg-white/[0.03] hover:bg-white/[0.05]'}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${reached ? 'bg-[var(--color-secondary)]/14 text-[var(--color-secondary)]' : 'bg-white/6 text-white/55'}`}>
                          {Icon ? <Icon className="h-4 w-4" /> : <span className="text-[11px] font-semibold">{index + 1}</span>}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className="text-sm font-semibold text-white">{milestone.title}</span>
                            <span className="text-[10px] uppercase tracking-[0.22em] text-white/45">{milestone.year}</span>
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-slate-400">{milestone.tag} • {formatLives(milestone.lives)} lives</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-7 space-y-3">
              <Link href="/about" className="block">
                <Button className="w-full rounded-full bg-[var(--color-secondary)] px-6 py-5 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-primary)] hover:bg-[#ffd075]">
                  Review Fairfield Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/elle-story" className="block">
                <Button variant="outline" className="w-full rounded-full border-white/25 bg-transparent px-6 py-5 text-xs font-bold uppercase tracking-[0.24em] text-white hover:bg-white/10 hover:text-white">
                  Follow Elle's Story Arc
                </Button>
              </Link>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
