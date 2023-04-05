import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState("Hello dear one, learning React...?");
  
  useEffect(() => {
    console.log('useEffect called');
    const timeoutId = setTimeout(() => {
      setMessage("Great... This is time to learn about HOOKS");
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []); // empty dependency array to run effect only once

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
