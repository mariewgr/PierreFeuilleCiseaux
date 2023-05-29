function handleClick(coup, fn, setJoueur, setOrdinateur, setRes) {
    var coupOrdinateur = Math.floor(Math.random() * 3); // 0 = pierre, 1 = feuille, 2 = ciseaux
    if (fn !== null) {
      coupOrdinateur = fn(); // 0 = pierre, 1 = feuille, 2 = ciseaux
    }
    
    //On met à jour les coups 
    setJoueur(coup);
    setOrdinateur(coupOrdinateur);
  
    if (coup === coupOrdinateur) {
      setRes(0); // égalité
    } else if (
      (coup === 0 && coupOrdinateur === 2) ||
      (coup === 1 && coupOrdinateur === 0) ||
      (coup === 2 && coupOrdinateur === 1)
    ) {
      setRes(1); //gagné
    } else {
      setRes(2); //perdu
    }
  }
  
  
  function handleClickOrdinateur(setOrdinateur, setOrdinateur2, setRes, fn1, fn2) {
    var coupOrdinateur = Math.floor(Math.random() * 3); // 0 = pierre, 1 = feuille, 2 = ciseaux
    var coupOrdinateur2 = Math.floor(Math.random() * 3); // 0 = pierre, 1 = feuille, 2 = ciseaux
    if (fn1 !== null || fn2 !== null) {
      coupOrdinateur = fn1()
      coupOrdinateur2 = fn2()
    }
    // On met à jour les coups
    setOrdinateur(coupOrdinateur);
    setOrdinateur2(coupOrdinateur2);
  
    if (coupOrdinateur2 === coupOrdinateur) {
      setRes(0); // égalité
    } else if (
      (coupOrdinateur2 === 0 && coupOrdinateur === 2) ||
      (coupOrdinateur2 === 1 && coupOrdinateur === 0) ||
      (coupOrdinateur2 === 2 && coupOrdinateur === 1)
    ) {
      setRes(2); // perdu
    } else {
      setRes(1); // gagné
    }
  }
  export {handleClick, handleClickOrdinateur};