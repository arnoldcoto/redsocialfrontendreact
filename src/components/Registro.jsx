import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const baseUrl = import.meta.env.MY_APP_URL;

export const Registro = () => {

    const navigate = useNavigate();

    const [dataForm, setDataForm] = useState({
        nombre_usuario: "",
        correo_electronico: "",
        contrasena: "",
        nombre: "",
        apellido: "",
        activo: true,
        id_rol: 1
    });

    const handlerChange = (event) => {

        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });

    }

    const handlerSubmit = async () => {

        event.preventDefault();

        const url = baseUrl + '/usuarioCrud';

        const result = await axios.post(url, dataForm);
        const resultData = result.data;

        console.log(resultData);

        navigate('/muro')
       

    }

    return (
        <>
            <div className="max-w-screen-lg mx-auto mt-12">
                <form onSubmit={handlerSubmit} className="bg-gray-800 rounded px-8 pb-10 mb-4">
                    <fieldset>
                        <legend className="text-2xl text-gray-200 font-bold py-10">Crear Usuario</legend>

                        <div className="mb-4 flex items-center">
                            <label htmlFor="nombre_usuario" className="text-gray-300 text-sm font-bold w-24">Usuario:</label>
                            <input type="text" id="nombre_usuario" name="nombre_usuario" onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div className="mb-4 flex items-center">
                            <label htmlFor="correo_electronico" className="text-gray-300 text-sm font-bold w-24">Correo:</label>
                            <input type="email" id="correo_electronico" name="correo_electronico" onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div className="mb-4 flex items-center">
                            <label htmlFor="contrasena" className="text-gray-300 text-sm font-bold w-24">Contraseña:</label>
                            <input type="password" id="contrasena" name="contrasena" onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div className="mb-4 flex items-center">
                            <label htmlFor="nombre" className="text-gray-300 text-sm font-bold w-24">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div className="mb-4 flex items-center">
                            <label htmlFor="apellido" className="text-gray-300 text-sm font-bold w-24">Apellido:</label>
                            <input type="text" id="apellido" name="apellido" onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                            Crear Usuario
                        </button>
                    </fieldset>
                </form>
            </div>


        </>
    )
}