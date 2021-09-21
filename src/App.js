import './App.css';
import Home from './components/Home';
import { Route, Switch } from 'react-router';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} component={Home} />
      </Switch>
    </div>
  );
}

export default App;
