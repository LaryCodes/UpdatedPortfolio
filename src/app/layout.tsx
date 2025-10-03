// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Muhammad Laraib | Full Stack Developer & AI Engineer',
  description: 'Experienced Full Stack Developer specializing in Next.js, React, Python, and AI technologies. Creating next-generation web applications with cutting-edge solutions.',
  keywords: [
    'Muhammad Laraib',
    'Full Stack Developer',
    'AI Engineer',
    'Next.js Developer',
    'React Developer',
    'Python Developer',
    'Web Development',
    'Software Engineer',
    'Karachi Developer',
    'GIAIC Student'
  ].join(', '),
  authors: [{ name: 'Muhammad Laraib' }],
  creator: 'Muhammad Laraib',
  publisher: 'Muhammad Laraib',
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
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muhammadlaraib.dev',
    siteName: 'Muhammad Laraib Portfolio',
    title: 'Muhammad Laraib | Full Stack Developer & AI Engineer',
    description: 'Experienced Full Stack Developer specializing in Next.js, React, Python, and AI technologies. Creating next-generation web applications with cutting-edge solutions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Laraib - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Laraib | Full Stack Developer & AI Engineer',
    description: 'Experienced Full Stack Developer specializing in Next.js, React, Python, and AI technologies.',
    images: ['/og-image.png'],
    creator: '@larycodes',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://muhammadlaraib.dev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/resume.pdf" as="document" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        
        {/* Viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Muhammad Laraib",
              "jobTitle": "Full Stack Developer",
              "description": "Experienced Full Stack Developer specializing in Next.js, React, Python, and AI technologies",
              "url": "https://muhammadlaraib.dev",
              "sameAs": [
                "https://github.com/larycodes",
                "https://linkedin.com/in/larycodes"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Karachi",
                "addressCountry": "Pakistan"
              },
              "email": "larycodes@gmail.com",
              "telephone": "+92 322 0237437",
              "alumniOf": {
                "@type": "Organization",
                "name": "Sir Syed University of Engineering and Technology"
              },
              "knowsAbout": [
                "JavaScript",
                "TypeScript", 
                "Python",
                "React",
                "Next.js",
                "Full Stack Development",
                "AI Engineering"
              ]
            })
          }}
        />
      </head>
      <body 
        className={`${inter.className} bg-black text-white antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-yellow-400 text-black px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        
        {/* Main content */}
        <div id="main-content">
          {children}
        </div>
        
        {/* Analytics and other scripts can be added here */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics or other analytics scripts */}
            {/* Add your tracking scripts here */}
          </>
        )}
      </body>
    </html>
  );
}