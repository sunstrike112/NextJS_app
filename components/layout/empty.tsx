import { LayoutProps } from 'model';
import * as React from 'react';

export interface IAdminLayoutProps {
}

export function EmptyLayout ({children}: LayoutProps) {
  return (
      <>
        {children}
      </>
  );
}
