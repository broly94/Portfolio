import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import { useMemo, useState } from 'react';
import { ColorModeContext } from '../context/ColorModeContex';

export const AppTheme = ({ children }) => {
	const [mode, setMode] = useState('light');
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[]
	);

	const themeSelected = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					primary: {
						main: '#1e1e1e',
					},
					secondary: {
						main: '#E02401',
					},
					white: {
						main: '#FFFFFF',
					},
					textColor: {
						secondary: '#FFFFFF',
					},
				},
				typography: {
					fontFamily: [
						'-apple-system',
						'BlinkMacSystemFont',
						'"Segoe UI"',
						'Roboto',
						'"Helvetica Neue"',
						'Arial',
						'sans-serif',
						'"Apple Color Emoji"',
						'"Segoe UI Emoji"',
						'"Segoe UI Symbol"',
					].join(','),
				},
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={themeSelected}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};
