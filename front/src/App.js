import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import { theme } from './Styles/theme';
import Home from './Pages/Home';
import Dust from './Pages/Dust';
import Weather from './Pages/Weather';
import Corona from './Pages/Corona';
import { RecoilRoot } from 'recoil';
import Calendar from './Components/Calendar/Calendar';

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Layout>
          <Calendar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Weather" element={<Weather />} />
            <Route path="/Corona" element={<Corona />} />
            <Route path="/dust" element={<Dust />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
