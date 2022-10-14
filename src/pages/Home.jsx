import React from 'react'
import picture from '../components/assets/picture2.jpg'
import logo from '../components/logos/Color-logo-no-bg.png'


function Home() {


  return (
    <main>
        <div className='component '>
            {/* <img src={picture} alt="" className='px-0' /> */}
            {/* added bg-coast in tailwind.config.js */}
            <img src={logo} alt="" className=' 
            w-auto px-40
            bg-coast bg-no-repeat bg-cover bg-center bg-fixed'/>
        </div>
       
            
        <div className=' px-10 text-center'>

            <div className='text-5xl'>
                About
                <p className='text-xl py-5'>
                    At Young Escrow, we are proud to provide our clients with the best service possible. We have been in business for 20 years and have experience in all aspects of escrow. We know that it is important to you that your escrow experience be as smooth and easy as possible. That's why we work hard to make sure your transition goes smoothly.

                    We understand that when you're dealing with an escrow transaction, there's a lot at stake—especially when it comes to your finances. That's why we hold your hand through the process and make sure you feel comfortable with everything involved. We want you to feel confident that we have taken care of every detail so you can focus on other things in life!                
                </p>
            </div>

            <div className='text-5xl'>
                Our Team
            </div>
        </div>
    </main>
  )
}

export default Home