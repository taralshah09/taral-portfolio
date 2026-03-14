import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { services } from '@/config/Services';
import { Metadata } from 'next';
import { Robots } from 'next/dist/lib/metadata/types/metadata-types';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/services'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  } as Robots,
};

export default function ServicesPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Services
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Professional solutions tailored to your technical needs.
          </p>
        </div>

        <Separator />

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card hover:border-primary/50 relative overflow-hidden rounded-xl border p-8 transition-all hover:shadow-lg"
            >
              <div className="flex flex-col gap-4">
                <div className="bg-muted w-fit rounded-lg p-2 transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl leading-none font-semibold tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
