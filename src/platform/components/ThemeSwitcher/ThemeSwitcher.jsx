'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useClientTranslation } from '@/platform/hooks/useClientTranslation';
import { updateThemeColor } from '@/platform/actions/updateThemeColor';

export function ThemeSwitcher() {
  const { t } = useClientTranslation('platform/ThemeSwitcher');
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  updateThemeColor();

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
