'use client';

import { useSearchParams } from 'next/navigation';
import AuthPage from '@/components/auth/AuthPage';

export default function Auth() {
  const searchParams = useSearchParams()
  const mode = searchParams.get('mode') || 'login';

  return <AuthPage initialMode={mode} />
} 