import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import './App.css';
import Donateblood from './components/pages/Donateblood/donateblood';
import Home from './components/pages/Home/home';
import Doner from './components/pages/Adddoner/doner';
import Finddonors from './components/pages/Bloodneed/bloodneed';
import { Toaster } from "react-hot-toast";
// import Bloodbank from './components/pages/bloodbank/bloodbank';

function App() {
  return (<Router>
    {/* <Nav /> */}
     <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/donation" element={<Donateblood/>} />
    <Route exact path="/bloodneed" element={<Finddonors />} />
    <Route exact path="/newdoner" element={<Doner />} />
    {/* <Route exact path="/bloodbank" element={<Bloodbank />} /> */}
    </Routes>
    {/* <Footer /> */}
    <Toaster />
  </Router>
  );
}

export default App;
