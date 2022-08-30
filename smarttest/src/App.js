import "./styles.css";
import {useState} from 'react'

export default function App() {
  const [result,setResult] = useState(0)
  const [input,setInput] = useState(null)
  function handleInput() {
    //please put your logic here
    let temp2 = ''
    for(let x = 0;x<input.length;x++){
      if(input[x]!==',' && input[x]!=='.') temp2 += input[x]
    }
    const reverse = temp2.split('').reverse().join('')
    const test = Math.abs(Number(reverse)-Number(temp2))
    setResult(test)
  }

  return (
    <div className="App">
      <div>
        Number: <input onChange={(e=>setInput(e.target.value))} 
        value={input}/>
        <button onClick={handleInput}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}

