
import Ciseaux from './Components/Ciseaux.js';
import Feuille from './Components/Feuille.js';
import Pierre from './Components/Pierre.js';
import { JeuJoueur, JeuOrdinateur } from './handleClick.js';

describe('Tests pour les fonctions de PierreFeuilleCiseaux', () => {
  it('La fonction JeuJoueur devrait mettre à jour les valeurs correctement', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuJoueur(0, setJoueurMock, setOrdinateurMock, setResMock, null);

    // Vérification des résultats
    expect(setJoueurMock).toHaveBeenCalledWith(0);
    expect(setOrdinateurMock).toHaveBeenCalled();
    expect(setResMock).toHaveBeenCalled();

  });

  it('La fonction JeuOrdinateur devrait mettre à jour les valeurs correctement', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, null, null);

    // Vérification des résultats
    expect(setOrdinateurMock).toHaveBeenCalled();
    expect(setOrdinateur2Mock).toHaveBeenCalled();
    expect(setResMock).toHaveBeenCalled();
  });

  it('La fonction JeuJoueur devrait mettre à jour le résultat correctement pour le coup Pierre/Ciseaux', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuJoueur(Pierre, setJoueurMock, setOrdinateurMock, setResMock, () => {return Ciseaux});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(1);

  });

  it('La fonction JeuJoueur devrait mettre à jour le résultat correctement pour le coup Pierre/Feuille', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuJoueur(Pierre, setJoueurMock, setOrdinateurMock, setResMock, () => {return Feuille});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(2);

  });

  it('La fonction JeuJoueur devrait mettre à jour le résultat correctement pour le coup Pierre/Pierre', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuJoueur(Pierre, setJoueurMock, setOrdinateurMock, setResMock, () => {return Pierre});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(0);

  });

  it('La fonction JeuOrdinateur devrait mettre à jour le résultat correctement pour le coup Pierre/Ciseaux', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, () => {return Pierre}, () => {return Ciseaux});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(1);

  });

  it('La fonction JeuOrdinateur devrait mettre à jour le résultat correctement pour le coup Pierre/Feuille', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, () => {return Pierre}, () => {return Feuille});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(2);

  });

  it('La fonction JeuOrdinateur devrait mettre à jour le résultat correctement pour le coup Pierre/Pierre', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, () => {return Pierre}, () => {return Pierre});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(0);

  });

  it('La fonction JeuJoueur devrait mettre à jour le résultat correctement pour le coup Feuille/Ciseaux', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuJoueur(Feuille, setJoueurMock, setOrdinateurMock, setResMock, () => {return Ciseaux});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(2);

  });

  it('La fonction JeuJoueur devrait mettre à jour le résultat correctement pour le coup Feuille/Feuille', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuJoueur(Feuille, setJoueurMock, setOrdinateurMock, setResMock, () => {return Feuille});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(0);

  });

  it('La fonction JeuJoueur devrait mettre à jour le résultat correctement pour le coup Feuille/Pierre', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuJoueur(Feuille, setJoueurMock, setOrdinateurMock, setResMock, () => {return Pierre});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(1);

  });

  it('La fonction JeuOrdinateur devrait mettre à jour le résultat correctement pour le coup Feuille/Ciseaux', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, () => {return Feuille}, () => {return Ciseaux});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(2);

  });

  it('La fonction JeuOrdinateur devrait mettre à jour le résultat correctement pour le coup Feuille/Feuille', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, () => {return Feuille}, () => {return Feuille});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(0);

  });

  it('La fonction JeuOrdinateur devrait mettre à jour le résultat correctement pour le coup Feuille/Pierre', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, () => {return Feuille}, () => {return Pierre});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(1);

  });

  it('La fonction JeuJoueur devrait mettre à jour le résultat correctement pour le coup Ciseaux/Ciseaux', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuJoueur(Ciseaux, setJoueurMock, setOrdinateurMock, setResMock, () => {return Ciseaux});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(0);

  });

  it('La fonction JeuJoueur devrait mettre à jour le résultat correctement pour le coup Ciseaux/Feuille', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuJoueur(Ciseaux, setJoueurMock, setOrdinateurMock, setResMock, () => {return Feuille});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(1);

  });

  it('La fonction JeuJoueur devrait mettre à jour le résultat correctement pour le coup Ciseaux/Pierre', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuJoueur(Ciseaux, setJoueurMock, setOrdinateurMock, setResMock, () => {return Pierre});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(2);

  });

  it('La fonction JeuOrdinateur devrait mettre à jour le résultat correctement pour le coup Ciseaux/Ciseaux', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, () => {return Ciseaux}, () => {return Ciseaux});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(0);

  });

  it('La fonction JeuOrdinateur devrait mettre à jour le résultat correctement pour le coup Ciseaux/Feuille', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, () => {return Ciseaux}, () => {return Feuille});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(1);

  });

  it('La fonction JeuOrdinateur devrait mettre à jour le résultat correctement pour le coup Ciseaux/Pierre', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    JeuOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, () => {return Ciseaux}, () => {return Pierre});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(2);

  });
});
