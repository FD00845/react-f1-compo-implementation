import React, { useEffect, useState } from 'react'
import DynamicForm from "f1-dynamic-form-react";  
import { Link, useLocation, useNavigate } from "react-router-dom"
import axios from 'axios';

export const Dynamicformd1 = () => {
    const location=useLocation();
    const User =location.state;
    const data= require('../json/dynamicformDefault.json');
    const header={"Access-Control-Allow-Origin":"*"};
    const history=useNavigate(); 
    const [current, setCurrent] = useState({
        FirstName: '',
        LastName: '',
        UserName: '',
        Password: '',
        ConfirmPassword: '',
        id:0 
      })
        //...current, 
    useEffect(()=>{ 
        if(User!=null){
            setCurrent(User); 
        } 
    },[User]);

    function onSubmit(model){
        if(model.isValidForm){
          if(model.ConfirmPassword===model.Password)
          {
            // console.log(model);
            //alert("submitted!"); 
            const Objdata={
                FirstName: model.FirstName,
                LastName: model.LastName,
                UserName: model.UserName,
                Password: model.Password,
                ConfirmPassword: model.Password
            };
            let URL;
            if(current.id===0){
               URL= axios.post(
                'https://646603d39c09d77a62fa83b7.mockapi.io/api/users',Objdata,header
                ); 
            }
            else{
                URL= axios.put(
                    `https://646603d39c09d77a62fa83b7.mockapi.io/api/users/${current.id}`,Objdata,header
                    ); 
            } 

            URL.then((res)=>{
                if(res.data){
                    console.log(res.data);
                    history('/Users');
                }
            })

         }
        else
            {
             alert("Password and confirm password must be same!");
            }
        } 
      } 
      
  return (
    <div>
    {/* <div style={reduceStyle}>
    <h4>Registration Form</h4>
    <h5> Reduced Hours :- 24</h5>
    </div> */}
    {
    (current.id===0)?
     <Link to='/Users' className='pull-right'> <button className='btn btn-primary'>All User</button> 
     </Link> 
     : <Link to='/Users' className='btn btn-default pull-right'> Back </Link> 
    }
   <div className='container'>
    {<DynamicForm 
    buttonSubmit={current.id===0?"Submit":"Update"}
    title="Registration Form" 
    model={data}
    onSubmit={(model) => {
        onSubmit(model);
      }}
      defaultValues={current}
    />} 
    </div>
  </div>
  )
}
