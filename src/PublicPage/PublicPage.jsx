import React, { useEffect } from 'react';
import Login from "../Pages/Login/Login"
import PrivatePage from "../PrivatePage/PrivatePage"
import useAuth from '../store/AuthStore';

export default function PublicPage() {

  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  if (token) {
    return <PrivatePage />
  }
  return <Login />
}

