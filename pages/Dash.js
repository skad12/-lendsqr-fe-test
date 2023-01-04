import React from 'react';
import Nav from '../components/Nav';
import SideNav from '../components/SideNav';
import Cards from '../components/Cards';
import Tables from '../components/Tables';
import Pagination from '../components/Pagination';

const Dash = () => {
    return ( 

        <div className="antialiased min-w-max font-sans" >
   
            <Nav />   
          
          <div className="flex bg-gray-200   "  >
  <div className=" h-full hidden md:block  ">
    <SideNav/>
  </div>
  <div className="">
    <Cards />
    <Tables />
    <Pagination />
  </div>
</div>      
</div>
        
     );
}
 
export default Dash;

