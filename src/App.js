import './App.css';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Category from './components/pages/Category/Category';
import Location from './components/pages/Location/Location';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/category' element={<Category />}></Route>
        <Route path='/location' element={<Location />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
