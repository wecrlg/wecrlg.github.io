import { React, useEffect } from 'react'
import "./Home.css"
import "../../index.css"
import { mobileView, viewOnMobileDevicesOnly } from "../../appData.js"
import Logo from "../../assets/logo.png"

const Home = () => {


  function showSignInForm() {
    console.log("Sign In");
  }

  useEffect(() => {
    viewOnMobileDevicesOnly(mobileView)
  }, [])

  return (
    <div>
      <main>
        <div className='main-nav'>
          <img src={Logo} alt="Logo" />

          <div className="d-flex align-items-center gap-2">
            <select>
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
            </select>

            <button id="sign-in-top" className="sign-in" onClick={showSignInForm}>
              Sign In
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home