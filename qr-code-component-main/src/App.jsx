import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="bg-slate-300  grid place-items-center min-h-screen">
          <div className="bg-white p-4 w-[320px] rounded-[20px] gap-6 flex flex-col">
            <img className=" w-[288px] block" src="./images/image-qr-code.png" alt="qr-code"  />
              <div className=" flex flex-col gap-4 w-[288px]">
              <div className=" font-outfit font-bold  text-[22px] text-slate-900 leading-[120%] tracking-[0px]">
                Improve your front-end skills by building projects
              </div>
              <div className="font-outfit text-[15px]  leading-[140%] text-slate-500 tracking-[0.2px]">
                Scan the QR code to visit Frontend Mentor and take
                  your coding skills to the next level.
              </div>
                  </div>
      </div>
      </div>
  )
}

export default App
