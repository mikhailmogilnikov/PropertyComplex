import Link from 'next/link';
import { useTranslation } from '@/platform/i18n';

export default async function Page1({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'app/second-page');

  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}`}>{t('back-to-home')}</Link>
    </>
  );
}
