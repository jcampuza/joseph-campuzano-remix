import React from 'react';
import { Link as RemixLink, LinkProps } from '@remix-run/react';

export const MyLink = ({ children, ...rest }: LinkProps & { children: React.ReactNode }) => {
  return (
    <RemixLink {...rest} className="underline">
      {children}
    </RemixLink>
  );
};
