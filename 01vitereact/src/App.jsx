import {useState} from 'react'

function App() {
const [counter, setCounter] = useState(0)
let add = ()=>{
  if (counter >0) {

  }
  setCounter(counter +1)
};
let reduce = ()=>setCounter(counter - 1);


  return (
    <>
    <button onClick={add}> add</button>
     <h1 className='bg-red-400'>hello world {counter}</h1>
     <button onClick={reduce}>reduce</button>
    </>
   
  )
}

export default App
