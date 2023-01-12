import React,{useEffect} from 'react'
import './Home.css'

import {useNavigate} from "react-router-dom";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreaters } from '../../State/index';


function Home() {
  const navigate = useNavigate();
  const auth = useSelector(state=>state); 
  const dispatch = useDispatch();
  const {removeToken} = bindActionCreators(actionCreaters,dispatch);
  


  const handleLogout = ()=>{
    const data ={
                token:auth.token,
                id:auth.id
            }
            console.log(data);
    removeToken(data);
    navigate('/login');
  }
   useEffect(()=>{
    console.log(auth);
    if(auth.token.token === ''){
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div>
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
        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="hii" className="ui-w-100 rounded-circle"/>
        <div className="col-md-8 col-lg-6 col-xl-5 p-0 mx-auto">
          <input type="file" className='btn btn-success btn-sm mt-4' />
          <h4 className="font-weight-bold my-4">John Doe</h4>

          <div className="opacity-75 mb-4">
            Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad harum primis electram duo, porro principes ei has.
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