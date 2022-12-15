
import { React, useEffect } from "react";
import useFetch from 'react-hook-usefetch';
import {Link} from "react-router-dom"

const SERVER_SIGNUP = "http://halkat.ddnsking.com:8152/signup"
const google = window.google;

const Signup = () => {
      const [handleGoogle, loading, error] = useFetch(SERVER_SIGNUP);

      useEffect(() => {

            if (google) {
                  google.accounts_id.initialize({
                        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                        callback: handleGoogle
                  })

                  google.accounts_id.renderButton(document.getElementById("signupdiv"), {
                        theme: "filled_black",
                        text: "continue_with",
                        shape: "pill"
                  })
            }
      }, [handleGoogle])


      return (
            <div>

                  <nav>
                        <Link to="/">Go Back</Link>
                  </nav>
                  <header>
                        <h1>Register here</h1>
                  </header>

                  <main>
                        {error && <p style={{color: "red"}}>{error}</p>}

                        {loading ? (<div>Loading...</div>) : (<div id="signUpDiv" data-text="signup_with"></div>)}
                  </main>
            </div>
      )

}

export default Signup ;