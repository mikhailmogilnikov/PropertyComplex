import { useTheme } from 'next-themes';
import { useClientTranslation } from '@/platform/hooks/useClientTranslation';
import { updateThemeColor } from '@/platform/actions/updateThemeColor';

export function ThemeSwitcher() {
  const { t } = useClientTranslation('platform/ThemeSwitcher');
  const { theme, setTheme } = useTheme();

  updateThemeColor();

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
