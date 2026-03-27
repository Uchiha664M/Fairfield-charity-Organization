import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { ProfileBridge } from '@/components/sections/profile-bridge';
import { CallToActionStrip } from '@/components/sections/cta-strip';
import { MakeDifference } from '@/components/sections/make-difference';
import { InvolvementOptions } from '@/components/sections/involvement-options';
import { MissionImpact } from '@/components/sections/mission-impact';
import { CoreValues } from '@/components/sections/core-values';
import { HowWeHelp } from '@/components/sections/how-we-help';
import { RealLifeStories } from '@/components/sections/real-life-stories';
import { UpcomingEvents } from '@/components/sections/upcoming-events';
import { FinancialTransparency } from '@/components/sections/financial-transparency';
import { MusomesaPreview } from '@/components/sections/musomesa-preview';
import { StrategicPartnership } from '@/components/sections/strategic-partnership';
import { StatsGoalsBar } from '@/components/sections/stats-goals-bar';
import { FairfieldAmbassador } from '@/components/sections/fairfield-ambassador';
import { TeamVolunteers } from '@/components/sections/team-volunteers';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />
      <Hero />
      <ProfileBridge />

      {/* ── ACT 1: The Invitation ── */}
      <CallToActionStrip />
      <MakeDifference />

      {/* ── ACT 2: The Institutional Story ── */}
      <div id="mission">
        <MissionImpact />
      </div>
      <CoreValues />
      <StatsGoalsBar />

      {/* ── ACT 3: Programs In Motion ── */}
      <MusomesaPreview />
      <HowWeHelp />
      <InvolvementOptions />

      {/* ── ACT 4: Proof, Trust & Voice ── */}
      <FinancialTransparency />
      <RealLifeStories />
      <FairfieldAmbassador />

      {/* ── ACT 5: Join the Platform ── */}
      <UpcomingEvents />
      <TeamVolunteers />
      <StrategicPartnership />

      <Footer />
    </main>
  );
}
