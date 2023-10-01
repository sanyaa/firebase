import {auth, provider} from "../firebase-config"
import { signInWithPopup, signOut  } from "firebase/auth";
import {useState, useEffect} from "react";


const SignIn = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const storedUser = JSON.parse(localStorage.getItem("user"))

        setUser(storedUser);
        console.log("Stored User:: ", storedUser)

    }, [])

    


    return (
        <>
            <button onClick={() => {
                signInWithPopup(auth, provider).then(result => {

                    const user = JSON.stringify(result.user)

                    setUser(user)
                    console.log(user)
                    console.log(result.user.displayName)
                    localStorage.setItem("user", user)

                }).catch((error) => {
                    console.log(error.message)
                })

            }}>
                googleSignIn
            </button>


            <div>
                {user?.email} - {user?.displayName}
            </div>
        </>
    );
};




// Define a Logout component
function Logout() {
    // Use a state variable to store the logout status
    const [logoutStatus, setLogoutStatus] = useState('');

    // Define a function to sign out the current user
    function logout() {
        // Call the signOut method with the auth object as an argument
        signOut(auth)
            .then(() => {
                // Sign-out successful, update the state variable and show a message
                setLogoutStatus('Logged out successfully');
            })
            .catch((error) => {
                // An error occurred, update the state variable and show a message
                setLogoutStatus(`An error occurred: ${error.message}`);
            });
    }

    // Return the JSX for the component, which includes a button and a status message
    return (
        <div className="logout">
            <button onClick={logout}>Logout</button>
            <p>{logoutStatus}</p>
        </div>
    );
}



function GoogleAuth()  {

    // Define a function to sign in with google
    function signInWithGoogle() {
        // Call the signInWithPopup method with the auth object and the provider object as arguments
        signInWithPopup(auth, provider)
            .then((result) => {
                // Sign-in successful, you can access the user data from the result object
                console.log(result.user);
            })
            .catch((error) => {
                // An error occurred, you can handle it here
                console.error(error);
            });
    }

    // Define a function to sign out the current user
    function signOut() {
        // Call the signOut method with the auth object as an argument
        signOut()
            /*.then(() => {
                // Sign-out successful, you can redirect the user to another page or show a message
                console.log('Logged out successfully');
            })
            .catch((error) => {
                // An error occurred, you can handle it here
                console.error(error);
            });*/

    }

    return (

        <>

            {/*// Use the signInWithGoogle and signOut functions in your component, for example in a button click handler*/}
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <button onClick={signOut}>Sign out</button>
        </>

    )



}


// Export the SignIn, Logout component
export {SignIn, Logout, GoogleAuth  }
