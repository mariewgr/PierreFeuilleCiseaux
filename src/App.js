import logo from './assets/logo.png';
import './App.css';
import React, { useState } from 'react';
import TouslesJoueurs from './Components/TouslesJoueurs';


function JeuPierreFeuilleCiseau() {
  const [text, setText] = useState(null);
  const [nbJoueur, setNBJoueur] = useState(0);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNBJoueur(text)
  };

  return (
    <div>
      <div className='titre'>
        <img src={logo} className="logo" alt="logo" />
       <h1>
          Bon Jeu!
        </h1>
        </div>
        <div className='nbjoueur'>
            <p> Choisissez le nombre de joueurs :</p>
            <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} />
            <button type="submit">Soumettre</button>
      </form>
      <p>{nbJoueur} Joueurs</p>
          </div>
        <TouslesJoueurs n={nbJoueur}></TouslesJoueurs>
    </div>
  );
}

export default JeuPierreFeuilleCiseau;
