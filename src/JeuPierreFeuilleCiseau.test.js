
import { handleClick, handleClickOrdinateur } from './handleClick.js';

describe('Tests pour les fonctions de PierreFeuilleCiseaux', () => {
  it('La fonction handleClick devrait mettre à jour les valeurs correctement', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClick(0, null, setJoueurMock, setOrdinateurMock, setResMock);

    // Vérification des résultats
    expect(setJoueurMock).toHaveBeenCalledWith(0);
    expect(setOrdinateurMock).toHaveBeenCalled();
    expect(setResMock).toHaveBeenCalled();

  });

  it('La fonction handleClickOrdinateur devrait mettre à jour les valeurs correctement', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClickOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, null, null);

    // Vérification des résultats
    expect(setOrdinateurMock).toHaveBeenCalled();
    expect(setOrdinateur2Mock).toHaveBeenCalled();
    expect(setResMock).toHaveBeenCalled();
  });

  it('La fonction handleClick devrait mettre à jour le résultat correctement pour le coup Pierre/Ciseaux', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClick(0, () => {return 2}, setJoueurMock, setOrdinateurMock, setResMock);

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(1);

  });

  it('La fonction handleClick devrait mettre à jour le résultat correctement pour le coup Pierre/Feuille', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClick(0, () => {return 1}, setJoueurMock, setOrdinateurMock, setResMock);

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(2);

  });

  it('La fonction handleClick devrait mettre à jour le résultat correctement pour le coup Pierre/Pierre', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClick(0, () => {return 0}, setJoueurMock, setOrdinateurMock, setResMock);

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(0);

  });

  it('La fonction handleClickOrdinateur devrait mettre à jour le résultat correctement pour le coup Pierre/Ciseaux', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClickOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, () => {return 0}, () => {return 2});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(1);

  });

  it('La fonction handleClickOrdinateur devrait mettre à jour le résultat correctement pour le coup Pierre/Feuille', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClickOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, () => {return 0}, () => {return 1});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(2);

  });

  it('La fonction handleClickOrdinateur devrait mettre à jour le résultat correctement pour le coup Pierre/Pierre', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClickOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, () => {return 0}, () => {return 0});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(0);

  });

  it('La fonction handleClick devrait mettre à jour le résultat correctement pour le coup Feuille/Ciseaux', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClick(1, () => {return 2}, setJoueurMock, setOrdinateurMock, setResMock);

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(2);

  });

  it('La fonction handleClick devrait mettre à jour le résultat correctement pour le coup Feuille/Feuille', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClick(1, () => {return 1}, setJoueurMock, setOrdinateurMock, setResMock);

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(0);

  });

  it('La fonction handleClick devrait mettre à jour le résultat correctement pour le coup Feuille/Pierre', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClick(1, () => {return 0}, setJoueurMock, setOrdinateurMock, setResMock);

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(1);

  });

  it('La fonction handleClickOrdinateur devrait mettre à jour le résultat correctement pour le coup Feuille/Ciseaux', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClickOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, () => {return 1}, () => {return 2});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(2);

  });

  it('La fonction handleClickOrdinateur devrait mettre à jour le résultat correctement pour le coup Feuille/Feuille', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClickOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, () => {return 1}, () => {return 1});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(0);

  });

  it('La fonction handleClickOrdinateur devrait mettre à jour le résultat correctement pour le coup Feuille/Pierre', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClickOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, () => {return 1}, () => {return 0});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(1);

  });

  it('La fonction handleClick devrait mettre à jour le résultat correctement pour le coup Ciseaux/Ciseaux', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClick(2, () => {return 2}, setJoueurMock, setOrdinateurMock, setResMock);

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(0);

  });

  it('La fonction handleClick devrait mettre à jour le résultat correctement pour le coup Ciseaux/Feuille', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClick(2, () => {return 1}, setJoueurMock, setOrdinateurMock, setResMock);

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(1);

  });

  it('La fonction handleClick devrait mettre à jour le résultat correctement pour le coup Ciseaux/Pierre', () => {
    // Préparation des données
    const setJoueurMock = jest.fn();
    const setOrdinateurMock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClick(2, () => {return 0}, setJoueurMock, setOrdinateurMock, setResMock);

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(2);

  });

  it('La fonction handleClickOrdinateur devrait mettre à jour le résultat correctement pour le coup Ciseaux/Ciseaux', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClickOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, () => {return 2}, () => {return 2});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(0);

  });

  it('La fonction handleClickOrdinateur devrait mettre à jour le résultat correctement pour le coup Ciseaux/Feuille', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClickOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, () => {return 2}, () => {return 1});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(1);

  });

  it('La fonction handleClickOrdinateur devrait mettre à jour le résultat correctement pour le coup Ciseaux/Pierre', () => {
    // Préparation des données
    const setOrdinateurMock = jest.fn();
    const setOrdinateur2Mock = jest.fn();
    const setResMock = jest.fn();

    // Appel de la fonction à tester
    handleClickOrdinateur(setOrdinateurMock, setOrdinateur2Mock, setResMock, () => {return 2}, () => {return 0});

    // Vérification des résultats
    expect(setResMock).toHaveBeenCalledWith(2);

  });
});
