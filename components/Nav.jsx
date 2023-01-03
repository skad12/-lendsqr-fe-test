import {React, useState} from 'react';

import Dropdown from '../components/Dropdown';
import SideNav from '../components/SideNav';
import Image from 'next/image';


export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = <SideNav />

  return (
    <div className="bg-white">
      <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 justify-end">
        <div className="relative flex items-center justify-between">
          <a
            href="#"
            aria-label=""
            title=""
            className="inline-flex items-center hidden md:block"
          >
            <svg
              className="w-4 h-4 text-blue-900"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2  font-bold tracking-wide text-blue-900 ">
              Lendsqr
            </span>
          </a>

          <div className="flex items-center hidden  md:block  space-x-8 lg:flex">
          <div className="flex items-center justify-center">
    <div className="flex border-2 rounded">
        <input type="text" className="px-4 py-2 w-96 h-7 text-xs md:min-w-full" placeholder="Search for anything" />
        <button className="flex items-center justify-center px-3 border-l bg-cyan-400">
            <svg className="w-5 h-6 text-gray-600 " fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
        </button>
    </div>
</div>
          </div>


          <div className="flex items-end hidden  lg:flex ">
            <div>
              <a
                href=""
                aria-label=""
                title=""
                className='flex space-x-7'
              >
                <span className='text-sm pt-2'>Docs</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
              </span>
              <span className='flex space-x-2 '>
                <span>
    <Image src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80' width={40} height={40} alt='' className="rounded-full" />
                  </span>
                <Dropdown />
                </span> 

                     
              </a>
            </div>
          </div>

          <div className="md:hidden block">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && menu}
          </div>
        </div>
      </div>
    </div>
  );
};