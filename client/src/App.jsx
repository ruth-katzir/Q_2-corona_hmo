import Signup from '../src/pages/register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignIn from './pages/signIn'
import ResponsiveAppBar from './pages/navBar';
import Home from './pages/homePage';
import BarMorbidities from './pages/summaryView';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Router>
        <Routes>
          <Route path='/signUp' element={<Signup></Signup>} />
          <Route path='/signIn' element={<SignIn></SignIn>} />
          <Route path='barMorbidities' element={<BarMorbidities></BarMorbidities>} />
          <Route path='/' element={<Home></Home>} />
          <Route path='*' element={<h1> 404 Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
