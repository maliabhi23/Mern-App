import React from 'react'
import { Header } from '../Components/Header'
import FeedbackForm from '../Components/Feedbackform'
import { Footer } from '../Components/Footer'
export const Feedback = () => {
  return (
    <div className='feedback'>
        <Header />
        <h1>Feedback</h1>
        
        <FeedbackForm />
        
        <Footer />
</div>
  )
}
