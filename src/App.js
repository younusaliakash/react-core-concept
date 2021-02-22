import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var style= {
    color: "blue"

  }
  let infomation = [
    {name: "Mr. x", age: 5, address : "Dhaka"},
    {name: "Mr. Y", age: 6, address : "Rajshahi"},
    {name: "Mr. Z", age: 7, address : "Rangpur"},
    {name: "Mr. C", age: 8, address : "Noyakhali"}
  ];
  let friends = ['Tanvir','Bilas','Robiul','Chanchal','Imran','Nazmul']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={style}>
          Created by Younus Ali Akash
        </p>
        <Count></Count>
        <DynamicUser></DynamicUser>
        <ul>
          {
            friends.map(friend => <li>{friend}</li>)
          }
        </ul>
        <div style={{width:"500px"}}>
        {/* <Intro infomation={infomation[0]}></Intro>
        <Intro infomation={infomation[1]}></Intro>
        <Intro infomation={infomation[2]}></Intro> */}
        {
          infomation.map(info => <Intro infomation={info}></Intro>)
        }
        </div>
        
      </header>
    </div>
  );
}

let Intro = (props) =>{
  console.log(props)
  const {name, age, address} = props.infomation
  return(
    <div style={{border:"2px solid white", margin:"5px"}}>
      <h4>{name}</h4>
      <h5>{age}</h5>
      <h6>{address}</h6>
    </div>
  )
}
let Count = () =>{
  const [count, setCounter] = useState(5)
  return(
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCounter(count-1)}>Decrease</button>
      <button onClick={() => setCounter(count+1)}>Increase</button>
      
    </div>
  )
}

const DynamicUser = () =>{
  const [user, setUsers] = useState([]) 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h2>Dymanic User : {user.length}</h2>
      <ul>
        {
          user.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
