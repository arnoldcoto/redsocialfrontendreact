import React from 'react'
import { ReporteUsuario } from './ReporteUsuario'
import { FormularioUsuarios } from './FormularioUsuarios'
import { useState } from 'react'

export const UsuarioCrud = () => {

  const [contador , setContador] = useState(0);

  return (
    <>
        <FormularioUsuarios setContador ={setContador} contador = {contador}/>
        <ReporteUsuario contador = {contador} />
    </>
  )
}
