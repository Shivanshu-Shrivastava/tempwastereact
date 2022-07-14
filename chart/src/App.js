import './App.css';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Graph from './components/Graph';


function App() {
  return (
    <Router>
      <Switch>


        
        <Route exact path='/'>
          <Home />

        </Route>
        <Route exact path='/showgraph'>
          <Graph />

        </Route>
       
        
   



      </Switch>
    </Router>
  );
}

export default App;
