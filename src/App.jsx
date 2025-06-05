import DataImage from "./data"
import {listTools, listProyek} from "./data";

function App() {

  return (
    <>
    {/*Home*/}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.TekunImage} alt="Hero Image Costa" className="w-10 rounded-md" loading="lazy"/>
            <q>Sesuatu yang indah, Lahir dari Ketekunan.😎</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hai, Kenalin Saya <span className="animated-text bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">Costa</span>
          </h1>
          <p className="text-base/loose mb-6 opacity-50">Saya seorang full stack web developer yang suka bikin hal-hal keren dan bermanfaat lewat kode. Mulai dari tampilan depan yang menarik sampai ke sistem backend yang solid, saya menikmati proses membangun aplikasi web dari awal sampai jadi. Di sini, kamu bisa lihat beberapa proyek yang pernah saya kerjakan. Saya percaya bahwa setiap baris kode punya cerita. Dan yaa portofolio ini adalah tempat saya berbagi cerita itu. Terima kasih sudah mampir. Kalau kamu tertarik ngobrol atau kerja bareng, jangan ragu untuk hubungi saya ya!
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="btn-hover bg-violet-700 text-white p-4 rounded-2xl hover:bg-violet-600 transition-all duration-500">
              Unduh CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a href="#" className="btn-hover bg-zinc-700 text-white p-4 rounded-2xl hover:bg-zinc-600 transition-all duration-500">
              Lihat Project <i className="ri-eye-fill ri-lg"></i>
            </a>
          </div>

        </div>
        <img src={DataImage.HeroImage} alt="Hero Image Costa" className="w-[500px] md:ml-auto" loading="lazy"/>
      </div>

      {/*About Me*/}
      <div className="about mt-32 py-10">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
          <img src={DataImage.Costaaja} alt="About Image atas Costa" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
          <p className="text-base/loose mb-10 text-zinc-300">
            Halo, saya Ardianus Caesar Emanual Ruicosta Duu — tapi kamu bisa panggil saya <span className="text-violet-500 font-semibold">Costa</span>. Saya adalah seorang Full Stack Web Developer yang memiliki minat besar dalam membangun solusi digital yang efisien, menarik, dan fungsional.
            Saya senang bekerja dari sisi frontend hingga backend, karena saya percaya bahwa memahami keseluruhan proses pengembangan akan menghasilkan produk yang lebih utuh dan berkualitas.
            Dengan pendekatan yang kreatif dan perhatian terhadap detail, saya selalu berusaha menciptakan pengalaman pengguna yang menyenangkan dan performa aplikasi yang solid.
            Ketika tidak sedang ngoding, saya suka mengeksplorasi teknologi baru, bereksperimen dengan UI/UX, atau sekadar ngulik ide-ide kecil yang bisa jadi besar.
            Portofolio ini saya buat untuk membagikan hasil kerja saya, sekaligus sebagai ruang bermain dan eksplorasi teknologi. Terima kasih sudah berkunjung — saya harap kamu bisa menemukan sesuatu yang menginspirasi di sini.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.Costaaja} alt="About Image bawah Costa" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
            <div className="flex items-center gap-6">
              <div className="transition duration-300 hover:scale-105 hover:text-violet-400">
                <h1 className="text-4xl mb-1">13<span className="text-violet-500">+</span></h1>
                <p>Project Selesai</p>
              </div>
              <div className="transition duration-300 hover:scale-105 hover:text-violet-400">
                <h1 className="text-4xl mb-1">3<span className="text-violet-500">+</span></h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        {/*Tools*/}
        <div className="tools mt-32">
            <h1 className="text-4xl/snug font-bold mb-4">Tools yang saya pakai</h1>
            <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">Berikut Ini beberapa Tools yang pernah saya pakai untuk pembuatan Website ataupun Desain.</p>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listTools.map(tool => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id}>
                <img src={tool.gambar} alt="Tools Image Costa" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
            </div>
        </div>
      </div>

      
      {/*Project*/}
      <div className="project mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">Project</h1>
        <p className="text-base/loose text-center opacity-50">Berikut ini beberapa Project yang pernah saya kerjakan</p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {listProyek.map(project => (
                <div className="p-4 bg-zinc-800 rounded-md" key={project.id}>
                  <img src={project.gambar} alt="Project Image Costa" loading="lazy" />
                  <div>
                    <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
                    <p className="text-base/loose mb-4">{project.desk}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                      ))}
                    </div>
                      <div className="mt-8 text-center"> 
                        <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Lihat Project</a>
                      </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  )
}

export default App