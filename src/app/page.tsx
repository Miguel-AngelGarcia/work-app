import Image from 'next/image';
import {
  ProjectForm,
  AddColumnModal,
  Sidebar,
  MainContent,
} from '@/components';
import React from 'react';

export default function Home() {
  const noice = (): void => {
    console.log('HI');
  };

  return (
    <div className="below-nav">
      <Sidebar />
      <MainContent />
    </div>
  );
}
