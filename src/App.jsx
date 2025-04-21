import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={getData}
          className="bg-teal-600 hover:bg-teal-700 transition-all duration-200 text-white font-semibold text-xl px-8 py-4 rounded-xl shadow-md active:scale-95"
        >
          Get Data
        </button>

        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((elem, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                className="w-full h-60 object-cover"
                src={elem.download_url}
                alt={`Image by ${elem.author}`}
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold text-gray-800">
                  {elem.author}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
