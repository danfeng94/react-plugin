import React, { useContext } from 'react';

const themes = {
  light: {
    foreground: "yellowgreen",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.dark);

export default function MyContext() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.foreground, fontSize: '28px' }}>
      Travel around the world!
    </div>
  );
}

