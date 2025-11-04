import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medexer - Blog',
  description:
    'Save lives through blood donation. Connect donors with hospitals to make blood transfusion accessible, safe, and reliable.',
  keywords: ['Blood Donation', 'Nigeria', 'Hospitals', 'Donors', 'Transfusion', 'Medexer'],
  other: {
    'facebook-domain-verification': 'yy2fxudmyl6e8nxtl2zjx9lss8j8dl',
  },
  openGraph: {
    title: 'Medexer - Blog',
    description:
      'Save lives through blood donation. Connect donors with hospitals to make blood transfusion accessible, safe, and reliable.',
    url: 'https://girlified.com.ng/',
    siteName: 'Medexer',
    type: 'website',
    images: [
      {
        url: 'https://dp20430eecj0w.cloudfront.net/versions/original/daaf27ce-0083-4a20-a5fb-2315a4ca1e09_aea96a4943b14104845ab840187e2684png.png',
        secureUrl:
          'https://dp20430eecj0w.cloudfront.net/versions/original/daaf27ce-0083-4a20-a5fb-2315a4ca1e09_aea96a4943b14104845ab840187e2684png.png',
        width: 300,
        height: 200,
      },
      {
        url: 'https://dp20430eecj0w.cloudfront.net/versions/original/daaf27ce-0083-4a20-a5fb-2315a4ca1e09_aea96a4943b14104845ab840187e2684png.png',
        secureUrl:
          'https://dp20430eecj0w.cloudfront.net/versions/original/daaf27ce-0083-4a20-a5fb-2315a4ca1e09_aea96a4943b14104845ab840187e2684png.png',
        width: 300,
        height: 300,
      },
      {
        url: 'https://dp20430eecj0w.cloudfront.net/versions/original/daaf27ce-0083-4a20-a5fb-2315a4ca1e09_aea96a4943b14104845ab840187e2684png.png',
        secureUrl:
          'https://dp20430eecj0w.cloudfront.net/versions/original/daaf27ce-0083-4a20-a5fb-2315a4ca1e09_aea96a4943b14104845ab840187e2684png.png',
        alt: 'Medexer Banner',
        width: 1200,
        height: 630,
      },
      {
        url: 'https://dp20430eecj0w.cloudfront.net/versions/original/daaf27ce-0083-4a20-a5fb-2315a4ca1e09_aea96a4943b14104845ab840187e2684png.png',
        secureUrl:
          'https://dp20430eecj0w.cloudfront.net/versions/original/daaf27ce-0083-4a20-a5fb-2315a4ca1e09_aea96a4943b14104845ab840187e2684png.png',
        alt: 'Medexer Banner',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@medexer',
    creator: '@medexer',
    title: 'Medexer - Blog',

    description:
      'Save lives through blood donation. Connect donors with hospitals to make blood transfusion accessible, safe, and reliable.',
    images: [
      {
        url: 'https://dp20430eecj0w.cloudfront.net/versions/original/daaf27ce-0083-4a20-a5fb-2315a4ca1e09_aea96a4943b14104845ab840187e2684png.png',
        secureUrl:
          'https://dp20430eecj0w.cloudfront.net/versions/original/daaf27ce-0083-4a20-a5fb-2315a4ca1e09_aea96a4943b14104845ab840187e2684png.png',
        width: 300,
        height: 200,
      },
      {
        url: 'https://dp20430eecj0w.cloudfront.net/versions/original/daaf27ce-0083-4a20-a5fb-2315a4ca1e09_aea96a4943b14104845ab840187e2684png.png',
        secureUrl:
          'https://dp20430eecj0w.cloudfront.net/versions/original/daaf27ce-0083-4a20-a5fb-2315a4ca1e09_aea96a4943b14104845ab840187e2684png.png',
        width: 300,
        height: 300,
      },
      {
        url: 'https://dp20430eecj0w.cloudfront.net/versions/original/daaf27ce-0083-4a20-a5fb-2315a4ca1e09_aea96a4943b14104845ab840187e2684png.png',
        secureUrl:
          'https://dp20430eecj0w.cloudfront.net/versions/original/daaf27ce-0083-4a20-a5fb-2315a4ca1e09_aea96a4943b14104845ab840187e2684png.png',
        alt: 'Medexer Banner',
        width: 1200,
        height: 630,
      },
      {
        url: 'https://dp20430eecj0w.cloudfront.net/versions/original/daaf27ce-0083-4a20-a5fb-2315a4ca1e09_aea96a4943b14104845ab840187e2684png.png',
        secureUrl:
          'https://dp20430eecj0w.cloudfront.net/versions/original/daaf27ce-0083-4a20-a5fb-2315a4ca1e09_aea96a4943b14104845ab840187e2684png.png',
        alt: 'Medexer Banner',
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
