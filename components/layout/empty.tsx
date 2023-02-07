import { LayoutProps } from 'model';
import * as React from 'react';

export function EmptyLayout ({children}: LayoutProps) {
  return (
      <>
        {children}
      </>
  );
}
