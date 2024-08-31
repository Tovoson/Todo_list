import { useState } from 'react';
import './mypage.scss'



const MyPage = () =>{
    
        const [tache, setTache] = useState('');
        const [taches, setTaches] = useState([]);
        const [termine, setTermine] = useState(false);
 
        const handleChange = (e) =>{
            setTache(e.target.value);
        };

        const handleSubmit = (e) =>{
            e.preventDefault();

            if (tache.trim() !== '') {
                setTaches([...taches, tache])
                setTache('')
            }
        }

        const handleDelete = (index) =>{
            const newTaches = taches.filter((_, i) => i !== index)
            setTaches(newTaches);
        }

        const etat_tache = () =>{
            setTermine(true)
        }

    return(
        <>
            <div className='mybody'>
                <div className="formulaire" onSubmit={handleSubmit}>
                    <form className="formulaires">
                        <input 
                            type="text" 
                            className='ajout_tache'
                            placeholder='Ajouter une tâche'
                            onChange={handleChange}
                            value = {tache}
                            />
                        <button type='submit'>Add</button>
                    </form>
                   
                </div>
                <div className="affichage">
                    <div className="sous_titre">
                        <div className="titre">
                            <h3>Liste des tâches</h3>
                        </div>
                        <div className="filtre">
                            <form >
                                <select name="filtre" id="filtre">
                                    <option value="termine">Tache terminé</option>
                                    <option value="non_termine">Tache non terminé</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <div className="tableau">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Tâches</th>
                                <th scope="col">Actions</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {taches.map((tache, index) => (
                                <tr key={index}>
                                    <td>{tache}</td>
                                    <td>
                                        <button className='btn_supp' onClick={() => handleDelete(index)}>
                                            Supprimer
                                        </button>
                                        {<button className='btn_det' onClick={() => handleDelete(index)}>
                                            Supprimer
                                        </button>}
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPage;