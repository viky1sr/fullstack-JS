import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";

import NavbarComponent from "./components/Navbar.component";
import EditExercisesComponent from "./components/EditExercises.component";
import ExercisesListComponent from "./components/ExercisesList.component";
import CreateExercises from "./components/CreateExercises.component";
import CreateUsersComponent from "./components/CreateUsers.component";

function App() {
  return (
   <Router>
       <div className="container">
       <NavbarComponent />
       <br/>
       <Route path="/" exact component={ExercisesListComponent} />
       <Route path="/edit/:id"  component={EditExercisesComponent} />
       <Route path="/create"  component={CreateExercises} />
       <Route path="/user"  component={CreateUsersComponent} />
       </div>
   </Router>
  );
}

export default App;
