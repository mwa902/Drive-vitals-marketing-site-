import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './Components/theme';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Home from './pages/Home';
import AboutUs from './pages/aboutus';
import Contact from './pages/contact';
import NotFound from './pages/NotFound';

// Main scrollable single-page layout
function MainPage() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
