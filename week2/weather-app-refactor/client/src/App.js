import React, { useState } from 'react'
import axios from 'axios'


const App = () => {
  const [data, setData] = useState("");
  const [country, setCountry] = useState("");

  // handleClick = () => {
  //   // fetch();
  // };


  const fetchData = async () => {
    try {
      const data = await axios.get(
        `http://localhost:3000/weather/?address=${country}`
      );
      setData(data.data);
    } catch (e) {
      console.log(e);
    }

  };

    return (
      <div className="App">
        <div>
          Enter a location:
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></input>
          <button onClick={fetchData}>Search</button>
        </div>
        <div className='data'>
          {data.location}
            {console.log(data)}
            {data.address}
            {data.forecast}

        </div>
      </div>
    )
  }

  export default App;
