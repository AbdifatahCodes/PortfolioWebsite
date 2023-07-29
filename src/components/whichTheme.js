import { useTheme } from "next-themes";

export default function WhichTheme() {
  const { systemTheme, theme, } = useTheme();

  if (theme == "dark") { 
    return("light");
  } else if (theme == "light") {
    return("dark");
  } else {
    if (systemTheme == "dark") {
      return("light");
    } else if (systemTheme == "light") {
      return("dark");
    } else if (systemTheme == undefined) {
      console.log("SystemTheme Variable is undefined.");
    }
  }
}