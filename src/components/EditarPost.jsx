import React, { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const EditarPost = () => {

  const navigate = useNavigate();

  const { idPost } = useParams();

  const [data, setData] = useState({
    caption: ""
  });

  const handlerChange = (event) => {

    const { name, value } = event.target

    setData({ ...data, [name]: value });

  }

  const handlerSubmit = async (event) => {

    event.preventDefault();
    const url = `http://localhost:4000/api/publicacion/${idPost}`;
    const result = await axios.put(url, data);
    const resultData = (await result).data;

    console.log(resultData);
    navigate('/muro');

  }

  return (
    <>
      <div className="flex justify-center items-center h-screen max-w-screen-sm mx-auto">
        <form onSubmit={handlerSubmit} className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
          <h2 className="text-lg font-bold mb-4 text-gray-300">Editar Post</h2>

          <div className="mb-4">
            <label htmlFor="caption" className="block text-gray-300 text-sm font-bold mb-2">Mensaje</label>
            <textarea type="text" id="caption" name="caption" onChange={handlerChange} className="bg-slate-900 rounded w-full py-2 px-4 focus:outline-none focus:bg-slate-900 focus:border-gray-500 text-gray-400" />
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Actualizar Post</button>
        </form>
      </div>

    </>
  )
}
