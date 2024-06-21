import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [isOpen, setOpen] = useState()

  const ToggleMenu = () => {
    setOpen(!isOpen)
  }
  return (
    // md-header
    <>
      <header className="w-full  h-[12vh] shadow hidden  md:flex items-center fixed top-0 bg-white z-10">
        <nav className="flex items-center justify-between px-10 w-full h-[13vh]">
          <section className="flex items-center gap-10 font-sans font-medium">
            <div className="flex items-center gap-3">
              <i className="bi bi-layers-fill text-slate-600 text-4xl"></i>
              <b className="font-bold text-[5vh] text-[#504f4f]">
                remove<span className="text-[#b2b0b0] pl-1">bg</span>
              </b>
            </div>
            <div>
              <p className="hover:text-yellow-700 text-[#797777] text-[2.8vh]">
                Remove Background
              </p>
            </div>
            <div className="flex items-center">
              <NavLink
                to={'/price'}
                className="hover:text-yellow-700 text-[#797777] text-[2.8vh]"
              >
                How to use
              </NavLink>
              <i className="bi bi-chevron-down"></i>
            </div>
            <div>
              <p className="hover:text-yellow-700 text-[#797777] text-[2.8vh]">
                Tools & API
              </p>
            </div>
            <div>
              <p className="hover:text-yellow-700 text-[#797777] text-[2.8vh]">
                Pricing
              </p>
            </div>
          </section>
          <section className="flex items-center font-medium font-sans gap-8">
            <div>
              <p className="hover:text-yellow-700 text-[2.7vh] text-[#797777]">
                Log in
              </p>
            </div>
            <div className="flex items-center text-[3vh] justify-center w-[8vw] h-[7vh] rounded-[30px] bg-gray-200 hover:bg-gray-300">
              <button>Sign up</button>
            </div>
          </section>
        </nav>
      </header>
      {/* sm-header */}
      <header className=" md:hidden w-full h-[14vh] shadow-md flex items-center justify-between px-8 fixed z-10 bg-white top-0">
        <div className="flex items-center gap-3">
          <i className="bi bi-layers-fill text-slate-600 text-6xl"></i>
          <b className="font-bold md:text-[3vh] text-[4.5vh] text-[#504f4f]">
            remove<span className="text-[#b2b0b0] ">bg</span>
          </b>
        </div>
        <ul>
          <i
            className="bi bi-list text-2xl cursor-pointer"
            onClick={ToggleMenu}
          ></i>
        </ul>
      </header>
      {isOpen && (
        <section className=" flex flex-col md:hidden fixed  top-[90px] bg-white w-full h-[100vh] z-[10] ease-in transition-all gap-3 ">
          <div className=" border-b-[1px] border-b-[gray] h-[12vh] flex items-center  pl-5">
            <p className="hover:text-yellow-700 font-sans font-semibold text-[#797777] text-[2.6vh]">
              Remove Background
            </p>
          </div>
          <div className=" border-b-[1px] border-b-[gray] h-[12vh] flex items-center justify-between  pl-5 pr-5">
            <p className="hover:text-yellow-700 font-sans font-semibold text-[#797777] text-[2.6vh]">
              How to use
            </p>
            <i className="bi bi-chevron-down"></i>
          </div>
          <div className=" border-b-[1px] border-b-[gray] h-[12vh] flex items-center  pl-5">
            <p className="hover:text-yellow-700 font-sans font-semibold text-[#797777] text-[2.6vh]">
              Tools & API
            </p>
          </div>
          <div className=" border-b-[1px] border-b-[gray] h-[12vh] flex items-center  pl-5">
            <p className="hover:text-yellow-700 font-sans font-semibold text-[#797777] text-[2.6vh]">
              Pricing
            </p>
          </div>
          <div className=" border-b-[1px] border-b-[gray] h-[12vh] flex items-center  pl-5">
            <p className="hover:text-yellow-700 font-sans font-semibold text-[2.6vh] text-[#797777]">
              Log in
            </p>
          </div>
          <div className=" w-full flex items-center justify-center border-b-[1px] border-b-[gray] h-[12vh]">
            <button className="flex items-center md:text-[3vh] text-[2.7vh] font-sans font-semibold justify-center w-[50vw] h-[8vh] rounded-[30px] bg-gray-200 hover:bg-gray-300">
              Sign up
            </button>
          </div>
        </section>
      )}
    </>
  )
}
export default Header
