import React, { useEffect, useState } from "react";
import ConnectModal from '../components/ConnectModal';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../utils/firebase.config";
import FormTemplate from "../FormTemplate";
import { collection, getDocs } from "firebase/firestore";
import Navbar from '../components/Navigation';
const Home = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
  
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  
    useEffect(() => {
      getDocs(collection(db, "posts")).then((res) =>
        setPosts(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
    }, []);
  
    const handleLogout = async () => {
      await signOut(auth);
    };
  
    return (
        
     <div>  
       <div className="app-header">
       <Navbar />
        {user ? (
            <FormTemplate />
        ) : (
            <ConnectModal />
        )}  
            {user&& (
                <div className="user-infos">
                <h4>{user?.displayName}</h4>
                <button onClick={() => handleLogout()}>
                    <i className="fa-solid fa-arrow-right-from-bracket">se déconnecter</i>
                </button>
                </div>
            )}


        </div>
        <div className='post-container'></div>
        </div>
    );
};

export default Home;