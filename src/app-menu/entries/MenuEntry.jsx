'use client';

import dynamic from 'next/dynamic';

const DynamicMenu = dynamic(
  () => import('../domains/Menu').then((mod) => mod.Menu),
  {
    ssr: false,
  },
);

export const MenuEntry = () => <DynamicMenu />;
