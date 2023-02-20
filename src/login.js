import { env } from "process"
import React, {useEffect} from "react"
import useFetch from "../hooks/useFetch"

URL = "hanlkat.ddnsking.com:8514/login"

const Login = () => {

      const {handleGoogle, loading, error} = useFetch(URL)

      useEffect(() => {

            const google = window.google;
            if (google) {
                  google.accounts.id.initialize({
                        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                        callback: handleGoogle
                  });

                  google.accounts.id.renderButton(document.getElementById("loginDiv"), {
                        text: "signin_with"
                  });
            }
      }, [handleGoogle])


      return (
            <div>
                  <nav style = {{padding: "2rem"}}>
                        <Link to="/">Go Back</Link>
                  </nav>

                  <header style={{ textAllign: "center"}}>
                        <h1>Login to Continue</h1>
                  </header>

                  <main style={{
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "center",
                        flexDirection: "column"
                  }}>
                        {error && <p style={{text: "red"}}>{error}</p>}
                        {loading ? <div>Loading ....</div> : <div id="loginDiv"></div>}
                  </main>
            </div>
      )
}

export default Login;