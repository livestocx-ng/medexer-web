'use client';

import { Box } from '@mantine/core';
// import AboutSection from '@/core/components/home/about_section';
import AppShowcaseSection from '@/core/components/home/app-showcase-section';
import DonationCallSection from '@/core/components/home/donation_call_section';
import FeaturedSection from '@/core/components/home/featured_section';
import PassionSection from '@/core/components/home/passion-section';
import SdgSection from '@/core/components/home/sdg_section';
import SimpleBloodHero from '@/core/components/home/simple-blood-hero';
import StatisticsSection from '@/core/components/home/statistics-section';
import SupportSection from '@/core/components/home/support_section';

export default function HomePage() {
  return (
    <Box>
      <SimpleBloodHero />
      <PassionSection />
      <StatisticsSection />
      <AppShowcaseSection />
      <FeaturedSection />
      <SdgSection />
      <DonationCallSection />
      <SupportSection />
    </Box>
  );
}
