"use client";

import { useHasMounted } from "@/app/hooks/useHasMounted";
import type { ReactNode } from "react";

export default function ClientOnly({
  children,
  fallback = null,
}: {
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
