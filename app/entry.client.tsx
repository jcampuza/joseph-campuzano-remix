import { hydrate } from 'react-dom';
import { RemixBrowser } from 'remix';
import { getTheme, updateTheme } from '~/lib/theme';

updateTheme(getTheme());
hydrate(<RemixBrowser />, document);
