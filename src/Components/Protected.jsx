import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

// This component is used to protect the routes that require authentication.
const Protected = () => {
    const token = localStorage.getItem('token');

  return (
    token ? <Outlet /> : <Navigate to='/login' />
  )
}

export default Protected