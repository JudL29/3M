import React from 'react'
import { userID } from './Login'



const Data = () => {
    if(fetch(`http://localhost:3001/${userID}`)){
    
    <div className='min-h-screen'>
        Data
    </div>
    console.log(userID);
}
else
{
    <div className='min-h-screen'>
        Error Finding User
    </div>
}
 
}

export default Data