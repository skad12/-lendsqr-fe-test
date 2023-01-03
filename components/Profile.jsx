import React from 'react';
import Ratings from '../components/Ratings';


function profile() {
    return (
        
        <>
        
        <div className='grid grid-cols-3 divide-x px-4'>
            
            <div className='flex space-x-2'>

     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" bg-gray-400 rounded-full h-32 w-32 text-center text-blue-800 p-5 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>  
                <div className='text-blue-800 p-5 '>
                    <span className='font-bold '>Grace Effiom</span><br/>
                    <span className=' text-xs '>LSQFf587g90</span>
                </div>
                </div>


            <div className='p-5 text-gray-700 text-sm'>
                <span className>User&apos;s Tier</span>
                <Ratings />
            </div>

            <div className='text-blue-800 p-5'>
                <span className='font-semibold text-xl'> &#8358;200,000.00</span><br/>
                <span className='text-xs'>9912345678/Providus Bank</span>
            </div>

        </div>
        
        
        </>
     );
}

export default profile;