import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar/>
    <Routes>
      <Route exact path="/" component={ <Home/> } />
        <Route exact path="/register" element={< Register/> } />
        <Route exact path="/login" element={ <Login/> } />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
