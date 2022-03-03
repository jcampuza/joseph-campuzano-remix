import { Link } from 'remix';
import { cn } from '../lib/cn';
import { FCWithClassName } from '../lib/types';
import { Container } from './Container';

export const Header: FCWithClassName = (props) => {
  return (
    <header
      className={cn(
        'bg-gradient-to-bl from-pink-900 to-indigo-900 dark:via-neutral-900 text-white shadow-md',
        props.className,
      )}
    >
      <Container>
        <Link to="/" className="text-md font-mono">
          Joseph Campuzano
        </Link>
      </Container>
    </header>
  );
};
