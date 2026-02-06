import React from "react";

import { useSelector} from "react-redux"
import DesktopNavItems from "./DesktopNavItems";
import LoginSignUp from "./Login-SignUp";
import NavbarUserMenu from "./NavbarUserMenu";

const Navbar = () => {

  const authStatus = useSelector((state)=>state.auth.status)
 
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">SmartQueue</h1>
          </div>

          {/* Center - Info Links */}
          
           <div className="flex items-center" >
             <DesktopNavItems/>
          {/* Right - Login / Register */}
          
          {
            !authStatus ? (
              <LoginSignUp/>
            ):<NavbarUserMenu/>
          }

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            {/* Optional: Add mobile hamburger menu here */}
          </div>
           </div>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
