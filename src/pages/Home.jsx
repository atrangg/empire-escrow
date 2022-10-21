import React from 'react'
import logo from '../components/logos/Color-logo-no-bg.png'
import {useState} from 'react'


function Home() {

    const[background, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 20) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);


  return (
    <main>
        <div className='component '>
            {/* <img src={picture} alt="" className='px-0' /> */}
            {/* added bg-coast in tailwind.config.js */}
            <img src={logo} alt="" className=' 
            w-auto px-40
            bg-coast bg-cover bg-center bg-fixed '/>
        </div>
       
            
        <div className='flex flex-col w-full'>

            <div className='flex flex-col w-full text-center'>

                    <h2 className='text-5xl text-center pt-24 text-logo-yellow'>About Us</h2>
                
                    <p className='text-2xl text-center px-44 py-12 leading-loose'>
                        At Empire Escrow, our goal is to provide you with a safe and reliable escrow service.
                        <br />
                        Our team is experienced and always available to help you understand your options and make sure you get the best results possible.
                        <br />
                        <br />
                        We will hold your hand through the process so you never have to worry about the safety of your money or property. We work hard to ensure that everyone feels secure in their purchases, and we want to make sure that you do too!
                    </p>
                
            </div>

            <div className='mx-5 text-center text-5xl p-10 '>
                <h2>
                Our Team
                </h2>
                <div className='flex flex-row justify-around p-14'>

                    <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">May </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Jimmy Thach</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Home