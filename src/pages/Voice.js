import {useEffect} from 'react';
import { Helmet } from 'react-helmet-async';

export default function Voice() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div className='maison'>
        <Helmet>
  <title>Thannever | contribute on saving animals </title>
  <meta name='description' content="Every day, endangered species face the growing risk of extinction. Whether it's from deforestation, climate change, poaching, or any other number of threats, their habitats are shrinking and their numbers are dwindling. This is why it's so important for us - as responsible citizens of the world - to take action and join the fight to save endangered species"/>
 </Helmet>
      <h1>Save the species , Add your voice</h1>
      <hr/>
<p className='text'>Every day, endangered species face the growing risk of extinction. Whether it's from deforestation, climate change or any other threats, their habitats are shrinking and their numbers are dwindling. This is why it's so important for us to take action and join the fight to save endangered species.</p>
<p className='text1'>If you are looking to contribute to this website in any capacity, be it writing stories about animals and the environment or developing the website, Thannever.com is the perfect source to reach out to</p>
<p className='text'> find us here :thannever.com@gmail.com  </p>
<img className='him' alt='no image foung' src='https://images.unsplash.com/photo-1552008294-682a40b6469d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>

    </div>
  );
}