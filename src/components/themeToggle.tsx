import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from 'react-icons/md'

const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  let currentTheme = theme === 'system' ? systemTheme : theme;

  let IconButton = () => {
    return (
      (currentTheme == "light") ?
        <MdDarkMode
          color='black'
          size={30}
          className='mt-1'
        />
        :
        <MdLightMode
          color='white'
          size={30}
          className='mt-1'
        />
    );
  }
      

  return (
    <div className='block'>
      <button
        onClick={() => {
          if (theme == "dark") { 
            setTheme("light");
          } else if (theme == "light") {
            setTheme("dark");
          } else {
            if (systemTheme == "dark") {
              setTheme("light");
            } else if (systemTheme == "light") {
              setTheme("dark");
            } else if (systemTheme == undefined) {
              alert("You've discovered an edge-case ERROR, Please report this to the Maintainers using the ErrorID-IH687WISXWKMW. Pardon the Inconvenience.");
            }
          }
        }}
      >
        <IconButton/>
      </button>
    </div>
  )
}

export default ThemeToggle