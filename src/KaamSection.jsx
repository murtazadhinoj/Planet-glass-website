import React from 'react'
import { useNavigate } from 'react-router-dom'

function KaamSection() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{overflowX:'hidden'}} className="main 
      w-[100%] h-[75vh] bg-violet-300 flex flex-col 
      p-5
      justify-center  items-center overflow-hidden
      lg:w-full lg:h-[150vh] lg:flex lg:flex-col lg:justify-center lg:items-center 
      ">
        <div className="w-[100%]  h-25 flex flex-col  justify-center items-center align-text-top 
        lg:w-[100%] lg:h-25 lg:flex-row lg:justify-center lg:items-center lg:align-text-top
        ">
          <div className="leftOne texy text-center lg:text-[4rem] flex flex-col  items-center justify-center
          lg:text-center lg:flex lg:flex-col lg:items-center lg:justify-center text-[2rem] 
          ">
            <span className='max-sm:leading-1 lg:leading-10'>kaam</span>
            <span className='max-sm:leading-15 lg:leading-18'>(Ka'am)</span>
            <span className='max-sm:leading-2 lg:leading-10'>service</span>
          </div>
          <div className="rightOne  lg:text-[13rem] lg:ml-20 lg:pt-[5px] lg:leading-60
           text-[4rem]    
           ">
            <h1>PRECISION</h1>
          </div>
          </div>

        <div className="middle w-[100%] h-25  flex justify-between items-center 
        lg:w-[70%] lg:h-70  lg:flex lg:justify-between lg:items-center">
          <div className="div text-[4rem] 
          lg:text-[13rem]">
            <h2 className=''>IN</h2>
          </div>
          <div className="w-[60vw]  
          lg:w-[60vw]  lg:mt-7 lg:mx-7">
            <img src="./src/assets/heroImg2.jpg" alt="" />
          </div>
          <div className=" lg:text-[13rem] lg:leading-7 
          text-[4rem]  ">
            <h2 className=''>EVERY</h2>
          </div>
        
        </div>

        <div className="bottom flex justify-center items-center flex-col
         lg:h-50 lg:flex-row ">
          <div className="w-[80%] text-[4rem] lg:text-[13rem] lg:ml-[550px] lg:mb-15
          ">
            <h2 className='leading-5'>DESIGN</h2>
          </div>
          <div className=" lg:w-[20%] m-5 mt-5 w-full ">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae fugiat dicta voluptatum enim? Laudantium delectus eos perspiciatis voluptatum libero itaque.</p>
            <button  
            className='mt-4 rounded-full border-2 px-5 py-2 border-amber-50' 
            onClick={()=> navigate('/Services')}
            >OUR SERVICE</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default KaamSection
