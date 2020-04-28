import React from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import LoginPage from "./components /LoginPage";
import StudentList from "./components /StudentList";
import RegisterPage from "./components /RegisterPage";
import history from "./components /history";

function App() {
  return (
    <div className="App">
      <Router history={history}>

        <div style={{textAlign: 'center'}}>
          <ul>

            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/student-list">Student List</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/student-list" component={StudentList} />
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
