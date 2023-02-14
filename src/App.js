import './App.css';
import react, {useState} from 'react';


function App() {

const [profile, setProfile] = useState({user: "", password: ""});

const inputChanged = (e) => {
  setProfile({...profile, [e.target.name]: e.target.value});
}

  return (
    <div className="App" style={{color:'red'}}>
        <h1>My website headline</h1>
        <p>Heres some bs text too</p>
        <form>
        <div>  
          <input placeholder='Username' name='user' value={profile.user} onChange={inputChanged}/>
        </div>
        <div>
          <input placeholder='Password' name='password' value={profile.password} onChange={inputChanged}/>
        </div>
        <div>
          <input value='Press teh button' type='submit'/>
        </div>
        </form>
    </div>
  );
}

export default App;
