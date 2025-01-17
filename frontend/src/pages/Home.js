import React from 'react'
import { Header } from '../Components/Header';
import {Footer} from '../Components/Footer';

export const Home = (props) => {
 
  return(

<div className='homepage'>
  
  <Header />


<h1 className='title'>{props.title}</h1>

<p>Delicious food awaits you!</p>

<div className=''>
  <img src="Ehotel5.jpg" alt='images' width={350} height={300}/>
</div>

<div className='home-about'>Aswad Hotel, located in the heart of Kolhapur, epitomizes luxury and hospitality, seamlessly blending traditional elegance with modern comfort. Established in [year], the hotel boasts a rich history reflected in its architecture and commitment to excellence. From plush accommodations with breathtaking views to a diverse culinary journey and state-of-the-art facilities, Aswad Hotel caters to the discerning traveler's every need. The attentive staff ensures exceptional service, while versatile event spaces make it an ideal venue for conferences and weddings. Committed to sustainability, the hotel minimizes its environmental impact. Guest feedback consistently praises the hotel's exceptional service, luxurious amenities, and memorable experiences. Aswad Hotel, with its unwavering dedication to providing an unparalleled stay, remains a premier destination for those seeking an extraordinary and unforgettable experience. Thank you for taking the time to join our team and we look forward to making The Aswad Hotel a great success.</div>


{/* <h2>This is the Homepage of the aswad hotel</h2> */}
<Footer />  

</div>
  
    ); 

};
