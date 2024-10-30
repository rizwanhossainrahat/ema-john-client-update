import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut, getIdToken  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth()
    const googleProvide = new GoogleAuthProvider()


    const singnInUsingGoogle = () => {
          // for location we return
        return signInWithPopup(auth, googleProvide);
      
        
            // .then(result => {
            //         console.log(result.user)
            // })
    }

    const logOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    // observe user auth state change or not 
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                getIdToken(user)
                .then(idToken=>localStorage.setItem('idToken',idToken))
                setUser(user)
                // holding for changing state use this onAuthStateChanged hook
            }
        })
    },[])

    return{
        user,
        singnInUsingGoogle,
        logOut
    }
}

export default useFirebase;