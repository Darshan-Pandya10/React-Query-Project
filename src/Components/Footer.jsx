import React from 'react'
import '../App.css'

function Footer() {
  return (
    <div className='footer w-screen flex items-center justify-center bg-black text-white'>
        <p>Project Made with 
        <a target='_blank' href="https://reactrouter.com/en/main"> React Router </a> , 
        <a target='_blank' href="https://tanstack.com"> React Query </a> &
        <a target='_blank' href="https://axios-http.com"> AXIOS. </a>
        </p>
    </div>
  )
}

export default Footer
