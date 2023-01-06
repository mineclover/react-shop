import './App.css';
import React, { useContext } from 'react';

const themes = {
	light: { foreground: 'black', background: 'white' },
	dark: { foreground: 'red', background: 'blue' },
};

const ThemeContext = React.createContext(themes.light);

function App() {
	return (
		<ThemeContext.Provider value={themes.dark}>
			<Toolbar />
		</ThemeContext.Provider>
	);
}

function Toolbar() {
	return (
		<div>
			<ThemedButton />
		</div>
	);
}

function ThemedButton() {
	const theme = useContext(ThemeContext);
	return (
		<button style={{ background: theme.background, color: theme.foreground }}>컨텍스트에 의해 스타일이 변함</button>
	);
}

export default App;
