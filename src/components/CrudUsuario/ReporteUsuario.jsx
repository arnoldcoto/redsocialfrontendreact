import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const urlBase = import.meta.env.MY_APP_URL;
const endPoint = urlBase + '/usuarioCrud';

export const ReporteUsuario = ({ contador }) => {

    const navigate = useNavigate()

    const [data, useData] = useState([]);


    const getDatos = async () => {


        const result = await axios.get(endPoint);
        const resultData = (await result).data;
        useData(resultData);

    }

    const editarUsuario = (usuario) => {

        const url = `/editarCrudUsuario/${usuario.nombre_usuario}`;

        navigate(url);
    }

    const borrarUsuario = async (nombre_usuario) => {

        const url = endPoint + `/${nombre_usuario}`;

        const result = await axios.delete(url);

        const resulData = (await result).data;

    }

    useEffect(() => {

        getDatos();

    }, [contador]);
    return (
        <>
            <div className='max-w-screen-lg mx-auto mt-5 bg-gray-800 rounded p-2'>

                <h3 className='text-2xl text-gray-200 font-bold py-10 pl-9'>Reporte de Usuarios</h3>
                <table className="min-w-full divide-y divide-gray-500 dark:divide-gray-700">
                    <thead className='bg-gray-50 bg-slate-800'>
                        <tr className="bg-gray-800 text-white">
                            <th className="px-6 py-3 text-start">Nombre Usuario</th>
                            <th className="px-6 py-3 text-start">Correo</th>
                            <th className="px-6 py-3 text-start">Contraseña</th>
                            <th className="px-6 py-3 text-start">Nombre</th>
                            <th className="px-6 py-3 text-start">Apellido</th>
                            <th className="px-6 py-3 text-start">Rol</th>
                            <th className="px-6 py-3 text-start">Activo</th>
                            <th className="px-6 py-3 text-start">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.nombre_usuario} className="text-gray-400 text-sm">
                                <td className="px-6 py-3 text-start">{item.nombre_usuario}</td>
                                <td className="px-6 py-3 text-start">{item.correo_electronico}</td>
                                <td className="px-6 py-3 text-start">{item.contrasena}</td>
                                <td className="px-6 py-3 text-start">{item.nombre}</td>
                                <td className="px-6 py-3 text-start">{item.apellido}</td>
                                <td className="px-6 py-3 text-start">{item.nombre_rol}</td>
                                <td className="px-6 py-3 text-start">{item.activo ? 'Si' : 'No'}</td>
                                <td className="py-2 flex space-x-1">
    <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-1 px-5 rounded" onClick={() => borrarUsuario(item.nombre_usuario)}>
        <span class="material-symbols-outlined">delete</span>
    </button>
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-5 rounded" onClick={() => editarUsuario(item)}>
        <span class="material-symbols-outlined">edit</span>
    </button>
</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}
