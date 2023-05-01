import React, { useState } from 'react';
import Navbar from '../Component/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Shared/Footer/Footer';


const Main = () => {
  const [logIn, setLogIn] = useState(false)
 
    return (
      <div>
        <Navbar logIn={logIn} setLogIn={setLogIn} />
        <Outlet logIn={logIn} />
        <Footer />
      </div>
    );
};

export default Main;