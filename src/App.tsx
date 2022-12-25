import { useEffect } from 'react';
import { themeChange } from 'theme-change';

import HomePage from './pages/HomePage';

export default function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div>
      <HomePage />
    </div>
  );
}
