import React, { useRef } from 'react'
import axios from 'axios';
import useAuth from '../../store/AuthStore';

export default function Login() {

  const { setToken } = useAuth();

  const elEmail = useRef()
  const elPassword = useRef()

  const handleSubmitForm = (evt) => {
    evt.preventDefault()
    axios.post("https://fakestoreapi.com/auth/login", {
      username: elEmail.current.value,
      password: elPassword.current.value
    })
      .then(function (response) {
        setToken(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className='section'>
      <div className="container">
        <form onSubmit={handleSubmitForm}>
          <h1>login</h1>
          <input ref={elEmail} type="text" placeholder='Username..' />
          <input ref={elPassword} type="password" placeholder='Password...' />
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}
