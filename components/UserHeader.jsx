import React from 'react';
import { Button } from '@mui/material';

function UserHeader() {
    return ( 

        <>
        <div className='font-sans'>

<div className='flex space-x-4  p-10 text-gray-500 text-sm font-sans'>
<a href='./Dash' className='flex space-x-2'>
    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>
</div>
    <div>Back to Users</div>
    </a>
</div>

<div className='flex justify-between px-10  '>
    <div className='font-bold text-2xl text-blue-800'>User Details</div>
    <div className='flex space-x-2 text-xs'>
    <Button variant="outlined" color="error" className='text-xs' >
  Blacklist User
</Button>
    <Button variant="outlined" className='border-emerald-300 text-xs hover:border-emerald-500 hover:bg-emerald-50 text-emerald-500' > Activate User</Button>
    
    </div>

</div>

        </div>
        
        </>
     );
}

export default UserHeader;