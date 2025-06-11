import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/logo')
    .then(res => setLogo(res.data))
    .catch(err => {
      console.error("Gagal fetch Logo", err);
    })
  })

  if(!logo) return null;

  return (
    <div className='mt-32 py-4 flex md:flex-row flex-col gap-8 md:gap-0 justify-between items-center'>
        <h1 className='text-2xl font-bold'>
          <a href={logo.url}>{logo.logo}</a>
        </h1>
        <div className="flex gap-7">
            <a href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#project">Project</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="https://github.com/ArdianusCosta">
                <i className='ri-github-fill ri-2x'></i>
            </a>
            <a href="https://www.instagram.com/costaaja02">
                <i className='ri-instagram-fill ri-2x'></i>
            </a>
            <a href="mailto:costaaja017@gmail.com">
                <i className='ri-mail-fill ri-2x'></i>
            </a>
            <a href="https://discord.com/users/1325733512229163008">
                <i className='ri-discord-fill ri-2x'></i>
            </a>
        </div>
    </div>
  )
}

export default Footer