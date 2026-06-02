import { Hero } from '@/components/sections/hero';
import { JoinCTA } from '@/components/sections/join-cta';
import { UpcomingEvents } from '@/components/sections/upcoming-events';
import { WhatWeDo } from '@/components/sections/what-we-do';
import { WhyJoinUs } from '@/components/sections/why-join-us';
import { AboutUs } from '@/components/sections/about-us';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <JoinCTA />
      <UpcomingEvents />
      <WhatWeDo />
      <WhyJoinUs />
      <AboutUs />
      <Footer />
    </main>
  );
}
