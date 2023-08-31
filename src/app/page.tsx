import Image from 'next/image';
import { ProjectForm, AddColumnModal } from '@/components';
import React from 'react';

export default function Home() {
  const noice = (): void => {
    console.log('HI');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
