import { FC } from 'react';
import {
  ErrorBoundaryComponent,
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix';
import { defaultMetadata } from '~/config/meta';
import { Layout } from './components/Layout';
import { MyLink } from './components/Link';
import styles from './tailwind.css';

const isDev = process.env.NODE_ENV === 'development';

export const links: LinksFunction = () => {
  return [
    // Styles
    { rel: 'stylesheet', href: styles },

    // Fonts
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
    },

    // Icons
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
  ];
};

export const meta: MetaFunction = ({ location, data }) => {
  return {
    title: defaultMetadata.title,
    description: defaultMetadata.description,

    // Twitter
    'twitter:card': 'summary',
    'twitter:creator': 'CampuzanoJoe',

    // OG
    'og:url': `https://josephcampuzano.com${location.pathname}`,
    'og:image': defaultMetadata.image,
    'og:title': defaultMetadata.title,
    'og:description': defaultMetadata.description,
  };
};

const HtmlWrapper: FC = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <script
          data-host="https://microanalytics.io"
          data-dnt="false"
          src="https://microanalytics.io/js/script.js"
          id="ZwSg9rf6GA"
          async
          defer
        ></script>
      </head>
      <body className="min-h-screen bg-white">
        {children}

        <ScrollRestoration />
        <Scripts />
        {isDev && <LiveReload />}
      </body>
    </html>
  );
};

export default function App() {
  return (
    <HtmlWrapper>
      <Outlet />
    </HtmlWrapper>
  );
}

export const CatchBoundary = () => {
  const caught = useCatch();

  return (
    <HtmlWrapper>
      <Layout>
        <div className="mb-4">
          <h2>Error: {caught.status}</h2>
          <p>{caught.statusText}</p>
        </div>

        <MyLink to="/">Go back to a known land! 🌄</MyLink>
      </Layout>
    </HtmlWrapper>
  );
};

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <HtmlWrapper>
      <Layout>
        <div className="mb-4 space-y-2">
          <h2>Oops. There was an issue on our end.</h2>

          {isDev && (
            <>
              <p>{error.message}</p>
              <pre className="p-4 font-mono text-xs bg-slate-300 w-100 whitespace-pre-wrap">
                {error.stack}
              </pre>
            </>
          )}
        </div>

        <MyLink to="/">Go back to a known land! 🌄</MyLink>
      </Layout>
    </HtmlWrapper>
  );
};
