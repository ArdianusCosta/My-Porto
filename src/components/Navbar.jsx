import React, { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import axios from 'axios';

const Navbar = ({ lang, setLang }) => {
  const [logo, setLogo] = useState(null);
  const [menu, setMenu] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/logo')
      .then(res => setLogo(res.data))
      .catch(err => console.error("Gagal fetch Logo", err));

    axios.get(`http://localhost:8000/api/navbar?lang=${lang}`)
      .then(res => setMenu(res.data))
      .catch(err => console.error("Gagal fetch Navbar", err));

    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lang]);

  if (!logo) return null;

  return (
    <div className='navbar py-7 flex items-center justify-between'>
      <div className="logo">
        <h1 className='text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white'>
          <a href={logo.url} target='_blank' rel='noopener noreferrer'>{logo.logo}</a>
        </h1>
      </div>

      <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40 ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
        {menu.map((item, index) => (
          <li key={index}>
            <a href={item.slug} className='sm:text-lg text-base font-medium'>{item.navbar}</a>
          </li>
        ))}
        <LanguageSwitcher lang={lang} setLang={setLang} />
      </ul>
    </div>
  );
};

export default Navbar;
