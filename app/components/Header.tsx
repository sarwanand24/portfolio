"use client"

import React from 'react'
import Link from 'next/link'
import '../globals.css'

function Header() {

    return (
  <div className="fixed top-0 left-0 w-full bg-primary shadow-sm z-50" style={{ height: '12vh' }}>
  <div className="max-w-screen-xl mx-auto flex justify-end items-center h-full px-4">
    <ul className="flex h-full items-center space-x-2">
      <li className="h-full">
        <a
          href="#about"
          className="h-full flex items-center px-4 font-[Arial] text-accent text-2xl hover:bg-secondary transition-colors"
        >
          About
        </a>
      </li>
      <li className="h-full">
        <a
          href="#work"
          className="h-full flex items-center px-4 font-[Arial] text-accent text-2xl hover:bg-secondary transition-colors"
        >
          Work
        </a>
      </li>
      <li className="h-full">
        <a
          href="#contact"
          className="h-full flex items-center px-4 font-[Arial] text-accent text-2xl hover:bg-secondary transition-colors"
        >
          Contact
        </a>
      </li>

      <li className="h-full mt-6">
        <div className="dropdown mb-72">
  <div tabIndex={0} role="button" className="btn m-1 text-accent">
    Theme
    <svg
      width="12px"
      height="12px"
      className="inline-block h-2 w-2 fill-current opacity-60"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048">
      <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
    </svg>
  </div>
  <ul tabIndex={0} className="dropdown-content bg-secondary rounded-box z-1 w-52 p-2 shadow-2xl">
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start text-accent"
        aria-label="Default"
        value="default" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start text-accent"
        aria-label="Retro"
        value="retro" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start text-accent"
        aria-label="Cyberpunk"
        value="cyberpunk" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start text-accent"
        aria-label="Valentine"
        value="valentine" />
    </li>
    <li>
      <input
        type="radio"
        name="theme-dropdown"
        className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start text-accent"
        aria-label="Coffee"
        value="coffee" />
    </li>
  </ul>
</div>
      </li>
    </ul>
  </div>
</div>
    )
}

export default Header
