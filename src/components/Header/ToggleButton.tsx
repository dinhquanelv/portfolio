import { BsSun, BsMoonStars } from 'react-icons/bs';

import { useDarkMode } from '@/hooks/useDarkMode';

const ToggleButton = () => {
  const { darkMode, handleToggleTheme } = useDarkMode();

  return (
    <button
      className="relative w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700
        flex items-center p-1 border-none outline-none"
      onClick={handleToggleTheme}
      aria-label="toggle"
    >
      <div
        className={`absolute left-1 flex items-center justify-center
      w-4 h-4 bg-light dark:bg-dark rounded-full shadow-md
      transform transition-transform duration-300
      ${darkMode ? 'translate-x-6' : ''}`}
      >
        {darkMode ? <BsMoonStars size={10} /> : <BsSun size={10} />}
      </div>
    </button>
  );
};

export default ToggleButton;
