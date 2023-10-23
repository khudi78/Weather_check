import React, { useEffect, useState } from 'react'

import {RiCelsiusFill} from "react-icons/ri";

const Home = () => {
    
    const [weather,setWeather]=useState(null);
    const [search,setSearch]= useState(null);
    const [image,setImage]=useState(null);
    useEffect(()=>{
         const fetchData=async()=>{
            try{
              let url=`https://api.weatherapi.com/v1/current.json?key=eefc91789965418fb00212648231010&q=${search}`;
                let res=await fetch(url);
                //console.log(res);
                let output=await res.json();
                setWeather(output.current);
               // console.log(output.current);
               console.log(weather.temp_c);
               if(weather.temp_c<0){
                setImage("https://images.unsplash.com/photo-1541875201440-e57ce2c30249?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
               }
               else{
                setImage(url("https://images.unsplash.com/photo-1496151981150-6d7319e97e56?auto=format&fit=crop&q=80&w=1858&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"));
               }
              }
           catch(error){
              console.log("OOPS");
           }
        
      
        }
        fetchData();
    },[search])
    
        
    
  return (
    <div className={ `flex items-center justify-center h-screen bg-cover bg-hero-lg  flex-col `} >
           <h1 className='text-center font-2xl text-4xl underline mb-[100px]'>Check Today's Weather</h1>
        <div className='border-2 w-[300px]  h-[300px] border-solid border-black  backdrop-blur-sm p-5 rounded-lg'>
        <div className='border-white border-2 rounded-2xl '>
                   <input type="search" placeholder="Enter place name" onChange={(event)=>setSearch(event.target.value)} className='bg-transparent px-4 py-1  rounded-2xl w-[257px] decoration-none' />
                  
      </div>
       <div className='mt-5'>
          <p className='capitalize text-center font-semibold text-3xl'>{search}</p>
          <div className='mt-5'>
          {
            !weather?
            ( <p className='text-center text-xl mt-10'>Data not found</p> ):
            (
              <div>
                <div className='flex flex-row justify-items-center ml-[110px]'>
                <p className='text-center text-xl font-md'>{weather.temp_c}</p>
                  <RiCelsiusFill/>
                </div>
                  

                 <div className='mt-5  text-xl'>
               
                    <p> <span className='ml-10'>Humidity</span> <span className='text-center ml-1'>:</span> <span className='ml-3'> {weather.humidity}% </span> </p>
                    <p> <span className='ml-[70px]'>Wind</span> <span className='ml-[9px]'>:</span> <span className='ml-3'>{weather.wind_kph} km/h</span></p>
                </div>

                  <p className='mt-[30px] text-center '><span className='underline mr-2'> Last Updated:</span> <span className=''>   {weather.last_updated} </span></p>
              </div>
             
           
            )
          }
          </div>
          
         
         </div>
        </div>
      
    </div>
    
  )
}

export default Home

