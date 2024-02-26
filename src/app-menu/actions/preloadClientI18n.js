import { useClientTranslation } from '@/platform/hooks/useClientTranslation';

export const preloadClientI18n = () => {
  useClientTranslation('platform/ThemeSwitcher');
};
