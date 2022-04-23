import { Link } from '@remix-run/react';
import { ClientOnly } from '~/components/ClientOnly';
import { ThemeToggle } from '~/components/ThemeToggle';
import { cn } from '../lib/cn';
import { Container } from './Container';

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <header
      className={cn(
        'bg-gradient-to-bl from-pink-900 to-indigo-900 dark:via-neutral-900 text-white shadow-md',
        props.className,
      )}
    >
      <Container className="flex justify-between">
        <Link to="/" className="text-md font-mono">
          Joseph Campuzano
        </Link>
        <ClientOnly>{() => <ThemeToggle />}</ClientOnly>
      </Container>
    </header>
  );
};
