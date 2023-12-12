import { Link, NavLink } from "react-router-dom"

function Header() {
  return (
   
       <div className='header w-screen flex justify-between items-center p-4 text-white bg-black'>
        <Link to='/home' ><h1 className='text-2xl font-bold tracking-widerrounded'>Dummy Products</h1></Link>
        <nav>
          <NavLink to='home' className='links m-2 text-base tracking-widest font-semibold'> Home </NavLink>
          <NavLink to='products' className='links m-2 text-base tracking-widest font-semibold'> Products </NavLink>
        </nav>
      </div>
   
  )
}

export default Header
