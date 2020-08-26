import React from 'react';
import Posts from './components/Posts'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <header id="main-header">
        <nav>
          <ul>
            <li><Link to ="/">Home</Link></li> 
            <li><Link to ="/posts">Posts</Link></li>
            <li><Link to ="/test">Test</Link></li>
          </ul>        
        </nav>    
      </header>
      

      <Route exact path ="/"><h1>This is Home!!!</h1></Route>
      <Route path ="/test"><h1>This is the Test!!!</h1></Route>
      <Route path = "/posts" render = {() => {
        return <div className="App">
        <Posts/>
        </div>
    }} >

    </Route>
    </Router>
    
    
  );
}

export default App;
