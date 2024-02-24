import { MapEntry } from '@/app-map/entries/MapEntry';
import { MenuEntry } from '@/app-menu/entries/MenuEntry';

export default function Main() {
  return (
    <main className='w-full min-h-dvh overflow-hidden'>
      <MenuEntry />
      <MapEntry />
    </main>
  );
}
