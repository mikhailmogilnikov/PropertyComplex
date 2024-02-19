'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from '../../platform/providers';

function Providers({ children, lang }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute='class'>
        <LanguageProvider lang={lang}>{children}</LanguageProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}

export default Providers;
