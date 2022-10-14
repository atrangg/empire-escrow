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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptates excepturi, hic, accusantium possimus necessitatibus, voluptatibus ducimus dolorem beatae tenetur ex illum animi quaerat molestias quasi eius enim deserunt fugiat!
                    Earum repudiandae ipsum cupiditate ullam vero, blanditiis exercitationem sit deleniti tempora eveniet, sint minus atque aut ut hic. Iste, exercitationem perspiciatis. Labore reiciendis ipsam unde facilis quia, minima fuga quis?
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