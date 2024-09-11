import { useState } from 'react';
import './myform.scss'

const MyPage = ({ajouterTache}) =>{
    
        const [tache, setTache] = useState('');
        
        const handleChange = (e) =>{
            setTache(e.target.value);
        };

        const handleSubmit = (e) =>{
            e.preventDefault();

            if (tache.trim() !== '') {
                ajouterTache(tache)
                setTache('')
            }
        }

    return(
        <>
            <div className='myForm'>
                <form className="formulaires" onSubmit={handleSubmit}>
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
        </>
    )
}

export default MyPage;