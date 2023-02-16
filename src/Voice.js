import {useEffect} from 'react';

export default function Voice() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div className='stem'>
      <h1>Save the species , Add your voice</h1>
      <hr/>
<p className='text'>Every day, endangered species face the growing risk of extinction. Whether it's from deforestation, climate change, poaching, or any other number of threats, their habitats are shrinking and their numbers are dwindling. This is why it's so important for us - as responsible citizens of the world - to take action and join the fight to save endangered species.</p>
<p className='text1'>If you are looking to contribute to this website in any capacity, be it writing stories about animals and the environment or developing the website, Thannever.com is the perfect source to reach out to. Help us save species by joining our cause.</p>
<p className='text'>By joining the fight to save endangered species, we can ensure that our future generations will be able to enjoy the beauty and wonder of the many species we share this planet with. So let's take action and add our voices to the cause. Together, we can make a difference.</p>

    </div>
  );
}