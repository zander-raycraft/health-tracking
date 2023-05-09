import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import firebase from "firebase/compat/app";
import { onAuthStateChanged } from 'firebase/auth';
import LoginGoogle from './loginPage';
import './App.css';
import Card from './card'
// import { getDatabase } from '@firebase/database';




//telling what we are going to be getting into the Firebase
// interface Note {
//   name: string;
//   notes: string;
//   workType: string;
// }


//Starting the function of the app
function App() {

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCdUWUALeXknN_qeyeCkSAz0SN972-wRjU",
    authDomain: "mystarhealt.firebaseapp.com",
    projectId: "mystarhealt",
    storageBucket: "mystarhealt.appspot.com",
    messagingSenderId: "674990342115",
    appId: "1:674990342115:web:154b9b98b88aa311802ad6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const [ user, setUser ] = useState({ email: '', uid: "" })

  //logout handler
  const handleLogout = () => {
    firebase.auth().signOut();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase.auth(), (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe; // Add this line to return the cleanup function
  }, []);

  const [ name, setName ] = useState("");
  const [ notes, setNotes ] = useState("");
  // const [ workType, setWorkType] = useState("")
  // const [ allNotes, setAllNotes ] = useState<Note[]>([]);


  // const submitNode = () => {
  //   //Putting in the database

  //   push(ref(db,"notes/"), {a
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
        <h1 id='welcomeText'>
          <span>MyStar</span> Health Tracker
        </h1>
        <img src='/Black_star.png' alt='black-star' />
        {user ? (
          <button id='logout-button' onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to='/login'>
            <button id='login-button'>Login</button>
          </Link>
        )}
      </nav>
      <Routes>
  {user ? (
    <Route path="/" element={<Card />} />
      ) : (
        <Route path="/" element={<LoginGoogle />} />
      )}
      <Route path="/login" element={<LoginGoogle />} />
    </Routes>

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


      <input type="text" placeholder="Name" value={ name } onChange={e => setName(e.target.value)}/>
      <input type="text" placeholder="Notes" value={ notes } onChange={e => setNotes(e.target.value)}/>


      {/* <select title="Select Workout type" id="workoutmenu" onChange={e => setWorkType(e.target.value)}>
        <option value="">Select Workout type</option>
        <option value="Push Workout">Push</option>
        <option value="Pull Workout">Pull</option>
        <option value="Leg workout">Legs</option>
      </select> */}
      {/* <input type="button" value="Add Note" onClick={ submitNode }/>
      { allNotes.map(x => <p> {x.name}: <br/>{x.notes}: <br/> {x.workType} </p>) } */}
    </div>
  );
}

function Main() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Main;
