import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import './App.css';
import { getDatabase, onValue, push, ref } from '@firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA14wjANAoth86YpTPzx6iN8Qg2TrVOMv0",
  authDomain: "fir-demo-54cb7.firebaseapp.com",
  projectId: "fir-demo-54cb7",
  storageBucket: "fir-demo-54cb7.appspot.com",
  messagingSenderId: "710037702734",
  appId: "1:710037702734:web:aeed7106f338f5a8cd9b1f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getDatabase();

//telling what we are going to be getting into the Firebase
interface Note {
  name: string;
  notes: string;
  workType: string;
}


function App() {

  const [ name, setName ] = useState("");
  const [ notes, setNotes ] = useState("");
  const [ workType, setWorkType] = useState("")
  const [ allNotes, setAllNotes ] = useState<Note[]>([]);


  const openModal = () => {
    const modal = document.getElementById("modal-container");
    if( modal != null){
      modal.style.display = "block";
    }
  }


  const submitNode = () => {
    //Putting in the database

    push(ref(db,"notes/"), {
      name,
      notes,
      workType
    });

    setName("");
    setNotes("");
  };

  useEffect(() => {
    //Creating an observer 
    onValue(ref(db, "notes/"), snapshot => {
    console.log(snapshot.val());
    setAllNotes(Object.values(snapshot.val()));
  });
  }, []);

  return (
    <div>
    <nav>
      <button id="login-button">login</button>
      <button id="create-button" onClick={ openModal }>create account</button>
    </nav>
    <div id="modal-container">
      <form>

        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button id="signup-btn">Sign Up</button>
      </form>
    </div>
      <br/>
      <input type="text" placeholder="Name" value={ name } onChange={e => setName(e.target.value)}/>
      <br/><br/>
      <input type="text" placeholder="Notes" value={ notes } onChange={e => setNotes(e.target.value)}/>
      <br/>
      <select title="Select Workout type" id="workoutmenu" onChange={e => setWorkType(e.target.value)}>
        <option value="">Select Workout type</option>
        <option value="Push Workout">Push</option>
        <option value="Pull Workout">Pull</option>
        <option value="Leg workout">Legs</option>
      </select>
      <br/>
      <input type="button" value="Add Note" onClick={ submitNode }/>

      <br/>
      <br/>
      { allNotes.map(x => <p> {x.name}: <br/>{x.notes}: <br/> {x.workType} </p>) }
    </div>
  );
}

export default App;
