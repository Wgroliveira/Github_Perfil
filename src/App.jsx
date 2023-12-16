import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import Reposlist from "./components/ReposList";

function App () {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
   <> 
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <Reposlist nomeUsuario={nomeUsuario}/>
        </>
      )}

      {/* {ormularioEstaVisivel && ( 
        <Formulario/>
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
   </>
  )
}

export default App 
