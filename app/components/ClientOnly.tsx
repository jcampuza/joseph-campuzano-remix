import { ReactNode } from 'react';
import { useHydrated } from '~/lib/useIsHydrated';

interface ClientOnlyProps {
  fallback?: ReactNode;
  children: () => ReactNode;
}

export const ClientOnly = (props: ClientOnlyProps) => {
  const isHydrated = useHydrated();

  if (isHydrated) {
    return <>{props.children()}</>;
  }

  return <>{props.fallback}</>;
};
