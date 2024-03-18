import { useEffect, useState } from "react"
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export const ResponderPublicacion = () => {

    const navigate = useNavigate();

    const { idPost } = useParams();

    const [form, setForm] = useState({

        usuario: "",
        comentario: ""

    });



    const onChangeHandler = () => {

        const { name, value } = event.target;
        console.log(name, value);
        setForm({ ...form, [name]: value });

    
    }

    const submitHandler = async (event) => {

        const url = `http://localhost:4000/api/comentarios/${idPost}`;

        event.preventDefault();

        const result = await axios.post(url, form);
        const resultData = result.data;
        
        navigate('/muro')
    }

    return (
        <>

            <div className='max-w-lg mx-auto mt-5'>
                <form onSubmit={submitHandler} className="shadow-md bg-gray-800 rounded px-8 pt-6 pb-8 mb-4">
                    <fieldset>
                        <legend className="text-xl font-bold mb-4 text-gray-300">Responder Publicacion  { idPost }</legend>

                        <div className="mb-4">
                            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="nombre_usuario">Usuario</label>
                            <input className="bg-slate-900 w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                                id="nombre_usuariol"
                                name="nombre_usuario"
                                type="text"
                                onChange={onChangeHandler} />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="comentario">Comentario</label>
                            <textarea className="bg-slate-900  w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                                id="comentariol"
                                name="comentario"
                                type="text"
                                onChange={onChangeHandler} />
                        </div>

                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                            Crear Comentario
                        </button>
                    </fieldset>
                </form>
            </div>

        </>

    )
}


