import { useTranslation } from '../i18n/client';
import { useLangContext } from '../providers';

export const useClientTranslation = (filePath = '') => {
  const currentLanguage = useLangContext();

  return useTranslation(currentLanguage, filePath);
};
