import React from 'react';
import Nav from '../components/Nav';
import SideNav from '../components/SideNav';
import UserHeader from '../components/UserHeader';
import TabUser from '../components/TabUser';


const User = () => {
    return ( 

        <div className="antialiased min-h-max min-w-max font-sans" >

         <Nav />
          
          <div className="flex bg-gray-200">
  <div className="min-h-wax hidden md:block ">
    <SideNav/>
  </div>
  <div className="">
      
    <UserHeader />
    <TabUser />
  </div>
</div>      
</div>
        
     );
}
 
export default User;

