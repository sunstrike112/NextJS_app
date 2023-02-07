import { LayoutProps } from 'model';
import Link from 'next/link';
import * as React from 'react';

export function AdminLayout ({children}: LayoutProps) {
  return (
    <div>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>

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
