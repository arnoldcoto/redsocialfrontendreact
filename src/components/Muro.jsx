import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navegacion from "./Navegacion";
import { CrearPost } from "./CrearPost";

export const Muro = () => {

    const [dataMuro, setDataMuro] = useState([]);

    const navigate = useNavigate();

    const [contadorDeBorrar, setContadorDeBorrar] = useState(0);

    const getDatos = async () => {

        const url = "http://localhost:4000/api/publicacion";
        const response = await axios.get(url);
        const datos = response.data;

        const datosCompletos = [];

        for (const dato of datos) {

            const comentariosUrl = `http://localhost:4000/api/comentarios/${dato.id}`;
            const comentariosResponse = await axios.get(comentariosUrl);
            const comentarios = comentariosResponse.data;
            dato.respuesta = comentarios
            datosCompletos.push(dato);

        }

        setDataMuro(datosCompletos);

    }



    const borraPublicacion = async (idPost) => {

        const url = `http://localhost:4000/api/publicacion/${idPost}`;
        const response = await axios.delete(url);
        const datos = (await response).data;

        setContadorDeBorrar(contadorDeBorrar + 1);
        console.log(contadorDeBorrar);

    }

    const borrarComentario = async (idComentario) => {

        console.log(idComentario)

        const url = `http://localhost:4000/api/comentarios/${idComentario}`;
        const response = await axios.delete(url);
        const datos = response.data;

        setContadorDeBorrar(contadorDeBorrar + 1);


    }

    const editarPublicacion = (idPublcacion) => {

        navigate(`/editarPost/${idPublcacion}`);

    }

    const editarComentario = (idComentario) => {

        navigate(`/editarComentario/${idComentario}`);

    }

    const createComentario = (idPublcacion) => {

        navigate(`/crearComentario/${idPublcacion}`);

    }


    // siempre se ejecuta cada vez que se renderiza el componente
    useEffect(() => {

        getDatos();

    }, [contadorDeBorrar]);

    return (
        <>



            <div class="max-w-screen-xl mx-auto pt-12 lg:px-24">
                <div className="grid grid-cols-4 gap-4">

                    <Navegacion />

                    <div className="col-span-3">


                        <div className="">
                            {
                                dataMuro.map((item) => (
                                    <div className="block" key={item.id}>
                                        <div className="rounded-lg shadow-lg bg-gray-900 mx-auto mb-3 p-3 border border-gray-700">

                                            <div className="flex px-4 py-2">


                                                <svg class="flex-shrink-0 w-6 h-6 mr-4 text-sky-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                    <circle cx="9" cy="7" r="4" />
                                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                                </svg>
                                                <a href="/" class="text-sky-500 text-left">@{item.nombre_usuario}</a>
                                            </div>

                                            <div className="px-14">
                                                <p className="text-gray-400 text-xs dark:text-gray-300">
                                                    {new Date(item.fecha_post).toLocaleDateString('es-ES', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric'
                                                    })}</p>
                                            </div>
                                            <div className="px-14 py-3">
                                                <p className="text-gray-200 dark:text-gray-300">{item.caption}</p>
                                            </div>

                                            <div class="flex justify-end items-center px-14 pt-4">

                                                <button onClick={() => createComentario(item.id)} className="mx-2">
                                                    <span class="material-symbols-outlined mr-3 text-blue-500 hover:text-slate-500">
                                                        reply
                                                    </span>
                                                </button>
                                                <button onClick={() => editarPublicacion(item.id)} className="mx-2">
                                                    <span class="material-symbols-outlined mr-3 text-blue-500 hover:text-green-300">
                                                        edit_note
                                                    </span>
                                                </button>
                                                <button onClick={() => borraPublicacion(item.id)} className="mx-2">
                                                    <span class="material-symbols-outlined mr-3 text-blue-500 hover:text-red-300">
                                                        delete
                                                    </span>
                                                </button>
                                            </div>
                                            <p className="px-14 text-orange-200 text-sm mb-6">Respuetas {item.respuesta.length} </p>

                                            <div className="px-12">

                                                {item.respuesta.map((item) => (
                                                    <div key={item.id} className="px-16 py-2 border border-gray-700 bg-gray-800 rounded mt-2">
                                                        <p className="text-gray-200 text-sky-400 py-2">@{item.nombre_usuario}</p>



                                                        <p className="text-gray-400 text-xs mb-2">
                                                            {new Date(item.fecha_comentario).toLocaleDateString('es-ES', {
                                                                day: 'numeric',
                                                                month: 'long',
                                                                year: 'numeric'
                                                            })}</p>

                                                        <p className="text-gray-200 dark:text-gray-300">{item.comentario}</p>

                                                        <div class="flex justify-end items-center pt-4">
                                                            <button onClick={() => editarComentario(item.id)} className="mx-2">
                                                                <span class="material-symbols-outlined mr-3 text-blue-500 hover:text-green-300">
                                                                    edit_note
                                                                </span>
                                                            </button>
                                                            <button onClick={() => borrarComentario(item.id)} className="mx-2">
                                                                <span class="material-symbols-outlined mr-3 text-blue-500 hover:text-red-300">
                                                                    delete
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}

                                            </div>

                                        </div>


                                    </div>

                                ))
                            }
                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}
