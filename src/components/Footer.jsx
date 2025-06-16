import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [logo, setLogo] = useState(null);
  const [contact, setContact] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/logo')
      .then(res => setLogo(res.data))
      .catch(err => {
        console.error("Gagal fetch Logo", err);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/api/footer')
      .then(res => setContact(res.data))
      .catch(err => {
        console.error("Gagal ambil data", err);
      });
  }, []);

  if (!logo || !contact.length) return null;

  return (
    <div className='mt-32 py-4 flex md:flex-row flex-col gap-8 md:gap-0 justify-between items-center'>
      <h1 className='text-2xl font-bold'>
        <a href={logo.url} target='_blank' rel='noopener noreferrer'>{logo.logo}</a>
      </h1>
      <div className="flex gap-7">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#project">Project</a>
      </div>
      <div className="flex items-center gap-3">
        {contact
        .filter(item => item.status===1)
        .map((item, index) => (
          <a key={index} href={item.url} target='_blank' rel='noopener noreferrer'>
            <i className={`${item.icon} ri-2x`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
