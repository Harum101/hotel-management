import { Dispatch, SetStateAction, createContext } from "react";

// Defines the structure
type ThemeContextType = {
  darkTheme: boolean;
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
};

// Sets initials values for the structure
const ThemeContext = createContext<ThemeContextType>({
  darkTheme: false,
  setDarkTheme: () => null,
});

export default ThemeContext;
