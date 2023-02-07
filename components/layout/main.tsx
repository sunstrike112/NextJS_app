import { LayoutProps } from 'model';
import Link from 'next/link';
import * as React from 'react';

export interface IMainLayoutProps {
}

export function MainLayout ({children}: LayoutProps) {
  return (
    <div>
      <h1>Main Layout</h1>

      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>

      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
      
      <div>
        {children}
      </div>
    </div>
  );
}
