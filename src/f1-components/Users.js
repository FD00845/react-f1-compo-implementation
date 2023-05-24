import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { Modal,Button } from 'react-bootstrap';
 
 export const Users = () => {

    const [Userdata,SetUsers]=useState([]);
    //modal activity
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const [UserId, setUserId] = useState(0);

        function getUsers(){      
            //  console.log("Fetching");
              axios.get("https://646603d39c09d77a62fa83b7.mockapi.io/api/users").then((res)=>{
                 // console.log(res.data);
                 SetUsers(res.data);
              })
          }

          useEffect(()=>{
            getUsers();        
        },[]);

        function DeleteRecord (Id) {
            //console.log(Id);
            setUserId(Id);
            handleShow();
        }

        const DeleteConfirm = ()=>{
            axios.delete(`https://646603d39c09d77a62fa83b7.mockapi.io/api/users/${UserId}`).then((res)=>{
                handleClose();
                getUsers();
            })
        }
         
   return (
     <>
        <div className='container'>
            <div className='d-flex justify-content-between m-2'>
                <h3>User Details</h3>
                <Link to='/'>
                    <button className='btn btn-primary'>Registration</button>
                </Link> 
            </div>
            <div className='scroll-container'>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">User Name</th> 
                    <th scope="col">Password</th>
                    {/* <th scope="col">Confirm Password</th>  */}
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                {Userdata.map((u)=>{  
                    return(
                        <>
                <tbody> 
                        <tr>
                        <th scope="row">{u.id}</th>
                        <td>{u.FirstName}</td>
                        <td>{u.LastName}</td>
                        <td>{u.UserName}</td>
                        <td>{u.Password}</td>
                        {/* <td>{u.ConfirmPassword}</td> */}
                        <td>
                            <Link className='btn btn-success mx-2' to='/Update' state={u}>
                                Edit
                            </Link>
                            <button className='btn btn-danger mx-2' onClick={() => DeleteRecord(u.id)}>Delete</button> 
                        </td>
                    </tr> 
                </tbody>
                </>)
                })} 
                </table>
            </div>
        </div> 

        <Modal show={show} onHide={handleClose}>
            {/* <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
                <div className='mx-4 text-center'>Are you sure want to delete this record.</div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="danger" onClick={DeleteConfirm}>
                Delete
            </Button>
            </Modal.Footer>
        </Modal>
     </>
   )
 }
 