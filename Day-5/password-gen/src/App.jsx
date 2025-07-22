import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNum] = useState(false);
  const [charAllow, setChar] = useState(false);
  const [pass, setPass] = useState("");

  const passGen = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "~`!@#$%^&*()_/?><{}[]";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char)
    }
    setPass(password);
  }, [length, numAllow, charAllow, setPass])

  const passwordRef = useRef(null);

  const copyPassToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(pass);
  },[pass])

  useEffect(()=>{
    passGen()
  },[length,numAllow,charAllow,passGen])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md px-4 py-2 my-8 rounded-lg text-orange-500 bg-gray-600'>
        <h1 className='text-center text-white my-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder='password'
            readOnly
             ref={passwordRef}
          />
          <button className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0'
          onClick={copyPassToClipboard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-3'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label >Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numAllow}
              id='numInput'
              onChange={() => { setNum((prev) => !prev) }}
            />
            <label htmlFor='numInput'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllow}
              id='charInput'
              onChange={() => { setChar((prev) => !prev) }}
            />
            <label htmlFor='charInput'>Character</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App