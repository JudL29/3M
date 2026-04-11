import React from 'react'
import { href } from 'react-router';
const handleSubmit = (onClick) => {
    onclick.preventDefault(); // Prevent page reload
    href('/data'); // Navigate to the /data route
  };
const Login = () => {
  return (
    <div class='block w-20 h-20 border-4 border-spacing-0 bg-center '> 

    <form onSubmit={handleSubmit}>

      <input  type="text" value="" placeholder="Enter User Id" class="input input-bordered input-primary w-full max-w-xs required" />
      <button id="login-button" class="btn btn-primary">Login</button>

    </form>
</div>
   
    
  )
}

export default Login



