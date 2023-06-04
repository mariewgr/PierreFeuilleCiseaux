import Ciseaux from './Ciseaux';
import Pierre from './Pierre';
import Feuille from './Feuille';
import { useState } from 'react';
import { JeuJoueur, JeuOrdinateur } from './../handleClick';
import gagne from './../assets/gagne.png';
import perdu from './../assets/perdu.png';
import egalite from './../assets/egalite.png';

const Joueur =  () => {
    const [coupJoueur, setCoupJoueur] = useState(null); 
    const [coupOrdinateur1, setCoupOrdinateur1] = useState(null);
    const [coupOrdinateur2, setCoupOrdinateur2] = useState(null);
    const [choixJoueur, setChoixJoueur] = useState(null);
    const [resultat, setResultat] = useState(null);

 return (<div> 
        <div className='choix'>
        <p> Choisissez votre Joueur</p>
        <button className='bouton' onClick={() => setChoixJoueur(0)}>
          Humain 
          </button>
      <button onClick={() => {setChoixJoueur(1); JeuOrdinateur(setCoupOrdinateur1, setCoupOrdinateur2, setResultat, null, null)}}>
        Ordinateur
        </button>
      </div>
      <div>
        {choixJoueur === 0 ? 
         <div className='joueur'>
        <p>
        {coupJoueur}
      </p>
      <p>Choisissez votre coup :</p>
      <button onClick={() => {JeuJoueur(Pierre, setCoupJoueur, setCoupOrdinateur2, setResultat, null)}}>Pierre </button>
      <button onClick={() => {JeuJoueur(Feuille, setCoupJoueur, setCoupOrdinateur2, setResultat, null)}}>Feuille</button>
      <button onClick={() => {JeuJoueur(Ciseaux, setCoupJoueur, setCoupOrdinateur2, setResultat, null)}}>Ciseaux</button>
      </div>
      : <div className='Ordinateur1'>
      {
        <p>{coupOrdinateur1}</p>
      }
      </div>}
      </div>
      <div className='Ordinateur2'>
      {coupOrdinateur2 !== null && (
        <p>{coupOrdinateur2}</p>
      )}
      </div>
      {resultat !== null && <p className='result'> {resultat === 0 ? <img src={egalite} className="egalite" alt="egalite" /> : 
        resultat === 1 ? <img src={gagne} className="gagne" alt="gagne" /> :
        <img src={perdu} className="perdu" alt="perdu" />}</p>}
</div>)
}

export default Joueur;