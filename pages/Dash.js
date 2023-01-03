import React from 'react';
import Nav from '../components/Nav';
import SideNav from '../components/SideNav';
import Cards from '../components/Cards';
import Tables from '../components/Tables';
import Pagination from '../components/Pagination';

const Dash = () => {
    return ( 

        <div className="antialiased" >

         
          <div className=''>
            <Nav />
            </div>
         
          
          <div className="flex h-screen">
  <div className="w-64 h-full hidden md:block ">
    <SideNav/>
  </div>
  <div className="flex-1 bg-gray-100 ">
    <Cards />
    <Tables />
    <Pagination />
  </div>
</div>      
</div>
        
     );
}
 
export default Dash;

