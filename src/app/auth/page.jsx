&apos;use client&apos;

import { useSearchParams } from &apos;next/navigation&apos;
import AuthPage from &apos;@/components/auth/AuthPage&apos;

export default function Auth() {
  const searchParams = useSearchParams()
  const mode = searchParams.get(&apos;mode&apos;) || &apos;login&apos;

  return <AuthPage initialMode={mode} />
} 