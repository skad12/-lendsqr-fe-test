import React from 'react';
import Head from 'next/head'; 


const Home = () => {


    return ( 

<>

<Head>
  <title>Lendsqr</title>
  <meta name="lendsqr" content="lendsqr" />
  <link rel="icon" href="/favicon.ico" />
</Head>


<div className="bg-white font-sans h-screen pt-20 md:pt-0" >

    <div className="w-full flex flex-wrap">

    <div className="w-1/2  focus:outline-none object-cover h-screen hidden md:block " style={{backgroundImage: `url('https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80')` }}>
          
        </div>

       
        <div className="w-full md:w-1/2 flex flex-col">

            

            <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                <p className=" text-3xl text-blue-900 font-bold">Welcome!</p>
                <p className=" text-sm font-light text-blue-900">Enter details to login </p>
                <form className="flex flex-col pt-3 md:pt-4" >
                    <div className="flex flex-col pt-4">
                        <input type="email" id="email" placeholder="Email" className=" text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-blue-400" />
                    </div>
    
                    <div className="flex flex-col pt-4">
                        <input type="password" id="password" placeholder="Password" className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-blue-400" />
                    </div>

                        <div className='pt-4'>
                    <p className=" text-xs font-semibold text-cyan-500 tracking-wider">FORGOT PASSWORD? </p>
                    </div>

                    <div className="mt-6 flex h-10 cursor-pointer justify-center items-center text-sm rounded-md border-2 bg-cyan-500  text-white lg:w-full">
                        <a href='./Dash'>
                            <p className='text-white'>LOG IN</p>
                            </a>
                    </div>

                </form>
               
            </div>

        </div>

     
    
    </div>


</div>
</>
     );
}
 
export default Home;



// import React from 'react';
// import Head from 'next/head';


// const Home = () => {
//     return ( 

// <div className=''>

// <Head>
//   <title>Lendsqr</title>
//   <meta name="lendsqr" content="lendsqr" />
//   <link rel="icon" href="/favicon.ico" />
// </Head>


// <div className="grid gap-24 bg-gray-100 grid-cols-2 md:x-16 antialiased min-h-screen ">

// <div className=" py-12 space-y-24" style={{backgroundImage: `url('https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80')` }}>

// <div className="flex gap-4 pl-24">
// <div className="h-12 w-12 "><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
// viewBox="0 0 40 40"
// style={{color:" fill:#000000;"}}>
// <path fill="#8bb7f0" d="M4,32.5c-1.379,0-2.5-1.122-2.5-2.5V10c0-1.378,1.121-2.5,2.5-2.5h32c1.379,0,2.5,1.122,2.5,2.5v20 c0,1.378-1.121,2.5-2.5,2.5H4z">
// </path><path fill="#4e7ab5" d="M36,8c1.103,0,2,0.897,2,2v20c0,1.103-0.897,2-2,2H4c-1.103,0-2-0.897-2-2V10c0-1.103,0.897-2,2-2 H36 M36,7H4c-1.657,0-3,1.343-3,3v20c0,1.657,1.343,3,3,3h32c1.657,0,3-1.343,3-3V10C39,8.343,37.657,7,36,7L36,7z"></path>
// <path fill="#c74343" d="M17,20c0-2.662,1.163-5.047,3-6.695C18.407,11.876,16.308,11,14,11c-4.971,0-9,4.029-9,9 c0,4.971,4.029,9,9,9c2.308,0,4.407-0.876,6-2.305C18.163,25.047,17,22.662,17,20z"></path>
// <path fill="#ffeea3" d="M26,11c-2.308,0-4.407,0.876-6,2.305c1.837,1.648,3,4.033,3,6.695c0,2.662-1.163,5.047-3,6.695 C21.593,28.124,23.692,29,26,29c4.971,0,9-4.029,9-9C35,15.029,30.971,11,26,11z">
// </path><g><path fill="#ffc49c" d="M23,20c0-2.662-1.163-5.047-3-6.695c-1.837,1.648-3,4.033-3,6.695c0,2.662,1.163,5.047,3,6.695 C21.837,25.047,23,22.662,23,20z">
// </path></g>
// </svg></div>
// <div className="text-4xl font-bold text-blue-800 "><a href="./">Lendsqr</a></div>
// </div>
// </div>


// <div className="md:py-36">
// <div className="text-blue-800 text-4xl font-extrabold pb-2">Welcome!</div>
// <div className="text-blue-800 text-sm font-light">Enter details to login.</div>
// <div className="mt-10 rounded-lg px-6 py-6  w-3/5">
  
//     <div className="space-y-3">
//       <div>
//         <input type="text" name="email" placeholder="Email" className="h-10 w-full rounded-sm  text-sm border-2 px-4 py-2  focus:outline-none focus:ring-1 focus:ring-blue-400" />
//       </div>
//       <div>
//         <input type="password" name="password" placeholder="Password" className="h-10 w-full rounded-sm border-2 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400" />
//       </div>
//     </div>
//     <div className=" pt-3  text-xs text-cyan-500 ">FORGOT PASSWORD?</div>
//     <div className="mt-6 flex h-10 cursor-pointer justify-center items-center text-sm rounded-md border-2 bg-cyan-500  text-white lg:w-full"><a href='./Dash'>LOG IN</a></div>
//     </div>
//     </div>
//   </div>
//   </div>



//      );
// }
 
// export default Home;
