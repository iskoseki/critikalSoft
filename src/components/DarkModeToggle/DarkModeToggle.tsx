// components/DarkModeToggle.tsx
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useDarkMode } from '../../context/DarkModeContext';

const DarkModeToggle: React.FC = () => {

  return (
    <button
      onClick={()=>{}}
      className={`px-4 py-2 ${true ? 'text-gray-500' : 'text-black'} rounded-md`}
    >
      {true ? <SunIcon className='w-6 text-white '/> : <MoonIcon className='w-6'/>}
    </button>
  );
};

export default DarkModeToggle;
