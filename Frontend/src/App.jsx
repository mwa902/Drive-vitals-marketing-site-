import './App.css';
import { ThemeProvider } from './Components/theme';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Home from './pages/Home';
import AboutUs from './pages/aboutus';
import Contact from './pages/contact';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main>
          <Home />
          <AboutUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
