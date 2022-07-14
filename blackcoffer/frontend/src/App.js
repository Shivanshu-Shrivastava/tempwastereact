import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
// import First from './components/First'
import Home from './components/Home'
// import Unscheduled from './components/Unscheduled'



function App() {
  return (
    <Router>
      <Switch>
   
         
          <Route exact path='/'>
            <Home />
            
          </Route>
          {/* <Route exact path='/sort'>
            < />
            
          </Route> */}
          
      </Switch>
    </Router>
  );
}

export default App;
