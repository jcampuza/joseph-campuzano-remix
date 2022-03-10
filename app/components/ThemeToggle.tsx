import { useEffect, useState } from 'react';
import { DarkModeIcon, LightModeIcon } from '~/components/Icons';
import { getTheme, updateTheme } from '~/lib/theme';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(getTheme());
  const handleThemeChange = () => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
  };

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  return (
    <div>
      <label className="cursor-pointer">
        <input
          className="sr-only"
          type="checkbox"
          checked={theme === 'dark'}
          onChange={handleThemeChange}
        />
        {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
      </label>
    </div>
  );
};
