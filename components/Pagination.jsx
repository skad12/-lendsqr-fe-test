import React from 'react'

function Pagination() {
    return ( 

        <>
        <div className='pt-4 px-10 font-light  flex text-sm  justify-between'>
<div className='items-baseline flex space-x-2'>
    <label  className='text-sm'><b>Showing</b></label>
    <select name='number' className='bg-gray-200 rounded-lg h-7 '>
        <option value=''>100</option>
        <option value='one'>1</option>
        <option value='two'>2</option>
        <option value='three'>3</option>
    </select>
    <div>out of 100</div>
    </div>

    <div className="space-x-5 flex text-xs  ">
      <button className='bg-gray-200'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3  ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
</button>
  <button className="text-gray-400 hover:text-gray-800">1</button>
  <button className="text-gray-400 hover:text-gray-800">2</button>
  <button className='text-gray-400 hover:text-gray-800'>3</button>
  <button className="btn btn-disabled">...</button>
  <button className="text-gray-400 hover:text-gray-800">99</button>
  <button className="text-gray-400 hover:text-gray-800">100</button>
  <button className='bg-gray-200'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
</button>
</div>

</div>
        
        </>
     );
}

export default Pagination;