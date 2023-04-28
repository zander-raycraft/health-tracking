import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import './App.css';
import Card from './card'
// import { getDatabase } from '@firebase/database';

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
// const db = getDatabase();

//telling what we are going to be getting into the Firebase
// interface Note {
//   name: string;
//   notes: string;
//   workType: string;
// }


function App() {

  const [ name, setName ] = useState("");
  const [ notes, setNotes ] = useState("");
  // const [ workType, setWorkType] = useState("")
  // const [ allNotes, setAllNotes ] = useState<Note[]>([]);


  const openModal = () => {
    const modal = document.getElementById("modal-container");
    if( modal != null){
      modal.style.display = "block";
    }
  }


  // const submitNode = () => {
  //   //Putting in the database

  //   push(ref(db,"notes/"), {
  //     name,
  //     notes,
  //     // workType
  //   });

  //   setName("");
  //   setNotes("");
  // };

  // useEffect(() => {
  //   //Creating an observer 
  //   onValue(ref(db, "notes/"), snapshot => {
  //   console.log(snapshot.val());
  //   setAllNotes(Object.values(snapshot.val()));
  // });
  // }, []);

  return (
    <div className='app'>
      <nav>
        <h1 id="welcomeText"><span>MyStar</span> Health Tracker</h1>
        <img src='/Black_star.png' alt='black-star'/>
        <button id="login-button">Login</button>
        <button id="create-button" onClick={ openModal }>Register</button>
      </nav>

      <div id="background-container">
      </div>

      <div id='firstHalf'>
        <hr className="bar" />
        <hr className="bar2" />
        <div className="first-half-paragraph-container">
          <h1>About us...</h1>
          <p>The <span>MyStar</span> team wanted to provide an easily accessible way to log and track
          your health Journey, and this app does exactly that, provide you with a way to track your personal
          journey and see how much progress you have made!</p>
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

      {/* This is the container for the second half of the landing page */}
      <div className='secondHalf'>
        <h1>How we can help...</h1>  
        <p>We know it can be a lot trying to manage all 
          elements of your life, so why not let us carry some of that burden!</p> 
        <h1>What we can offer</h1> 
        <p>We are a free tracking service, and no we do not track your location, we will 
        leave that to the big dogs (Mark Zuckerberg). <br/><br/>Here are some cool things we 
        can offer that we think might just help you out:</p>

        <p><span>Workout Tracking</span><img src='/Black_star.png' alt='black-star'></img>- We can help you track your workouts and categorize them, allowing you to
        see the fruits of your labor</p>

        <p><span>Mental Health check-in</span><img src='/Black_star.png' alt='black-star'></img>- We know that mental health is as important, if not more than 
        physical healh. By logging how you feel and better evaluate where you are right now in your mental health
        journey. Oh and with your conscent, we might reach out and check on you every now and then, because it is
        nice to have someone sometimes</p>

        <p><span>Journaling</span><img src='/Black_star.png' alt='black-star'></img>- We want to give you a space to record all your thoughts, and reflections. Kinda
        like a a virtual journal. And do not worry, we cannot see waht you put in, only you the authorized user can,
        all thanks to some cool blockchain things</p>

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
      {/* <select title="Select Workout type" id="workoutmenu" onChange={e => setWorkType(e.target.value)}>
        <option value="">Select Workout type</option>
        <option value="Push Workout">Push</option>
        <option value="Pull Workout">Pull</option>
        <option value="Leg workout">Legs</option>
      </select> */}
      <br/>
      {/* <input type="button" value="Add Note" onClick={ submitNode }/>
      { allNotes.map(x => <p> {x.name}: <br/>{x.notes}: <br/> {x.workType} </p>) } */}
    </div>
  );
}

export default App;
