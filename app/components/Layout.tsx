import React from 'react';
import { Container } from './Container';
import { Footer } from './Footer';
import { Header } from './Header';
import { MyLink } from './Link';

const Subheader = () => {
  return (
    <Container>
      <div className="flex space-x-2">
        <MyLink to="/">Home</MyLink>
        <MyLink to="/about">About</MyLink>
      </div>
    </Container>
  );
};

export const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col justify-start">
      <Header />
      <div className="flex-1">
        <Subheader />
        <Container className="">{props.children}</Container>
      </div>
      <Footer />
    </div>
  );
};
