import logo from './assets/logo.png';
import pierre from './assets/pierre.png';
import feuille from './assets/feuille.png';
import ciseaux from './assets/ciseaux.png';
import gagne from './assets/gagne.png';
import perdu from './assets/perdu.png';
import egalite from './assets/egalite.png';
import './App.css';
import { handleClick, handleClickOrdinateur } from './handleClick';
import React, { useState } from 'react';

function JeuPierreFeuilleCiseau() {
  const [coupJoueur, setCoupJoueur] = useState(null); 
  const [coupOrdinateur, setCoupOrdinateur] = useState(null);
  const [coupOrdinateur2, setCoupOrdinateur2] = useState(null);
  const [choixJoueur, setChoixJoueur] = useState(null); // enregistre si le joueur veux jouer par lui-même ou faire jouer un deuxième ordinateur 
  const [resultat, setResultat] = useState(null);

  return (
    <div>
      <div className='titre'>
        <img src={logo} className="logo" alt="logo" />
       <h1>
          Bon Jeu!
        </h1>
        </div>
      <div className='choix'>
        <p> Choisissez votre Joueur</p>
        <button className='bouton' onClick={() => setChoixJoueur(0)}>
          Humain 
          </button>
      <button onClick={() => {setChoixJoueur(1); handleClickOrdinateur(setCoupOrdinateur, setCoupOrdinateur2, setResultat, null, null)}}>
        Ordinateur
        </button>
      </div>
      <div>
        {choixJoueur === 0 ?  <div className='joueur'>
      {coupJoueur !== null && (
        <p>
        {coupJoueur === 0 ? <img src={pierre} className="pierre" alt="pierre" /> : 
        coupJoueur === 1 ? <img src={feuille} className="feuille" alt="feuille" /> :
        <img src={ciseaux} className="ciseaux" alt="ciseaux" />}
      </p>
      )}
      <p>Choisissez votre coup :</p>
      <button onClick={() => handleClick(0, null, setCoupJoueur, setCoupOrdinateur2, setResultat)}>Pierre </button>
      <button onClick={() => handleClick(1, null, setCoupJoueur, setCoupOrdinateur2, setResultat)}>Feuille</button>
      <button onClick={() => handleClick(2, null, setCoupJoueur, setCoupOrdinateur2, setResultat)}>Ciseau</button>
      </div>
      : <div className='Ordinateur1'>
      {coupOrdinateur !== null && (
        <p>{coupOrdinateur === 0 ? <img src={pierre} className="pierre" alt="pierre" /> : 
        coupOrdinateur === 1 ? <img src={feuille} className="feuille" alt="feuille" /> :
        <img src={ciseaux} className="ciseaux" alt="ciseaux" />}</p>
      )}
      </div>}
      </div>
      <div className='Ordinateur2'>
      {coupOrdinateur2 !== null && (
        <p>{coupOrdinateur2 === 0 ? <img src={pierre} className="pierre" alt="pierre" /> : 
        coupOrdinateur2 === 1 ? <img src={feuille} className="feuille" alt="feuille" /> :
        <img src={ciseaux} className="ciseaux" alt="ciseaux" />}</p>
      )}
      </div>
      {resultat !== null && <p className='result'> {resultat === 0 ? <img src={egalite} className="egalite" alt="egalite" /> : 
        resultat === 1 ? <img src={gagne} className="gagne" alt="gagne" /> :
        <img src={perdu} className="perdu" alt="perdu" />}</p>}
    </div>
  );
}

export default JeuPierreFeuilleCiseau;
