import './App.css';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import Footer from './Component/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import About from './Component/About/About';
import Upcoming from './Component/Upcoming/Upcoming';
import Popular from './Component/Popular/Popular';
import MoreService from './Component/Main/MoreService/MoreService';
import Notfound from './Component/Notfound/Notfound';
import Extra from './Component/Extra/Extra';

//Router start
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Main></Main>
            <Extra></Extra>
          </Route>

          <Route path="/home">
            <Main></Main>
            <Extra></Extra>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/services">
            <MoreService></MoreService>
          </Route>

          <Route path="/popular">
            <Popular></Popular>
          </Route>

          <Route path="/upcoming">
            <Upcoming></Upcoming>
          </Route>

          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
