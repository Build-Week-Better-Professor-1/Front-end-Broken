import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import LoginPage from "./components /LoginPage";
import AddStudentComponent from "./components /AddStudentComponent";
import RegisterPage from "./components /RegisterPage";
// import history from "./components /history";

function App() {
  return (
    <div className="App">
      <Router>

        <div style={{textAlign: 'center'}}>
          <ul>

            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/student-add">Add student</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/student-add" component={AddStudentComponent} />
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/register" component={RegisterPage}/>
            <Route component={LoginPage} />

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
