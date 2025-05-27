import { Suspense } from 'react';
import AuthClient from './AuthClient';

export default function Auth() {
  return (
    <Suspense fallback={<div className="text-white">Loading auth...</div>}>
      <AuthClient />
    </Suspense>
  );
}

