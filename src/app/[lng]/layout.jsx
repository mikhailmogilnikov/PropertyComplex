/* eslint-disable react/no-danger */
import { Inter } from 'next/font/google';
import { dir } from 'i18next';
import { languages } from '../../platform/i18n/settings';
import './globals.css';
import Providers from './providers';
import Head from './head';
import { ThemeSwitcher } from '@/platform/components/ThemeSwitcher';
import { Gallery } from '@/platform/domains/Gallery';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html suppressHydrationWarning className='dark' lang={lng} dir={dir(lng)}>
      <head>
        <Head />
        {/* Dinamycally sets color on Apple devices top bar on first load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '#fff')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} box-border select-none cursor-default`}
      >
        <Providers lang={lng}>
          {children}
          <ThemeSwitcher />
          <Gallery />
        </Providers>
      </body>
    </html>
  );
}
