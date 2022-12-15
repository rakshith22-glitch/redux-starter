

import { useEffect, useState, useMemo, useRef } from 'react';
import Child from './components/child';

function App() {
  const [varia, setvaria] = useState(0)
  const [data, setData] = useState('');
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [name, setname] = useState('');
  const inputRef = useRef()
  const prevName = useRef('')
  const [count, setCount] = useState();
  useEffect(() => {
    prevName.current = name;
  }, [name])


  function increment() {
    setvaria(varia => varia + 1)
  }
  function decrement() {
    setvaria(varia => varia - 1)
  }

  useEffect(() => {
    let newwidth = window.innerWidth;
    if (newwidth !== windowWidth) {
      setwindowWidth(newwidth)
    }
  }, [windowWidth])

function focus(){
  inputRef.current.focus()
}
 
  return (
    <>
      <div>
        <button type="button" class="btn btn-primary" onClick={increment}>+</button>
        <span>{varia}</span>
        <button type="button" class="btn btn-primary" onClick={decrement}>-</button>
      </div>
      <div>
        <button type="button" class="btn btn-primary" onClick={() => setData("POSTS")}>POSTS</button>
        <button type="button" class="btn btn-primary" onClick={() => setData("COMMENT")}>COMMENT</button>
        <button type="button" class="btn btn-primary" onClick={() => setData("LIKE")}>LIKE</button>
      </div>

      <div>{windowWidth}</div>
     


      <input ref={inputRef} value={name} onChange={e => setname(e.target.value)}></input>
      <div>{name}</div>
      <button onClick={focus}>Focus</button>
    <br/>
    

    <input  value={name} onChange={e => setname(e.target.value)}></input>
      <div>My name is {name} and it used to be {prevName.current}</div>
    


    <Child setCount={setCount}/>
    <h1>{count}</h1>
    </>
  );
}

export default App;
