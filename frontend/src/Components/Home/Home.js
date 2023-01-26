import React,{useState,useEffect} from 'react'
import './Home.css'
import axios from '../../axios';
import NavBar from '../NavBar/NavBar';
import {useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreaters } from '../../State/index';


function Home() {
  const navigate = useNavigate();
  const [user,setUser] = useState({});
  const auth = useSelector(state=>state); 
  const [updated, setUpdated] = useState(null);
  const [image, setImage] = useState(null);
    var formData = new FormData();
  const dispatch = useDispatch();
  const {removeToken} = bindActionCreators(actionCreaters,dispatch);
  


  const handleLogout = ()=>{
    const data ={
                token:auth.token,
                id:auth.id
            }
            // console.log(data);
    removeToken(data);
    navigate('/login');
  }
   useEffect(()=>{
    console.log(auth.token.id);
    if(auth.token.token === ''){
      navigate('/login');
    }else{
      axios.get(`http://localhost:9000/users/${auth.token.id}`, {
            token: auth.token.token,
            id: auth.token.id,
          }).then((response)=>{
        console.log(response.data)
        setUser(response.data.user);
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleImageChange = () => {
    formData.append("image", image);
    axios
      .post(`http://localhost:9000/addprofile/${auth.token.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        setUpdated(image);
        setImage(null);
      });
  };
    const url = `http://localhost:9000/profile/${user._id}.jpg`;

  return (
    <div>
      <NavBar/>
       <div className="ui-bg-cover ui-bg-overlay-container text-white">
    <div className="ui-bg-overlay bg-dark opacity-50"></div>
    <div className="container">
      <div className="container">
      <div className="d-flex justify-content-end align-items-end pt-4">
        <div>
          <button onClick={handleLogout}  className="btn btn-success btn-sm">
            Logout
          </button>
        </div>
      </div>
    </div>
      <div className="text-center py-5">
        <img src={updated != null ? URL.createObjectURL(updated) : url} alt="profile" className="ui-w-100 rounded-circle"/>
        <div className="col-md-8 col-lg-6 col-xl-5 p-0 mx-auto">
          <input onChange={(event) => {
              setImage(event.target.files[0]);
            }} type="file" className='btn btn-success btn-sm mt-4' /><br/>
             <button onClick={handleImageChange}  className='btn btn-success btn-sm mt-4'>upload</button>
          <h4 className="font-weight-bold my-4">{user.name}</h4>
           
          <div className="opacity-75 mb-4">
            {user.email}
          </div>
        </div>

        <div className="text-center pt-3">
          <a href="/" className="btn icon-btn btn-twitter btn-round">
            <span className="ion ion-logo-twitter"></span>
          </a>
          &nbsp;
          <a href="/" className="btn icon-btn btn-facebook btn-round">
            <span className="ion ion-logo-facebook"></span>
          </a>
          &nbsp;
          <a href="/" className="btn icon-btn btn-instagram btn-round">
            <span className="ion ion-logo-instagram"></span>
          </a>
        </div>
      </div>
    </div>
</div>
    </div>
  )
}

export default Home