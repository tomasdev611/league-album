
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Albums from './components/albums'
import AlbumItem from './components/albums/album-item'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/albums' component={Albums} />
        <Route path='/album/:id/photos' component={AlbumItem} />
        <Redirect to='/login' />
      </Switch>
    </div>
  );
}

export default App;
