'use client';

import dynamic from 'next/dynamic';

const DynamicMap = dynamic(
  () => import('../domains/Map').then((mod) => mod.Map),
  {
    ssr: false,
  },
);

export const MapEntry = () => <DynamicMap />;
