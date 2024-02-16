import React, { useEffect, useState } from 'react'

import {RiCelsiusFill} from "react-icons/ri";
import {TbTemperatureFahrenheit} from "react-icons/tb"

const Home = () => {
    
    const [weather,setWeather]=useState(null);
    const [area,setArea] = useState(null);
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
                setArea(output.location);
                console.log(output.current);
                console.log(output.location);
               console.log(weather.temp_c);
               console.log(area.region);
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
           <h1 className='text-center font-2xl text-4xl mt-[45px] underline mb-[60px]'>Check Today's Weather</h1>

           <div className='border-black border-2 rounded-2xl mb-10 w-[400px] '>
                   <input type="search" placeholder="Enter place name" placeholder-gray-600 onChange={(event)=>setSearch(event.target.value)} className='placeholder-gray-600 w-[400px] text-lg bg-transparent px-4 py-1 text-gray-900 rounded-2xl pl-16 decoration-none' />
                  
           </div>

        <div className='border-2 w-[400px] mb-5  h-[300px] border-solid border-black  backdrop-blur-sm px-3 pt-5 pb-0 rounded-lg'>
        
       <div className='mt-5 '>
        <p className='capitalize text-center font-bold text-4xl'>{search}</p>
       
                 
          <div className='mt-2'>
          {
            !weather?
            ( <p className='text-center my-[76px] font-bold text-3xl '>Data not found</p> ):
            (
              <div className=''>
                <div className='flex mb-9  text-2xl font-medium text-center   pl-[100px] '>
                   <div>
                      <p className=' '>{area.region} ,</p>
                   </div>
                   <div>
                      <p className=' ml-1 '>{area.country}</p>
                   </div>
                 </div>
                  
                <div className='flex text-center '>
                  <div className='flex flex-row justify-items-center ml-[90px]'>
                      <p className='text-xl font-medium'>{weather.temp_c}</p>
                      <RiCelsiusFill className='mt-1 text-xl'/>
                  </div>
                  <div className='flex flex-row justify-items-center ml-[110px]'>
                      <p className='text-xl font-medium'>{weather.temp_f}</p>
                      <TbTemperatureFahrenheit className='mt-1 text-xl'/>
                  </div>
                </div>
                
               
               <div className='mt-[23px] ml-[21px]'>
               <p > <span className='ml-[70px] underline'>LocalTime</span> <span className='ml-[9px]'>:</span> <span className='ml-3'>{area.localtime} </span></p>
               
               </div>

                 
              </div>
             
           
            )
          }
          </div>
          
         
         </div>
        </div>
      
  

      <div className='border-2 w-[400px] mb-3  h-[300px] border-solid border-black  backdrop-blur-sm pt-5 pb-0 rounded-lg'>
        
       <div className='mt-5 '>

          <div className='mt-5'>
          {
            !weather?
            ( <p className='text-center my-[85px] font-bold text-3xl'>Data not found</p> ):
            (
              <div>
                
                  

                 <div className='mt-5  text-xl'>
               
                    <p className='ml-[100px] mb-2'> <span className='text-2xl font-semibold '>Humidity</span> <span className='text-center ml-1'>:</span> <span className='ml-3'> {weather.humidity}% </span> </p>
                    <p className='ml-[137px] mb-2'> <span className='text-2xl font-semibold '>Wind</span> <span className='ml-[9px]'>:</span> <span className='ml-3'>{weather.wind_kph} km/h</span></p>
                    <p className='ml-[103px]'> <span className='text-2xl font-semibold '>Pressure</span> <span className='ml-[9px]'>:</span> <span className='ml-3'>{weather.pressure_mb} mb</span></p>
                </div>

                  <p className='mt-[45px] ml-[52px] text-center '><span className='underline mr-2'> Last Updated</span> :<span className=''>   {weather.last_updated} </span></p>
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

