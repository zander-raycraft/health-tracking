import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import './App.css';
import Card from './card'
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
        <h1 id="welcomeText"><span>MyStar</span> Health Tracker</h1>
        <button id="login-button">Login</button>
        <button id="create-button" onClick={ openModal }>Create Account</button>
      </nav>

      <div id="background-container">
      </div>

      <div id='firstHalf'>
        <div id="para-container">
        <hr className="bar" />
        </div>
        {/* This is the push day card */}
        <div>
          <Card
            imageUrl="/man-benching.jpeg"
            title="push-day"
            description='Push day is when you intend to work on the muscles commonly used in pushing things
            such as triceps, chests and shoudlers.'
            className='pushDayCard'
          />
        </div>
        {/* This is the pull day card */}
        <div>
          <Card
            imageUrl="/pull-day.webp"
            title="pull-day"
            description='Pull day is when you intend to work on the muscles commonly used in pulling things
            such as biceps, back and shoudlers.'
            className='pullDayCard'
          />
        </div>
        {/* This is the leg day card */}
        <div>
          <Card
            imageUrl="/leg-day.jpeg"
            title="Leg-day"
            description='Leg day is when you spend your time focusing on the muscles of the leg such as your quads or
            your calves.'
            className='legDayCard'
          />
        </div>
      </div>


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
      <input type="text" placeholder="Name" value={ name } onChange={e => setName(e.target.value)}/>
      <input type="text" placeholder="Notes" value={ notes } onChange={e => setNotes(e.target.value)}/>
      <select title="Select Workout type" id="workoutmenu" onChange={e => setWorkType(e.target.value)}>
        <option value="">Select Workout type</option>
        <option value="Push Workout">Push</option>
        <option value="Pull Workout">Pull</option>
        <option value="Leg workout">Legs</option>
      </select>
      <br/>
      <input type="button" value="Add Note" onClick={ submitNode }/>
      { allNotes.map(x => <p> {x.name}: <br/>{x.notes}: <br/> {x.workType} </p>) }
    </div>
  );
}

export default App;
