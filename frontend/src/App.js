import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';



import NavBar from './Components/NavBar/NavBar';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Home/Home';
import AddUser from './Components/Admin/AddUser/AddUser';
import AdminLogin from './Components/Admin/Login/AdminLogin';
import EditUser from './Components/Admin/EditUser/EditUser';

function App() {
  // const state = useSelector(state=>state); 
   
  return (
    
    <BrowserRouter>
    <NavBar/>
    <div>
    <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/register" element={< Register/> } />
        <Route exact path="/login" element={ <Login/> } />
        <Route exact path="/admin" element={ <AdminLogin/> } />
        <Route exact path="/admin/home" element={ <Admin/> } />
        <Route exact path="/admin/addUser" element={ <AddUser/> } />
        <Route exact path="/admin/editUser" element={ <EditUser/> } />
    </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
