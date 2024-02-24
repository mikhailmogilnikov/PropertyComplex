'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from '../../platform/providers';
import { GlobalStoreProvider } from '@/platform/providers/StoreProvider';
import { Wrappers } from './wrappers';

function Providers({ children, lang }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute='class'>
        <LanguageProvider lang={lang}>
          <GlobalStoreProvider>
            <Wrappers>{children}</Wrappers>
          </GlobalStoreProvider>
        </LanguageProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}

export default Providers;
