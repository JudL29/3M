import React from 'react'
import {Route, Routes} from 'react-router';
//import Data from './page/Data';
import Login from './page/Login';

const App = () => {
  return (
    <div data-theme="luxury">
        <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App