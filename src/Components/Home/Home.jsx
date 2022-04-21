import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'

function Home({ loggedIn }) {

  return (
    <div className="Home">
      <h1>TotalRecall</h1>
      <p>Know if your car is going to break, before it breaks. </p>
      {loggedIn
        ? <h2>Welcome Back!</h2>
        : <Link className="btn btn-primary" to="/login">Login</Link>}
    </div>
  )
}

export default Home;