export default function Navegacion() {

    return (
        <div className="col-span-1 rounded-lg">


            <nav className="px-4 text-gray-400 bg-gray-900 rounded-lg border border-gray-700 py-12">

                <div class="flex justify-start">
                   <a href="/"> <img src="/src/assets/iMe.png" alt="Logo Imagen" class="w-40 h-25" /> </a>
                </div>
                <div className="space-y-5 pl-3 mt-6 mx-2">

                    <a href="/crudUsuario" class="flex items-center hover:text-sky-200">
                        <span class="material-symbols-outlined mr-3">
                            account_circle
                        </span>
                        Mi Perfil
                    </a>


                    <a href="#" class="flex items-center hover:text-sky-200">
                        <span class="material-symbols-outlined mr-3">
                            edit_note
                        </span>
                        Mi Posts
                    </a>

                    <a href="/crearPost" class="flex items-center hover:text-sky-200">
                        <span class="material-symbols-outlined mr-3">
                            edit_note
                        </span>
                        Crear Post
                    </a>

                    <a href="#" class="flex items-center hover:text-sky-200">
                        <span class="material-symbols-outlined mr-3">
                            edit_note
                        </span>
                        Editar Post
                    </a>

                    <a href="#" class="flex items-center hover:text-sky-200">
                        <span class="material-symbols-outlined mr-3">
                            notifications_active
                        </span>
                        Notificaciones
                    </a>

                    <a href="/" class="flex items-center hover:text-sky-200">
                        <span class="material-symbols-outlined mr-3">
                            login
                        </span>
                        Opciones
                    </a>
                </div>
            </nav>


        </div>
    )
}