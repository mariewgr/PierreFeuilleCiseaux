import React from 'react';
import Joueur from './Joueur.js';

function TouslesJoueurs({ n }) {
  const joueurs = Array.from({ length: n }, (value, index) => (
    <><Joueur key={index}></Joueur><br /><br /><br /><br /><br /></>
  ));

  return <div>{joueurs}</div>;
}

export default TouslesJoueurs;
