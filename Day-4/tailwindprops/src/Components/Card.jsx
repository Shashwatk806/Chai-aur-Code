import React from 'react'

function Card(props) {
  return (
    <div>
         <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src="https://plus.unsplash.com/premium_photo-1752497523819-9d1e02553a66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
        alt="Card"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
        <p className="mt-2 text-gray-600 text-sm">
          This is a simple card component made with React and Tailwind CSS.
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500">{props.name}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition duration-300">
            Action
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card