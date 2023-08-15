import React from 'react'
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto bg-#F4F2F3'>

        <Link to="/"> 
            <img src={logo} alt="Logo" width={150} height={30} loading="lazy"/>
        </Link>

        <nav>
            <ul className='text-[#64766A] flex gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Find an Expert</Link>
                </li>
                <li>
                    <Link to="/">Tips</Link>
                </li>
                <li>
                    <Link to="/">Help Center</Link>
                </li>
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex ml-5 mr-3 gap-5 text-[1.2rem] text-white-800'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 px-[12px] py-[8px] rounded-lg border-richblack-700'>
                        Login
                    </button>
                </Link>
            }
           
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }} className=' bg-richblack-800 px-[12px] py-[8px] rounded-lg border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richblack-800 px-[12px] py-[8px] rounded-lg border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar
