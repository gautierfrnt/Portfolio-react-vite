import energcuma from '../assets/energcuma.png'
import edn from '../assets/E-DN.png'

const Projets = () => {
    return (
    <>
        <h1 className="red-title">Mes projets</h1>
        <div className='projet-img'>
            <a href="./projetEnergcuma"><img className="img-projet" src={energcuma} alt="" /></a>
            <a href="./projetEDN"><img className="img-projet" src={edn} alt="" /></a>
        </div>
    </>
    )
};
  
export default Projets;