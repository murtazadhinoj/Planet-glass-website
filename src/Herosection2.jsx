import React from 'react'
// import './HeroSection2.css'

const Herosection2 = () => {
  return (
    <>
        <div className="main-container w-full h-screen flex items-start justify-between gap-2.5">
            <div className="container1 w-[500px] h-[550px] flex flex-col justify-between align-bottom ">
                <h1 className='m-3.5 text-4xl'>TRADITION</h1>
                <h2 className='text-5xl'>Every
                    Line
                    Tells a
                    story</h2>
            </div>
            <div className="container2 w-[800px] ml-3">
                <div className="img-container w-[600px] object-cover">
                <img className='object-cover m-5 w-full' src='https://i.pinimg.com/736x/82/86/96/82869653b79c03fd2af7f7c0dd7afffe.jpg' alt="" />
                </div>
            </div>
            <div className="container3 w-full h-screen flex flex-col items-start justify-between gap-2.5">
                <p className='w-64 p-2'>
                In every project at Saisei, the
                essence of 伝統 (tradition) is
                evident. By in tegrating the
                disciplined aesthetics and
                thoughtful methodologies of
                our ancestors, we ensure that
                each structure is not only
                environmentally attuned but
                also rich in cultural
                significance. Our designs
                reflect a deep respect for the
                past, while embracing the
                innovations of the future.
                </p>

                <button className='border-2 p-2.5 m-5' >About us</button>

                <img className='w-2xs' src="https://i.pinimg.com/736x/c9/fd/18/c9fd186b22966b53da5fe40bddc62c1e.jpg" alt="" />
            </div>

        </div>
        <div className="main2 w-full h-screen flex items-center justify-between gap-5">
            <div className="img-box1 w-2xs">
                <img src="https://i.pinimg.com/736x/82/86/96/82869653b79c03fd2af7f7c0dd7afffe.jpg" alt="" />
            </div>
            <div className="img-box2">
            <img src="https://i.pinimg.com/736x/82/86/96/82869653b79c03fd2af7f7c0dd7afffe.jpg" alt="" />
            <h1>(innovation)</h1>
            </div>
            <div className="img-box3">
            <img src="https://i.pinimg.com/736x/c9/fd/18/c9fd186b22966b53da5fe40bddc62c1e.jpg" alt="" />
            </div>
        </div>
    </>
  )
}

export default Herosection2