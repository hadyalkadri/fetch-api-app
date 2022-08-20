import {React, useEffect, useState} from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner"



function App() {
  
  const [data, setData] = useState([])
  const [display, setDisplay] = useState(false)


  const [button, setButton] = useState("Get User Data")
  //const url = "https://reqres.in/api/users?page=1"

  useEffect( () => {
    // axios.get(url)
    // .then( (response) => {
    //   setData(response.data)
    // })
    fetchData();

  }, []);

 

//   useEffect( () => {
//     fetchData();
//   }, )

  function fetchData(){
    const API = "https://reqres.in/api/users?page=1"
    fetch(API)
    .then( response => {
      return response.json();
    })
    .then(
      info =>{
        setData(info.data)
      }
    )
    
    
  }

  

  //the error that is causing the map function to not work is that the state >>> data isnot an array fa it needs to be an array 
  // do sth about this when you are back
 
  // console.log(typeof(arrays));
  //console.log(typeof(data));

  //<button className="data-btn" onClick={() => setDisplay(!display)}>Get User data</button>

  
  
  return (
    <div>
      <Navbar />
      <div className="getdata">
      <p>Hello Dear User,</p> 
      <p>please click on the button to fetch the data :)</p>
        <button className="data-btn" onClick={() => setDisplay(!display, setButton("Pop User Data"))}>{button}</button>
      </div>
       
       {display ? <Card
      data={data} 
      /> : <Spinner />}

      
  
      
        
      
       
    </div>
  );
}

export default App;
