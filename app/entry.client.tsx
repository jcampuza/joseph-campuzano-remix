import { RemixBrowser } from '@remix-run/react';
import { hydrate } from 'react-dom';
import { getTheme, updateTheme } from '~/lib/theme';

updateTheme(getTheme());
hydrate(<RemixBrowser />, document);
