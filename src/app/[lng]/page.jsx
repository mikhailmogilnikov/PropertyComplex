import { MapEntry } from '@/app-map';
import { MenuEntry } from '@/app-menu';

export default function Main() {
  return (
    <main className='w-full min-h-dvh overflow-hidden flex justify-center'>
      <MenuEntry />
      <MapEntry />
    </main>
  );
}
