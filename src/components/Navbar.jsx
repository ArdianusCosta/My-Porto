import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const Navbar = () => {
    const [logo, setLogo] = useState(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/logo')
        .then(res => setLogo(res.data))
        .catch(err => {
            console.error("Gagal fetch Logo", err);
        })
        const handleScroll = () => {
            if(window.scrollY > 150){
                setActive(true);
            }else{
                setActive(false)
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    if (!logo) return null;

  return (
    <div className='navbar py-7 flex items-center justify-between'>
        <div className="logo">
            <h1 className='text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white'><a href={logo.url} target='blank' rel='nooper noreferrer'>{logo.logo}</a></h1>
        </div>
        <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40 ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
            <li>
                <a href="#home" className='sm:text-lg text-base font-medium'>Home</a>
            </li>
            <li>
                <a href="#about" className='sm:text-lg text-base font-medium'>About Me</a>
            </li>
            <li>
                <a href="#project" className='sm:text-lg text-base font-medium'>Project</a>
            </li>
            <li>
                <a href="#" className='sm:text-lg text-base font-medium'>Blog</a>
            </li>
            <li>
                <a href="#contact" className='sm:text-lg text-base font-medium'>Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar