import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import BgChanger from './Components/BgChanger'

function App() {


  return (
    <>
    {/* <h1 className='bg-green-600'>Tailwind-CSS</h1> */}
      {/* <Card name="Prince" />
      <Card name="Shash" /> */}
      <BgChanger />
    </>
  )
}

export default App
