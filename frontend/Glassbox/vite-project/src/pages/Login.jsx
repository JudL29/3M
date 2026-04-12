import React from 'react'
import { Link } from 'react-router'
import { useState } from 'react'


const [inputValue, setInputValue] = useState("");


const Login = () => {
  return (
    <div className='min-h-screen grid place-items-center h-screen'>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4  ">
            <legend className="fieldset-legend">Login</legend>

                <label className="label">Enter UserId</label>
                <input type="text" className="input" required placeholder="UserId" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>

                <Link to={"/Data"} className="btn btn-primary mt-4">
                <spam>Get Data</spam>
                </Link>
</fieldset>
   
        
</div>
  )
}


export default {Login, setInputValue}