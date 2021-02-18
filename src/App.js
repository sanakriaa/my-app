import React,{useState, useEffect} from 'react';
import './App.css';
import { Card} from './Components/Card';
//import {Create} from './Create';
import Title from './Title';
import KommunicateChat from './chat'
//import { Container } from "semantic-ui-react";

 
function App() {
  const [listeOfevent, setTodo] = useState([]);
 // const [setEvent] = useState([]);


  useEffect(()=> {
    fetch('/listeOfevent').then(response =>
      response.json().then(data => {
        setTodo(data.listeOfevent);
      })
    );
  }, []);
/*
  useEffect(() => {
    fetch("/listeOfevent").then(response =>
      response.json().then(data => {
        setEvent(data.listeOfevent);
      })
    );
  }, []);
*/
  return (
    <div className="App">
      <div><KommunicateChat/></div>
      <Title />
      <Card listeOfevent={listeOfevent} />
    </div>
  );
}

export default App;

/*
      <Container style={{ marginTop: 40 }}>
      <Create
        onNewEvent={event =>
          listeOfevent(currentEvent => [event, ...currentEvent])
        }
      />
      </Container>

      */
