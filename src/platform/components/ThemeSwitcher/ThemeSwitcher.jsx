'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useClientTranslation } from '@/platform/hooks/useClientTranslation';

export function ThemeSwitcher() {
  const { t } = useClientTranslation('platform/ThemeSwitcher');
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (resolvedTheme === 'dark') {
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute('content', '#000000');
    } else {
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute('content', '#ffffff');
    }
  }, [resolvedTheme]);

  if (!mounted) return null;

  return (
    <div className='mt-10'>
      <h1 className='w-96'>
        {t('currentTheme')} {theme}
      </h1>
      <button type='button' onClick={() => setTheme('system')}>
        {t('system')}
      </button>
      <button className='ml-10' type='button' onClick={() => setTheme('light')}>
        {t('light')}
      </button>
      <button className='ml-10' type='button' onClick={() => setTheme('dark')}>
        {t('dark')}
      </button>
    </div>
  );
}
