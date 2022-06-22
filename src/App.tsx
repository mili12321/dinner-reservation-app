import React, {useState, useMemo} from 'react';
import { Routes , Route, BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './cmps/Navbar';
import {routes} from './routes.js'
import { componentTypes } from './utils/componentTypes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, PaletteMode } from '@mui/material';
import { ColorModeContext } from './context/ColorModeContext';
import { OrderProvider } from './context/orderContext/OrderProvider';
import { NavigateBackBtn } from './cmps/NavigateBackBtn';


const getDesignTheme = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          primary: {
            main: '#3f51b5',
          },
          secondary: {
            main: '#f50057',
          },
        } : {
          primary: {
            main: '#3f51b5',
          },
          secondary: {
            main: '#f50057',
          },
        }
      )
    },
    typography: {
      fontFamily: 'Open Sans',
    },
    shape: {
      borderRadius: 4,
    },
    spacing: 8,
    overrides: {
      MuiButton: {
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 48,
          padding: '0 30px',
        },
      },
    },
    props: {
      MuiTooltip: {
        arrow: true,
      },
    },
});

function App() {

  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTheme(mode)), [mode]);

  const getComponent = (componentKey: string) => {
    const Component: React.FC = componentTypes[componentKey];
    return <Component/>
  }

  return (
    <OrderProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Router>
            <Navbar/>
            <NavigateBackBtn/>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  element={getComponent(route.component)}
                  path={route.path}
                />
              ))}
            </Routes>
          </Router>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </OrderProvider>
  );
}

export default App;
