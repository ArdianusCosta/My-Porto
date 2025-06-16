import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [motivasi, setMotivasi] = useState(null);

  useEffect(()=> {
  axios.get('http://localhost:8000/api/motivasi')
  .then(res => setMotivasi(res.data))
  .catch(err => {
    console.error("Gagal ambil data", err);
  })
},[] )

const [home, setHome] = useState(null);

useEffect(()=>{
  axios.get('http://localhost:8000/api/deskripsi')
  .then(res => setHome(res.data))
  .catch(err => {
    console.error("Gagal ambil data", err);
  })
}, [])

const [about, setAbout] = useState(null);

useEffect(()=>{
  axios.get('http://localhost:8000/api/about-me')
  .then(res=>setAbout(res.data))
  .catch(err => {
    console.error("Gagal mengambil data", err);
  })
}, [])

const [tool, setTool] = useState(null);
const [listTools, setListTools] = useState([]);

useEffect(() => {
  axios.get('http://localhost:8000/api/tools')
    .then(res => setTool(res.data))
    .catch(err => console.error("Gagal ambil data tools", err));

  axios.get('http://localhost:8000/api/tool-pakai')
    .then(res => setListTools(res.data))
    .catch(err => console.error("Gagal ambil data tool pakai", err));
}, []);

const [project, setProject] = useState([]);

useEffect(() => {
  axios.get('http://localhost:8000/api/project')
    .then(res => setProject(res.data))
    .catch(err => {
      console.error("Gagal ambil data", err);
    });
}, []);

  if(!motivasi) return null;
  if(!home) return null;
  if(!about) return null;
  if(!tool) return null;
  if(!project) return null;

  return (
    <>
    {/*Home*/}
    <div className="container mx-auto px-4">
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">

        {/* Kiri: Quote + Intro + Tombol */}
        <div>
          {/* Quote Box */}
          {motivasi && (
             <div className="animate__animated animate__fadeInDown animate__delay-2s flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
             <img src={motivasi.foto_motivasi} alt="Hero Image Costa" className="w-10 rounded-md" loading="lazy" />
             <q>{motivasi.motivasi}</q>
           </div>
          )}

          {/* Intro + Paragraf + Tombol */}
          <div className="animate__animated animate__fadeInUp animate__delay-2s">
            <h1 className="text-5xl/tight font-bold mb-6">
              Hai, Kenalin Saya <span className="animated-text bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">{home.judul}</span>
            </h1>
            <p className="text-base/loose mb-6 opacity-50">
              {home.isi}
            </p>
            <div className="flex items-center sm:gap-4 gap-2">
              <a href="#" className="btn-hover bg-violet-700 text-white p-4 rounded-2xl hover:bg-violet-600 transition-all duration-500">
                Unduh CV <i className="ri-download-line ri-lg"></i>
              </a>
              <a href="#project" className="btn-hover bg-zinc-700 text-white p-4 rounded-2xl hover:bg-zinc-600 transition-all duration-500">
                Lihat Project <i className="ri-eye-fill ri-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Kanan: Gambar */}
        <div className="animate__animated animate__fadeInRight animate__delay-3s">
          <img src={home.foto_home} alt="Hero Image Costa" className="w-[500px] md:ml-auto animate__animated animate__fadeInRight animate__delay-3s" loading="lazy"/>
        </div>

      </div>
    </div>


      {/*About Me*/}
      <div className="about mt-32 py-10" id="about">
      <h1 className="text-center text-4xl font-bold mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{about.judul}</h1>
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.01]" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
          <img src={about.foto_about_me} alt="About Image atas Costa" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
          <p className="text-base/loose mb-10 text-zinc-300">
            Halo, saya Ardianus Caesar Emanual Ruicosta Duu — tapi kamu bisa panggil saya <span className="text-violet-500 font-semibold">{about.nama_isi}</span>. {about.isi}
          </p>
          <div className="flex items-center justify-between">
            <img src={about.foto_about_me} alt="About Image bawah Costa" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
            <div className="flex items-center gap-6">
              <div className="transition duration-300 hover:scale-105 hover:text-violet-400">
                <h1 className="text-4xl mb-1">{about.project_selesai}<span className="text-violet-500">+</span></h1>
                <p>Project Selesai</p>
              </div>
              <div className="transition duration-300 hover:scale-105 hover:text-violet-400">
                <h1 className="text-4xl mb-1">{about.tahun_pengalaman}<span className="text-violet-500">+</span></h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        {/*Tools*/}
        <div className="tools mt-32">
            <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{tool.judul}</h1>
            <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">{tool.isi}</p>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map(tool => (
                <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.urutan_tools} data-aos-once="true">
                  <img src={tool.foto_tool} alt="Tools Image Costa" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
                  <div>
                    <h4 className="font-bold">{tool.judul_tool}</h4>
                    <p className="opacity-50">{tool.deskripsi_tool}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
      
      {/*Project costa*/}
      <div className="project mt-32 py-10" id="project">
      <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
      <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
        Berikut ini beberapa Project yang pernah saya kerjakan
      </p>

      <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {project.map((projectItem, idx) => (
          <div className="p-4 bg-zinc-800 rounded-md" key={idx} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={projectItem.urutan_project} data-aos-once="true">
            <img src={projectItem.foto_project} alt="Project Image Costa" loading="lazy" />
            <div>
              <h1 className="text-2xl font-bold my-4">{projectItem.judul_project}</h1>
              <p className="text-base/loose mb-4">{projectItem.isi_project}</p>
              <div className="flex flex-wrap gap-2">
                {projectItem.bahasa_pemrograman.map((bahasa, index) => (
                  <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{bahasa}</p>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a href={projectItem.url_project} className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600" target="_blank" rel="noopener noreferrer">
                  Lihat Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

      {/*Contact costa*/}
      <div className="contact mt-32 sm:p-10 p-0" id="contact">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Contact</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari terhubungi dengan Saya</p>
        <form action="https://formsubmit.co/costaaja017@gmail.com" method="POST"  className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukan Nama lengkap anda..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukan Email anda..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div  className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" placeholder="Masukan pesan anda..." className="border border-zinc-500 p-2 rounded-md" required cols="45" rows="7"></textarea>
            </div>
            <div className="text-center">
             <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App