import './App.css'
import Home from "./assets/svg/svg5.svg";
import Cerca from "./assets/svg/svg7.svg";
import libreria from "./assets/svg/svg9.svg"
import Liked_songs from "./assets/liked-songs-64.png";
import Hero from './components/Hero';
import Player from './components/Player';
function App() {
  return (
    <>
      <main className='main text-text-subdued '>

        <Player />
        <Sidebar />
        <Hero />
      </main>
    </>
  )
}

export default App


function Sidebar() {
  return (

    <div className=' flex flex-col gap-panel-gap'>
      <div className=' bg-background-base rounded-lg'>
        <ul className=' py-2 px-3 '>
          <li className=' py-1 px-3 flex gap-2 hover:text-text-base'>
            <img src={Home} alt="" className=' w-6' />
            <a href='/'>Home</a>
          </li>
          <li className=' py-1 px-3 flex gap-2 hover:text-text-base'>
            <img src={Cerca} alt="" className=' w-6 ' />
            <a href='/cerca'>Cerca</a>
          </li>
        </ul>
      </div>
      <div className=' bg-background-base rounded-lg py-2 px-3 overflow-auto '>
        <div className=' flex justify-between mb-2'>
          <div className=' flex gap-panel-gap items-center'>
            <img src={libreria} alt="" className=' w-6' />
            <p className=' hover:text-text-base'>La tua libreria</p>
          </div>
          <div>
            <span>➕</span>
            <span>➡</span>
          </div>
        </div>

        <div className=' mb-2'>
          <button className=' py-1 px-3 bg-background-highlight rounded-2xl mr-2'>Playlist</button>
          <button className=' py-1 px-3 bg-background-highlight rounded-2xl mr-2'>Artisti</button>
          <button className=' py-1 px-3 bg-background-highlight rounded-2xl mr-2'>Album</button>
        </div>

        {/* mappare array da API  */}
        <div className=' flex gap-panel-gap transition-all hover:bg-background-highlight rounded-lg mb-2'>
          <img src={Liked_songs} alt="liked" className=' rounded-lg' />
          <span>
            <p className=''>
              Brani che ti piacciono
            </p>
            <span><p>Playlist ◽ 614 brani</p></span>
          </span>
        </div>
        <div className=' flex gap-panel-gap transition-all hover:bg-background-highlight rounded-lg mb-2'>
          <img src={Liked_songs} alt="liked" className=' rounded-lg' />
          <span>
            <p className=''>
              Brani che ti piacciono
            </p>
            <span><p>Playlist ◽ 614 brani</p></span>
          </span>
        </div>
      </div>
    </div>
  )
}

