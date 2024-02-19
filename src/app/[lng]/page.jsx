import Link from 'next/link';
import { useTranslation } from '../../platform/i18n';

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'app/first-page');

  return (
    <div className=''>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/page1`}>{t('to-second-page')}</Link>
      <br />
      <Link href={`/${lng}/client`}>{t('to-client-page')}</Link>
    </div>
  );
}
