import DataImage from "./data"

function App() {

  return (
    <>
      <div className="hero grid grid-cols-2">
        <div>
          <div>
            <img src={DataImage.HeroImage} alt="Hero Image Costa" className="w-10 rounded-md" />
            <q>Sesuatu yang indah, Lahir dari Ketekunan.😎</q>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image Costa" className="w-[500px]" />
      </div>
    </>
  )
}

export default App
