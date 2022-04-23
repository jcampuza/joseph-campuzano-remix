import React from 'react';
import { cn } from '../lib/cn';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
  return <div className={cn('max-w-4xl mx-auto p-4', props.className)}>{props.children}</div>;
};
