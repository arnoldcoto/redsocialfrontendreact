import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const InicioSesion = () => {

    const navigate = useNavigate();

    const [dataForm, setDataForm] = useState({
        nombre_usuario: "",
        pass: ""
    });

    const [inicioSesion, setInicioSesion] = useState("");

    const onChangeHandler = (event) => {

        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });

    }

    const submitHandler = async () => {
        event.preventDefault();

        console.log(dataForm.nombre_usuario)
        console.log(dataForm.pass)


        const url = `http://localhost:4000/api/usuario/auth/${dataForm.nombre_usuario}/${dataForm.pass}`;

        try {
            const result = await axios.get(url);
            navigate('/muro');
        } catch (err) {
            setInicioSesion("Error de Inicio de Sesion");
        }

    }

    return (


        <div class="bg-slate-900 bg-gray-100 flex h-full min-h-screen items-center py-16">

            <main className="w-full max-w-md mx-auto p-6">
                <div className="mt-7 rounded-xl shadow-sm bg-gray-800 border-gray-800">
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-gray-800 text-white">Iniciar Sesion</h1>
                            <p className="mt-2 text-sm text-gray-400">
                                No tienes cuenta ?
                                <a href="/registro" className="ml-2 text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    Registrate
                                </a>
                            </p>
                        </div>

                        <div>


                            <div className="flex justify-center items-center py-6">
                                <img src="/src/assets/iMe.png" alt="Logo Imagen" className="max-w-full" width={150} height={150} />
                            </div>


                            <form onSubmit={submitHandler}>
                                <div className="grid gap-y-4">

                                    <div>
                                        <label htmlFor="nombre_usuario" className="block text-sm mb-2 text-white">Usuario</label>
                                        <div className="relative">
                                            <input onChange={onChangeHandler} type="text" id="nombre_usuario" name="nombre_usuario" className="py-3 px-4 block w-full border-gray-200 text-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-900" />
                                            <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center">
                                            <label htmlFor="pass" className="block text-sm mb-2 text-white">Contraseña</label>

                                        </div>
                                        <div className="relative mb-2">
                                            <input onChange={onChangeHandler} type="password" id="pass" name="pass" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm text-gray-300 focus:border-blue-200 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-900 border-gray-700" required aria-describedby="password-error" />
                                            <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                                    </div>




                                    <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Iniciar Sesion</button>
                                </div>
                            </form>

                            <div className='text-center py-6 text-red-500'> {inicioSesion} </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}
