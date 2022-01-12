import { ThemeProvider } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import { theme } from "./Styles/theme";
import Home from "./Pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;