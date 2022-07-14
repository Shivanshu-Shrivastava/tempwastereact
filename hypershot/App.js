import './App.css';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail';


function App() {
  return (
    <Router>
      <Switch>


        <Route exact path='/'>
          <Home />

        </Route>
        <Route exact path='/category/:id'>
          <Detail />

        </Route>
        


      </Switch>
    </Router>
  );
}

export default App;
