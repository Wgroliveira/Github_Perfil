import { useState } from "react";
import styles from './App.module.css';

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import Reposlist from "./components/ReposList";

function App () {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [inputValue, setInputValue] = useState(''); // Novo estado para o valor do input
  
  

  const handleButtonClick = () => { 
    setNomeUsuario(inputValue);
    setInputValue(''); // Limpa o input após o clique no botão
  }
  

  return (
   <> 
      <div className={styles.inputUsuario}>
        <label>Digite o usuário </label>
            <input  type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> 
            <button type="submit" onClick={handleButtonClick}> Buscar</button>
      </div>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <Reposlist nomeUsuario={nomeUsuario}/>
        </>
      )}

      {/* {formularioEstaVisivel && ( 
        <Formulario/>
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
   </>
  )
}

export default App  
