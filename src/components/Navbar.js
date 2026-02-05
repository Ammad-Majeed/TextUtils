import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <>
        <nav className={`bg-${props.mode} text-${props.mode === "white" ? "black" : "white"} border-gray-200 dark:bg-${props.mode}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{props.title}</div>
      </Link>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <label className="relative inline-flex items-center cursor-pointer position-absolute right-[30px]">
          <input type="checkbox" value="" className="sr-only peer" onClick={props.toggleMode}/>
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[7.5px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className={`ms-3 text-${props.mode === "white" ? "black" : "white"} text-sm font-medium text-gray-900 dark:text-gray-300`}>{props.btnText}</span>
        </label>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-200">Get started</button>
          <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 bg-${props.mode} md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 dark:bg-${props.mode}`} >
          <li>
          <Link to="/" className={`block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 text-${props.mode === "white" ? "black" : "white"} md:dark:hover:bg-transparent dark:border-gray-700`}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={`block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 text-${props.mode === "white" ? "black" : "white"} dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>{props.aboutText}</Link>
          </li>
          <li>
            <Link to="/" className={`text-${props.mode === "white" ? "black" : "white"} block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Services</Link>
          </li>
          <li>
            <Link to="/" className={`text-${props.mode === "white" ? "black" : "white"} block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Contact</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    </>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired,
}


Navbar.defaultProps = {
    title : "Set Your Title",
    aboutText : "About us Session",
}
