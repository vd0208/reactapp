
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './component/Home';
import { Routes, Route } from 'react-router-dom';
import Morerep from './component/Morerep';
import Header from './component/Header';
import Emp from './component/Emp';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
    
        <Routes>
        <Route path="/" element={<Emp />} />
        <Route path="/nbmhj" element={<Home />} />
        <Route path="/Morerep" element={<Morerep/>} />
        </Routes>
       
       </BrowserRouter>
    </div>
  );
}

export default App;
