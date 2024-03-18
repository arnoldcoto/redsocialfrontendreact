import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const baseUrl = import.meta.env.MY_APP_URL;

export const EditUsuario = () => {

    const navigate = useNavigate();

    const { nombre_usuario } = useParams();

    const [dataForm, setDataForm] = useState({
        correo_electronico: "",
        contrasena: "",
        nombre: "",
        apellido: "",
        activo: true,
        id_rol: 1
    });

    const getUsuarioModificar = async () => {

        const url = `http://localhost:4000/api/usuario/${nombre_usuario}`;
        const result = axios.get(url);
        const resulData = (await result).data;

        console.log(resulData);

        let tempUsuario = {
            correo_electronico: resulData[0].correo_electronico,
            contrasena: resulData[0].contrasena,
            nombre: resulData[0].nombre,
            apellido: resulData[0].apellido,
            activo: resulData[0].activo,
            id_rol: resulData[0].id_rol
        }

        setDataForm(tempUsuario);

    }

    useEffect(() => {

        getUsuarioModificar()

    }, []);

    const handlerChange = (event) => {

        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });

    }

    const handlerSubmit = async () => {

        event.preventDefault();

        const url = baseUrl + '/usuarioCrud/' + nombre_usuario;

        const result = await axios.put(url, dataForm);

        const resultData = (await result).data;

        navigate('/crudUsuario')
    }

    return (
        <div className="max-w-screen-lg mx-auto mt-12 bg-gray-800 p-6">
            <form onSubmit={handlerSubmit}>
                <fieldset>
                    <legend className="text-xl text-gray-300 pb-6">Administración de Usuarios</legend>


                    <div className="mb-4 flex items-center">
                        <label htmlFor="nombre_usuario" className="text-gray-300 text-sm font-bold w-24">Usuario:</label>
                        <input type="text" id="nombre_usuario" name="nombre_usuario" value={nombre_usuario} onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-300" disabled={true} />
                    </div>


                    <div className="mb-4 flex items-center">
                        <label htmlFor="correo_electronico" className="text-gray-300 text-sm font-bold w-24">Correo:</label>
                        <input type="text" id="correo_electronico" name="correo_electronico" value={dataForm.correo_electronico} onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-300" disabled={true} />
                    </div>


                    <div className="mb-4 flex items-center">
                        <label htmlFor="contrasena" className="text-gray-300 text-sm font-bold w-24">Contrasena:</label>
                        <input type="password" id="contrasena" name="contrasena" value={dataForm.contrasena} onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-300" />
                    </div>

                    <div className="mb-4 flex items-center">
                        <label htmlFor="nombre" className="text-gray-300 text-sm font-bold w-24">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" value={dataForm.nombre} onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-300" />
                    </div>

                    <div className="mb-4 flex items-center">
                        <label htmlFor="apellido" className="text-gray-300 text-sm font-bold w-24">Apellido:</label>
                        <input type="text" id="apellido" name="apellido" value={dataForm.apellido} onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-300" />
                    </div>

                    <div className="mb-4 flex items-center">
                        <label htmlFor="activo" className="text-gray-300 text-sm font-bold w-24">Activo:</label>
                        <select id="activo" name="activo" onChange={handlerChange} defaultValue={true} className="bg-slate-900 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline">
                            <option value={true}>Si</option>
                            <option value={false}>No</option>
                        </select>
                    </div>

                    <div className="mb-4 flex items-center">
                        <label htmlFor="id_rol" className="text-gray-300 text-sm font-bold w-24">Rol:</label>
                        <select id="id_rol" name="id_rol" onChange={handlerChange} defaultValue={1} className="bg-slate-900 w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline">
                            <option value={1}>Admin</option>
                            <option value={2}>Cliente</option>
                        </select>
                    </div>



                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Actualizar Usuario</button>


                </fieldset>
            </form>
        </div>




    )

}
