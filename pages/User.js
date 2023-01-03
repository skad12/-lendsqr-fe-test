import React from 'react';
import Nav from '../components/Nav';
import SideNav from '../components/SideNav';
import UserHeader from '../components/UserHeader';
import TabUser from '../components/TabUser';


const User = () => {
    return ( 

        <div className="antialiased min-h-screen font-sans" >

         <Nav />
          
          <div className="flex h-screen">
  <div className="w-64 h-full hidden md:block ">
   
    <SideNav/>
  </div>
  <div className="flex-1 bg-gray-100 ">
      
    <UserHeader />
    <TabUser />
  </div>
</div>      
</div>
        
     );
}
 
export default User;

