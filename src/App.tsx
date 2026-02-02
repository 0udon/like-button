import { use, useState } from 'react';
import './App.css'

function LikeButton(){

  //const count = 42;
  const [count, setCount] = useState(0);

  const handleClick = () =>{
    setCount(count + 1);
    console.log("buttun pressed");
  }

  return (
  <button type="button" onClick={handleClick}>👍 {count}
  </button>
  );
}

function App() {
  return (
    <>
      <h1>はじめてのいいねボタン</h1>
      <LikeButton />
    </>
  )
}

export default App
