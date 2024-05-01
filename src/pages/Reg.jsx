import React from 'react'
import { useNavigate } from 'react-router-dom';

const Reg = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    const Navigate = useNavigate();

    const handleLogout = async () => {
        window.location.reload();
        Navigate('/login');
    }

  return (
    <div>
       <h1>Welcome to the Home Dear {user && user.email}!</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Reg
