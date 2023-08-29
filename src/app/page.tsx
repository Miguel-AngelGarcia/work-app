import Image from 'next/image';
import { ProjectForm, AddColumnModal } from '@/components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AddColumnModal />
    </main>
  );
}
