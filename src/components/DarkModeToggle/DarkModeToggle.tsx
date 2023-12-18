// components/DarkModeToggle.js
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Verifica si el usuario ya ha seleccionado el modo oscuro
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode));
    } else {
      // Si no hay preferencia almacenada, utiliza la configuración del sistema
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    // Guarda la preferencia del usuario en el almacenamiento local
    localStorage.setItem('darkMode', JSON.stringify(newMode));

    // Aplica la clase al elemento body o a tu contenedor principal
    document.body.classList.toggle('dark-mode', newMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? <SunIcon className='w-6'/> : <MoonIcon className='w-6'/>}
    </button>
  );
};

export default DarkModeToggle;
