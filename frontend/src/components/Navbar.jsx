import React from "react";
import {NAV_LINKS } from "../constants"
const Navbar = () => {
  return (
    <header className="w-full padding-x py-8 absolute z-10">
      <nav className="flex justify-between max-container items-center">
        <a href="/">
          <img
           src="images/logo.svg"
            alt="Logo"
            width={130}
            height={29}
            />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        {NAV_LINKS.map((item)=>(
            <li key={item.label} >
                <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                    {item.label}
                </a>
            </li>
        ))}
        </ul>
        
      </nav>
    </header>
  );
};

export default Navbar;