'use client';

import { useSearchParams } from 'next/navigation';
import AuthPage from './AuthPage';

export default function AuthRoutePage() {
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode') || 'login';

  // This key forces AuthPage to re-render when mode changes in URL
  return <AuthPage key={mode} initialMode={mode} />;
}
