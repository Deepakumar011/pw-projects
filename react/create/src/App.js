
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';

// import About from './component/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  return (
    <>
      <Navbar />
      <div className="container">

      {/* <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <Textform />
        </Route>
      </Switch>
    </Router > */}
    </div>

    <Textform />
    {/* <About /> */}
 </>
   
  )
}

export default App;