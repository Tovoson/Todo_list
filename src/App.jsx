import { useState } from 'react'
import './myApp.scss'
import MyPage from './components/formulaire/MyForm'
import Affichage from './components/affichage/Affichage'

function App() {
  const [taches, setTaches] = useState([]);
  const [filtre, setFiltre] = useState('toutes');

  //Fonction pour ajouter une nouvelle tâche
  const ajouterTache = (tache) =>{
    setTaches([...taches, {texte: tache, isTerminee: false}]);
  }

//Fonction pour marquer une tâche comme terminée ou non
  const toggleTacheTerminee = (index) =>{
    const newTaches = taches.map((tache, i) => i === index ? {
      ...tache, isTerminee: !tache.isTerminee} : tache);
    setTaches(newTaches);
  }

//Fonction pour supprimer une tâche
  const supprimerTache = (index) =>{
    const newTache = taches.filter((t, i) => i !== index)
    setTaches(newTache)
  }

//Fonction pour filtrer les tâches
  const handleFiltreChange = (e) =>{
    setFiltre(e.target.value);
  }

//Fonction pour obtenir les tâches filtrées
  const tachesFiltrees = taches.filter(
    tache => {
      if(filtre === 'termine') return tache.isTerminee;
      if(filtre === 'non_termine') return !tache.isTerminee;
      return true;
    }
  )

  return (
    <div className='myApp'>
      <MyPage ajouterTache={ajouterTache}/>
      <Affichage 
        tachesFiltrees={tachesFiltrees} 
        toggleTacheTerminee = {toggleTacheTerminee} 
        supprimerTache={supprimerTache} 
        filtre = {filtre} 
        handleFiltreChange = {handleFiltreChange}
        />
    </div>
  )
}

export default App
