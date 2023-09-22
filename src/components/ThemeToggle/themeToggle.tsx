import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const ThemeToggle: React.FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const getNextTheme = (): string => {
    if (currentTheme === "dark") return "light";
    if (currentTheme === "light") return "dark";
    console.error("Edge-case ERROR: Report with ErrorID-IH687WISXWKMW");
    return "dark";
  };

  const IconButton: React.FC = () => (
    currentTheme === "light" ? 
      <MdDarkMode color='black' size={30} className='mt-1' /> :
      <MdLightMode color='white' size={30} className='mt-1' />
  );

  return (
    <div className='block'>
      <button role="theme-toggle-button" onClick={() => setTheme(getNextTheme())}>
        <IconButton />
      </button>
    </div>
  );
};

export default ThemeToggle;
