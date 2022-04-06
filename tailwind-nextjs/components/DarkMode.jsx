import { useState } from 'react';

const useGlobalDarkModeState = () => {
    const [darkMode, setDarkMode] = useState(false);
    // const handleDarkMode = () => {
    //     setDarkMode(prev => !prev)
    // }
    return { darkMode, setDarkMode };
};

export default useGlobalDarkModeState;
