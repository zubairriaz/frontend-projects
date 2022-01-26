import { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    setInterval(() => setCounter(prevCounter => prevCounter + 1), 1000);
  }, []);

  return <div style={{width:'20px'}}>{counter}</div>;
}




export default Counter;
