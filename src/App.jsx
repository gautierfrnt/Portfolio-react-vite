import { BrowserRouter, Routes, Route } from "react-router-dom";
// import styles from "./App.css";
import Home from "./pages/Home";
import ProjetEnergcuma from './pages/ProjetEnergcuma'
import ProjetEDN from './pages/ProjetEDN'
import NoPage from './pages/NoPage'
import PageContact from './pages/PageContact'
import MesProjets from './pages/MesProjets'
import styles from './components/styles/style.css'
import './App.css'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'


function App() {

  function App() {
    return (
      <ReactLenis root>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/Portfolio-react-vite/Mesprojets' element={<MesProjets />} />
            <Route path='/Portfolio-react-vite/Contact' element={<PageContact />} />
            <Route path='/Portfolio-react-vite/projetEDN' element={<ProjetEDN />} />
            <Route path='/Portfolio-react-vite/projetEnergcuma' element={<ProjetEnergcuma />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </ReactLenis>
    );
  }
}
  

export default App;
