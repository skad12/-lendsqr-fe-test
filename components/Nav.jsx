import {React, useState} from 'react';
import Dropdown from '../components/Dropdown';
import Hamburger from '../components/Hamburger';
import Image from 'next/image';


export default function Nav() {


  

  return (
    <div className="bg-white">
      <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 justify-end">
        <div className="relative flex items-center justify-between">
          <a
            href="#"
            aria-label=""
            title=""
            className=" items-center "
          >
            
            <span className="ml-2  font-bold tracking-wide text-blue-900 ">
              Lendsqr
            </span>
          </a>

          <div class="relative rounded-md shadow-sm border w-96 ">
  <input type="search" class="form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 bg-white" placeholder="Search" />
  <button type="submit" class="absolute inset-y-0 right-0 px-3 flex items-center bg-cyan-500 pointer-events-none hover:text-gray-700">
    <svg class="h-5 w-5 " fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
    </svg>
  </button>
</div>



          <div className=" items-end flex hidden md:block">
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
                <Hamburger />
          </div>
        </div>
      </div>
    </div>
  );
};