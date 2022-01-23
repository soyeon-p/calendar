import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import { theme } from './Styles/theme';
import Home from './Pages/Home';
import Dust from './Pages/Dust';
import Weather from './Pages/Weather';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Weather" element={<Weather />} />
            <Route path="/dust" element={<Dust />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
