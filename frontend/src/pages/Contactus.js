import React from 'react'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'

export const Contactus = () => {
  return (
    <div className='contact-us'>
          <Header />
         
            <h1>Contact Us</h1>
          
            <p>contact us the.</p>
           
            <div className='contact-us-par'>
                 Contact Aswad Hotel
         

          <p>We'd love to hear from you! Contact us using the information below:</p> 

        Aswad Hotel<br/>
        Siddhneri<br/>
        Kolhapur<br/>
        P: 7066578911<br/>
        E: info@aswadhotel.com
            </div>
            <Footer />
    </div>
  )
}
