import Container from '@/components/common/Container';
import About from '@/components/landing/About';
import CompetitiveProfiles from '@/components/landing/CompetitiveProfiles';
import Experience from '@/components/landing/Experience';
import Github from '@/components/landing/Github';
import Hero from '@/components/landing/Hero';
import Journey from '@/components/landing/Journey';
import Work from '@/components/landing/Projects';
import Setup from '@/components/landing/Setup';
import React from 'react';

export default function page() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <Experience />
      <Work />
      <About />
      <Github />
      <CompetitiveProfiles />
      {/* <Blog /> */}
      {/* <CTA /> */}
      {/* <Setup /> */}
      {/* <Journey /> */}
    </Container>
  );
}
