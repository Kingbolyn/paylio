import { env } from '@/lib/env'
import { Nav, Footer } from '@/components/marketing'
import {
  HeroSection,
  StatsStrip,
  FeaturesSection,
  ProductShowcase,
  SecuritySection,
  DeveloperTeaser,
  CtaBanner,
} from '@/components/marketing'

function buildJsonLd(base: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${base}/#website`,
        url: base,
        name: 'Paylio',
        description:
          'Modern Nigerian banking — instant transfers, smart insights, and virtual cards, all in one app.',
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${base}/#app`,
        name: 'Paylio',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        url: base,
        description:
          'A portfolio fintech app demonstrating instant transfers, spending analytics, virtual cards, and enterprise-grade security.',
        screenshot: `${base}/og-image.png`,
        featureList: [
          'Instant bank transfers',
          'Spending insights & analytics',
          'Virtual card management',
          'Biometric & 2FA security',
          'Real-time transaction alerts',
        ],
      },
    ],
  }
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-teal focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-navy focus:shadow-teal"
      >
        Skip to main content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(env.appUrl)) }}
      />
      <Nav />
      <main id="main-content">
        <HeroSection />
        <StatsStrip />
        <FeaturesSection />
        <ProductShowcase />
        <SecuritySection />
        <DeveloperTeaser />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
