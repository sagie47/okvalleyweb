'use client';

import useAppHeight from '@/hooks/use-app-height';
import type React from 'react';

const AppHeightProvider = ({ children }: { children: React.ReactNode }) => {
  useAppHeight();
  return <>{children}</>;
};

export default AppHeightProvider;