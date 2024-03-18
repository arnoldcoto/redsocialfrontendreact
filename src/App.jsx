import React from 'react'
import { Registro } from './components/Registro';
import { Muro } from './components/Muro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InicioSesion } from './components/InicioSesion';
import { CrearPost } from './components/CrearPost';
import { EditarPost } from './components/EditarPost';
import { UsuarioCrud } from './components/CrudUsuario/UsuarioCrud';
import { EditUsuario } from './components/CrudUsuario/EditUsuario';
import { ResponderPublicacion } from './components/ResponderPublicacion';
import { EditarComentario } from './components/editarComentario';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<InicioSesion/>} />
        <Route path='/registro' element = {<Registro/>} />
        <Route path='/muro' element = {<Muro/>} />
        <Route path='/crearPost/' element = {<CrearPost/>} />
        <Route path='/editarPost/:idPost' element = {<EditarPost/>} />
        <Route path='/crudUsuario' element = {<UsuarioCrud/>} />
        <Route path='/editarCrudUsuario/:nombre_usuario' element = {<EditUsuario/>} />
        <Route path='/crearComentario/:idPost' element = {<ResponderPublicacion/>} />
        <Route path='/editarComentario/:idPost' element = {<EditarComentario/>} />
      </Routes>
    </BrowserRouter>

    //<Registro />
  )
}

export default App; 
