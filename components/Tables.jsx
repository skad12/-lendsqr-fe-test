import React from 'react';
import Dots from '../components/Dots';



function Tables() {
    return ( 

        <>
     

<section className="py-8 bg-blueGray-50">
  <div className="  mx-auto">
    <div className="p-7 pb-12 pt-12  rounded-5xl">
     
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full overflow-hidden ">
          <table className=" table-auto px-16 w-full bg-white">
            <thead>
              <tr>
                <th className="p-5 h-20 bg-white  ">
                  <span className="block text-xs text-body text-opacity-40 font-sans font-semibold uppercase min-w-max">Organization</span>
                  
                </th>
                <th className="p-5 h-20 bg-white">
                  <span className="block text-xs text-body text-opacity-40 font-heading font-semibold uppercase min-w-max">username</span>
                  
                </th>
                <th className="p-5 h-20 bg-white">
                  <span className="block text-xs text-body text-opacity-40 font-heading font-semibold uppercase min-w-max">Email</span>
                </th>
                <th className="p-5 h-20 bg-white">
                  <span className="block text-xs text-body text-opacity-40 font-heading font-semibold uppercase min-w-max">phone number</span>
                </th>
                
                <th className="p-5 h-20 bg-white">
                  <span className="block text-xs text-body text-opacity-40 font-heading font-semibold uppercase min-w-max">Date joined</span>
                 
                </th>
                <th className="p-5 h-20 bg-white">
                  <span className="block text-xs text-body text-opacity-40 font-heading font-semibold uppercase min-w-max">Status</span>
                  
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-0">
                  <div className="flex items-center pl-10 xl:pl-24 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                    <span className="text-sm font-heading">Lendsqr</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">Adedji</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">adedeji@lendsqr.com</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">08160780928</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">May 15, 2020 10:10 AM</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className=" flex space-x-5 items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-r border-gray-100 rounded-tr-5xl rounded-br-5xl">
                    <span className="py-1 px-3 text-xs text-gray-700 font-heading font-medium bg-gray-200 rounded-full">Inactive</span>
                    <Dots />
                  </div>
                </td>
              </tr>
              <tr>
              <td className="p-0">
                  <div className="flex items-center pl-10 xl:pl-24 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                    <span className="text-sm font-heading">Lendsqr</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">Adedji</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">adedeji@lendsqr.com</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">08160780928</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">May 15, 2020 10:10 AM</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex space-x-5 items-center justify-center p-5 h-20 text-center bg-white rounded-tr-5xl border-t border-b border-r border-gray-100 rounded-br-5xl">
                    <span className="py-1 px-3 text-xs text-yellow-600 font-heading font-medium bg-yellow-200 rounded-full">Pending</span>
                    <Dots />
                  </div>
                </td>
              </tr>
              <tr>
              <td className="p-0">
                  <div className="flex items-center pl-10 xl:pl-24 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                    <span className="text-sm font-heading">Lendsqr</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">Adedji</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">adedeji@lendsqr.com</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">08160780928</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">May 15, 2020 10:10 AM</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex space-x-2 items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-r border-gray-100 rounded-tr-5xl rounded-br-5xl">
                    <span className="py-1 px-3 text-xs text-red-700 font-heading font-medium bg-red-200 rounded-full">Blacklisted</span>
                    <Dots />
                  </div>
                </td>
              </tr>

                            <tr>
                            <td className="p-0">
                  <div className="flex items-center pl-10 xl:pl-24 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                    <span className="text-sm font-heading">Lendsqr</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">Adedji</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">adedeji@lendsqr.com</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">08160780928</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">May 15, 2020 10:10 AM</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex space-x-8 items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-r border-gray-100 rounded-tr-5xl rounded-br-5xl">
                    <span className="py-1 px-3 text-xs text-green-700 font-heading font-medium bg-green-200 rounded-full">Active</span>
                    <Dots />
                  </div>
                </td>
              </tr>
              <tr>
              <td className="p-0">
                  <div className="flex items-center pl-10 xl:pl-24 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                    <span className="text-sm font-heading">Lendsqr</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">Adedji</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">adedeji@lendsqr.com</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">08160780928</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">May 15, 2020 10:10 AM</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex space-x-8 items-center justify-center p-5 h-20 text-center bg-white rounded-tr-5xl rounded-br-5xl border-t border-b border-r border-gray-100">
                    <span className="py-1 px-3 text-xs text-green-700 font-heading font-medium bg-green-200 rounded-full">Active</span>
                    <Dots />
                  </div>
                </td>
              </tr>
              <tr>
              <td className="p-0">
                  <div className="flex items-center pl-10 xl:pl-24 h-20 bg-blueGray-50 border-l border-t border-b border-gray-100 rounded-tl-5xl rounded-bl-5xl">
                    <span className="text-sm font-heading">Lendsqr</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">Adedji</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">adedeji@lendsqr.com</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">08160780928</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-gray-100">
                    <span className="text-sm text-darkBlueGray-400 font-heading">May 15, 2020 10:10 AM</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex space-x-2 items-center justify-center p-5 h-20 text-center bg-blueGray-50 border-t border-b border-r border-gray-100 rounded-tr-5xl rounded-br-5xl">
                    <span className="py-1 px-3 text-xs text-red-700 font-heading font-medium bg-red-200 rounded-full">Blacklisted</span>
                    <Dots />
                  </div>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>

           
        
        </>
     );
}

export default Tables;