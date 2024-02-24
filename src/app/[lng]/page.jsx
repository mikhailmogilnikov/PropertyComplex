import { MapEntry } from '@/app-map';
import { MenuEntry } from '@/app-menu';

export default function Main() {
  return (
    <main className='w-full min-h-dvh overflow-hidden'>
      <MenuEntry />
      <MapEntry />
    </main>
  );
}
