
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [DataArray, setDataArray] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2")
    .then((res) => {
      setDataArray(res.data.data);
    })
    .catch((error) => {
      console.log(error.message);
    })
  })

  return (
<>
    <div className='Heading' >
          <h1>USER INFORMATION</h1>
          <button>Create</button>
        </div>

    {DataArray.map((item) => {
      return (

        <div className='Details-Section' key={item.id}>

          <div>
          <img src={item.avatar} ></img>
          </div>
          
          <div className='info-div' >
          <h1>{item.first_name}{item.last_name}</h1>
          <p>{item.email}</p>
          
          </div>
        </div>
        
      )
    })}
    
</>  
);

}

export default App;
