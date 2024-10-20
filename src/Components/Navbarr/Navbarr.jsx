import { Navbar } from "flowbite-react";

import { Link, NavLink } from 'react-router-dom';
export default function Navbarr() {
  return (
    <>
      <Navbar className=" bg-slate-200 py-5 sticky top-0" >
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Elevate Task</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="flex-grow ml-20">
          <NavLink to="/">Home</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
