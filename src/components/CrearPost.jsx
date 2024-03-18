import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CrearPost = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({

        nombre_usuario: "",
        caption: ""

    });



    const onChangeHandler = () => {

        const { name, value } = event.target;
        setForm({ ...form, [name]: value });

    }

    const submitHandler = async () => {

        const url = "http://localhost:4000/api/publicacion";

        event.preventDefault();

        const datosFormulario = new FormData();



        datosFormulario.append("nombre_usuario", form.nombre_usuario);
        datosFormulario.append("caption", form.caption);
       

        const result = await axios.post(url, datosFormulario);
        const resultData = (await result).data;

        navigate('/muro')
    }

    return (
        <>

            <div className='max-w-lg mx-auto mt-5'>
                <form onSubmit={submitHandler} className="shadow-md bg-gray-800 rounded px-8 pt-6 pb-8 mb-4">
                    <fieldset>
                        <legend className="text-xl font-bold mb-4 text-gray-300">Crear Post</legend>

                        <div className="mb-4">
                            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="nombre_usuario">Usuario</label>
                            <input className="bg-slate-900 w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                                id="nombre_usuario"
                                name="nombre_usuario"
                                type="text"
                                onChange={onChangeHandler} />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="caption">Caption</label>
                            <textarea className="bg-slate-900  w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                                id="caption"
                                name="caption"
                                type="text"
                                onChange={onChangeHandler} />
                        </div>

                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                            Crear Post
                        </button>
                    </fieldset>
                </form>
            </div>

        </>

    )
}


