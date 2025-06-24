import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import PreLoader from './components/PreLoader.jsx';
import 'remixicon/fonts/remixicon.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Root() {
  const [lang, setLang] = useState("id");

  return (
    <>
      <PreLoader />
      <div className="container mx-auto px-4">
        <Navbar lang={lang} setLang={setLang} />
        <App lang={lang} setLang={setLang} />
        <Footer />
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
