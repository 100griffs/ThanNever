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


    </div>
  );
}