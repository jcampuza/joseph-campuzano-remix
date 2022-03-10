import { isSSR } from '~/lib/useSSR';

export const THEME_KEY = 'jc:theme';

type Theme = 'dark' | 'light';

export const getTheme = (): Theme => {
  if (isSSR().isServer) {
    return 'light';
  }

  const storageTheme = localStorage.getItem(THEME_KEY) as Theme;
  if (storageTheme) {
    return storageTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const updateThemeInStorage = (theme: Theme) => {
  localStorage.setItem(THEME_KEY, theme);
};

const updateThemeInDom = (theme: Theme) => {
  const documentElementClassList = document.documentElement.classList;
  theme === 'dark' ? documentElementClassList.add('dark') : documentElementClassList.remove('dark');
};

export const updateTheme = (theme: Theme) => {
  updateThemeInStorage(theme);
  updateThemeInDom(theme);
};
