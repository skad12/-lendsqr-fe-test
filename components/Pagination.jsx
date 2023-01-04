import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} className='hidden md:block'>
      <Typography className='flex justify-between lg:px-16 md:px-8 px-4  '>

        
      <div className=" flex space-x-2 ">
        <span className='pt-1'>Showing </span>
  <select className="form-select block w-20  rounded-md bg-gray-300 py-2  text-center leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
    <option>100</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
  <span className='pt-1'>out of {page} </span>
</div>

        
        <Pagination count={100} page={page} onChange={handleChange} />
        </Typography>
      
    </Stack>
  );
}