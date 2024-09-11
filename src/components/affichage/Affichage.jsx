import './affichage.scss'

const Affichage = ({tachesFiltrees, toggleTacheTerminee, supprimerTache, filtre, handleFiltreChange}) =>{
    return(
                <div className="affichage">
                    <div className="sous_titre">
                        <div className="titre">
                            <h3>Liste des tâches</h3>
                        </div>
                        <div className="filtre">
                            <form >
                                <select name="filtre" id="filtre" value={filtre} onChange={handleFiltreChange}>
                                    <option value="toutes">Toutes les tâches</option>
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
                                <th scope="col">Status</th>
                                <th scope="col">Actions</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            { tachesFiltrees.map((tache, index) =>(
                                <tr key={index}>
                                    <td>{tache.texte}</td>
                                    <td>
                                        <input 
                                            type="checkbox" 
                                            checked = {tache.isTerminee}
                                            onChange={() => toggleTacheTerminee(index)}
                                            />
                                    </td>
                                    <td>
                                        <button className='btn_supp' onClick={() => supprimerTache(index)}>
                                            Supprimer
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
    )
}

export default Affichage