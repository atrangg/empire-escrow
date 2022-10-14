import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { AiTwotonePhone } from 'react-icons/ai'

function Footer() {
  return (
    <footer className='footer p-0.5 bg-yellow-200 text-primary-content footer-center' style={{backgroundColor: '#C8B568'}}>
        <h1 className='text-lg'>Contact Us</h1>
        <div>
            {/* Phone number */}
            <div>

                <AiTwotonePhone className='inline' />
                XXX.XXX.XXXX

            </div>4
            {/* Email */}
            <div className='inline'>
                <AiOutlineMail className='inline'/>
                jane.doe@gmail.com
            </div>
        </div>
    </footer>
  )
}

export default Footer