import Ciseaux from "./Components/Ciseaux";
import Feuille from "./Components/Feuille";
import Pierre from "./Components/Pierre";

const Symbol = [Pierre, Feuille, Ciseaux];

function resultat(symbol1, symbol2) {
  if (symbol1 === symbol2) {
    return 0; // égalité
  } else if (
    (symbol1 === Pierre && symbol2 === Ciseaux) ||
    (symbol1 === Feuille && symbol2 === Pierre) ||
    (symbol1 === Ciseaux && symbol2 === Feuille)
  ) {
    return 1; //gagné
  } else {
    return 2; //perdu
  }
}
function handleClick(coup1, coup2, setJoueur1, setJoueur2, setRes) {
    
    //On met à jour les coups 
    setJoueur1(coup1);
    setJoueur2(coup2);

    setRes(resultat(coup1, coup2))
  }

function JeuOrdinateur(setOrdinateur1, setOrdinateur2, setRes, fn1, fn2) {
    var coupOrdinateur = Symbol[Math.floor(Math.random() * 3)]; // 0 = pierre, 1 = feuille, 2 = ciseaux
    var coupOrdinateur2 = Symbol[Math.floor(Math.random() * 3)]; // 0 = pierre, 1 = feuille, 2 = ciseaux
    
    if (fn1 !== null || fn2 !== null) {
      coupOrdinateur = fn1()
      coupOrdinateur2 = fn2()
    }
    handleClick(coupOrdinateur, coupOrdinateur2, setOrdinateur1, setOrdinateur2, setRes)
  }

function JeuJoueur(coupJoueur, setJoueur, setOrdinateur, setRes, fn) {
    var coupOrdinateur = Symbol[Math.floor(Math.random() * 3)]; // 0 = pierre, 1 = feuille, 2 = ciseaux
    if (fn !== null) {
      coupOrdinateur = fn();
    }
    handleClick(coupJoueur, coupOrdinateur, setJoueur, setOrdinateur, setRes)
  }
  export { JeuJoueur, JeuOrdinateur};