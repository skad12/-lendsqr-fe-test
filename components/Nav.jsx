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
            className=" items-center hidden md:block"
          >
            
            <span className="ml-2  font-bold tracking-wide text-blue-900 ">
              Lendsqr
            </span>
          </a>

          <div class="relative rounded-md shadow-sm border lg:w-96 md:w-80 w-60">
  <input type="search" class="form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="Search" />
  <button type="submit" class="absolute inset-y-0 right-0 px-3 flex items-center bg-cyan-500 pointer-events-none hover:text-gray-700">
    <svg class="h-5 w-5 " fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
    </svg>
  </button>
</div>



          <div className=" items-end   lg:flex ">
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

          <div className="md:hidden block ">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2  transition duration-200 rounded focus:outline-none focus:shadow-outline"
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