import React, { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {
  const [data, setData] = useState("");
  const [country, setCountry] = useState(null);

  // handleClick = () => {
  //   // fetch();
  // };


  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(`http://localhost:3000/weather?address=${country}`);
      console.log(data);
    };
    fetch();
  }, [country]);


  return (
    <div>
      <input onChange={(e) => setCountry(e.target.value)} type="text"></input>
      {/* <button onClick={() => handleCLick()}>get</button> */}
    </div>
  )
}

export default App;
