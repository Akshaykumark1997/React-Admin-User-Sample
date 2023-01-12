import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreaters } from './State/index';



import NavBar from './Components/NavBar/NavBar';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

function App() {
  const state = useSelector(state=>state);
  const dispatch = useDispatch();
  const {storeToken,removeToken} = bindActionCreators(actionCreaters,dispatch);
  console.log(state);

  return (
    
    <BrowserRouter>
    <div>
      <NavBar/>
    <Routes>
      <Route exact path="/" element={ <Home/> } />
        <Route exact path="/register" element={< Register/> } />
        <Route exact path="/login" element={ <Login/> } />
    </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
