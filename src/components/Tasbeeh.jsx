import { useState } from 'react'

function Tasbeeh() {

    const [count, setCount] = useState(0);
  
  
    const incrementCount = () => {
      setCount(count + 1);
  
    
    };
    
    const decrementCount = () => {
      if(count != 0){
      setCount(count - 1);
      }
    }
  
    const resetCounter = () => {
      setCount(0);
    }
    
    return (
        <div className= 'text-center  bg-slate-900 flex items-center justify-center h-screen'>
        <div>
        <h1 className='text-3xl pb-5 text-white font-regular'>TASBEEH COUNTER</h1>
        <h1 className='pb-5 text-6xl grid-cols-1 gap-4 text-white'>{count}</h1>
        <div>
        <button onClick = {incrementCount} className=' bg-slate-800 text-white text-3xl py-3 px-5 mr-3 rounded-full transition-transform transform hover:scale-105 hover:bg-blue-600'>^</button>
        <button onClick = {decrementCount}  className=' bg-slate-800 text-white  text-3xl py-3 px-5 ml-3 rounded-full trasnform rotate-180 transition-transform transform hover:scale-105 hover:bg-blue-600'>^</button>
        </div>
        <button onClick = {resetCounter} className=' bg-slate-800 text-white text-3xl mt-10 p-3 rounded-full transition-transform transform hover:scale-105 hover:bg-blue-600 font-regular'>RESET</button>
        <div className=' text-white absolute bottom-2 left-2 font-regular'>Contact me: @amirlacode</div>
        </div>
    
      </div>
    );
}

export default Tasbeeh