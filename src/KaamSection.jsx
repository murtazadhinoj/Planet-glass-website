import React from 'react'
import { useNavigate } from 'react-router-dom'

function KaamSection() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main w-[100vw] h-[150vh] bg-violet-300 flex flex-col justify-center  items-center overflow-hidden">
        <div className="top w-[100%]  h-25 flex justify-center items-center align-text-top">
          <div className="leftOne text-center text-[2rem] flex flex-col items-center justify-center">
            <span>kaam</span>
            <span>(Ka'am)</span>
            <span>service</span>
          </div>
          <div className="rightOne  text-[13rem] leading-60 ml-20">
            <h1>PRECISION</h1>
          </div>
          </div>

        <div className="middle  w-[70%] h-70  flex justify-between items-center ">
          <div className="div text-[13rem] leading-60 ">
            <h2>IN</h2>
          </div>
          <div className="div w-[17vw] mt-7 mx-7">
            <img src="./src/assets/heroImg2.jpg" alt="" />
          </div>
          <div className="div text-[13rem] leading-7  ">
            <h2>EVERY</h2>
          </div>
        
        </div>

        <div className="bottom h-35 flex justify-center items-center">
          <div className="v-[80%] div text-[13rem] leading-7  ml-38 ">
            <h2>DESIGN</h2>
          </div>
          <div className="div w-[20%] px-0 mt-10 ml-20">
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
