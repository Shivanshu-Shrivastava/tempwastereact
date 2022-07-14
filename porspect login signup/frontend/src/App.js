import './App.css';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import CreateAdmin from './components/CreateAdmin'
// import Detail from './components/Detail';


function App() {
  return (
    <Router>
      <Switch>


        
        <Route exact path='/'>
          <Login />

        </Route>
        <Route exact path='/create_account'>
          <CreateAdmin />

        </Route>
        <Route exact path='/table_page/:username'>
          <Home />

        </Route>
        


      </Switch>
    </Router>
  );
}

export default App;
