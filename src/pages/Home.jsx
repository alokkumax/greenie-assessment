import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { UserTile } from "../components/UserTile";
import {db} from "../../src/firebase-config"
import {collection, getDocs} from "firebase/firestore"
import Modal from "../components/Modal";

const Home = () => {
  const [query, setQuery] = useState("")
  const [users, setUsers] = useState([]);
  
  const [modal, setModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  const getUserRef = collection(db, "users")
  useEffect(()=>{
      const getUsers = async () => {
        const data = await getDocs(getUserRef)
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }
      getUsers();
  },[])

  const getFilteredItems = (query, users) => {
    // search functionality with NAME , EMAIL, PHONE
    if(!query){
      return users;
    }
    return (
      users.filter(user => user.name.toUpperCase().startsWith(query.toUpperCase())) // for case sensitivity
      )
  }
  const filter = getFilteredItems(query, users);

  const handleReport = (selectedUser) =>{
    setSelectedUser(selectedUser)
    setModal(!modal)
    // console.log(user.target.value)
  }

  return (
    <div className="home">
      <h2>User Details</h2>
      <div className="search__box">
        <div className="search">
          <IoSearch color="gray" />
          <input type="text" onChange={e => setQuery(e.target.value)} placeholder="Search username" />
        </div>
      </div>
      {/* HEAD */}

      <div className="userTileHead">
        <span>name</span>
        <span>phone</span>
        <span>email</span>
      </div>
    
      {filter.map((user) => {
        return <UserTile 
          key={user.id}
          name={user.name} 
          ph={user.phone}
          email={user.email}
          handleReport={()=>handleReport(user)}
        />;
      })}
      {
        modal && 
        <Modal 
          selectedUser = {selectedUser}
          modal = {()=>setModal(!modal)} 
          />
      }
      <br/>
    </div>
  );
};

export default Home;
