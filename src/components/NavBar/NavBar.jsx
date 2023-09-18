import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import {  AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];
  return (
    <nav className="text-black p-6 bg-yellow-300">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {
          open === true ?
          <AiOutlineClose></AiOutlineClose>
         : 
          <RiMenu2Fill></RiMenu2Fill>
        }
      </div>


    {/*   <ul className={`md:flex absolute duration-1000 ${open?'':'hidden'} bg-yellow-200 px-6 shadow-lg`}> */}

    <ul className={`md:flex md:items-center md:justify-center absolute md:static duration-1000 ${open?'top-16':'-top-60'} bg-yellow-200 px-2 py-2 shadow-lg md:shadow-none rounded-xl`}>

        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
      {/* <h1 className="bg-red-100">test</h1> */}
    </nav>
  );
};

export default NavBar;
