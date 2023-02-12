import './App.css';
import { useEffect, useState } from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import db from './Firebase';
import firebase from "firebase/app";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';

function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] =useState([]);
  const [username,setUsername] = useState('');

  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id:doc.id,message:doc.data()})));
    })
  },[])

  useEffect(()=>{
    setUsername(prompt('Please Enter your name'));
  },[])
  

  const sendMessage=(event)=>{
    event.preventDefault();

    db.collection("messages").add({
      message:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessages([...messages,{username:username,text:input}]);
    setInput('');
  }
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="messenger logo" />
      <h1>Facebook Messenger</h1>
      <h3>Welcome {username}</h3>  

      <form className='app__form'>
        <FormControl className='app__formControl'>
          <InputLabel>Enter a Message</InputLabel>
          <Input className='app__input' value={input} onChange={event => setInput(event.target.value)}/>

        <IconButton className='app__iconButton' variant='contained' color='primary' disabled={!input} type='submit' onClick={sendMessage}>
          <SendIcon />
        </IconButton >
        </FormControl>
      </form>

      <FlipMove>
      {
        messages.map(({id,message})=>(
          <Message 
            key={id}
            username={username}
            message={message}
          />
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;
