import React, { useState } from 'react'
import {db} from "../../src/firebase-config"
import {addDoc,collection} from "firebase/firestore"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Create = () => {
  //USER DETAIL
  const [ name, setName] = useState("")
  const [ email, setEmail] = useState("")
  const [ phone, setPhone] = useState("")
  const [ password, setPassword] = useState("")

  let currentDate = new Date().toJSON().slice(0, 10);
  console.log(currentDate)
  const getUserRef = collection(db, "users")
  const createUser = async (e) =>{
    await addDoc(getUserRef, 
      {
        name: name, 
        email: email,
        phone: phone,
        password: password,
        date: currentDate,
      } )
      window.location.reload() 
  }

  return (
    <div className='home'>
      <h2>Create a user</h2>
      <div className='input__box'>
        <input onChange={((e)=> {setName(e.target.value)})} type='text' placeholder='username' required/>
        <input onChange={((e)=> {setPassword(e.target.value)})} type='password' placeholder='password' required/>
      </div>
      <div className='input__box'>
      <input onChange={((e)=> {setEmail(e.target.value)})} type='email' placeholder='email' required/>
        <input onChange={((e)=> {setPhone (e.target.value)})} type='number' placeholder='phone' required/>
      </div>
      <button disabled={((name === "" || password ==="" || email ==="" || phone==="")? true : false)} onClick={createUser} className='btn mt-1'>Register</button>
    </div>
    )
}

export default Create;