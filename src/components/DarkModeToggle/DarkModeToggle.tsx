// components/DarkModeToggle.tsx
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useDarkMode } from '../../context/DarkModeContext';

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`px-4 py-2 ${isDarkMode ? 'text-gray-500' : 'text-black'} rounded-md`}
    >
      {isDarkMode ? <SunIcon className='w-6 '/> : <MoonIcon className='w-6'/>}
    </button>
  );
};

export default DarkModeToggle;
