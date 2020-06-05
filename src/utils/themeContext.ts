import React, { useContext } from "react";
import { THEME } from "@src/constants";

type ThemeContextType = {
	theme: string;
	setTheme: (theme: string) => void;
};
export const ThemeContext = React.createContext<ThemeContextType | undefined>(
	undefined
);

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};

export const themeToggle = (setTheme: (theme: string) => void) => (
	currentTheme: string
) => {
	if (currentTheme === THEME.DARK) {
		setTheme(THEME.LIGHT);
	} else {
		setTheme(THEME.DARK);
	}
};

export const themeLabeler = (currentTheme: string) =>
	`Switch to ${currentTheme === THEME.DARK ? "Light" : "Dark"} Theme`;
