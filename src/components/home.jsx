import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='grid mt-10 justify-center'>
      <div className='border-2 bg-amber-100 rounded-2xl p-5 '>
      <h1 className="font-bold text-center text-2xl"> Let's test your general knowledge </h1>
   <p className='text-center mt-10'>
    
        <Link to="/quiz" className='bg-blue-600 text-white rounded-lg text-2xl px-3 text-center mt-10'> Start quiz</Link>
     
        </p>
        <p className='items-center  mt-5  ml-5'> Rules of Quiz game <li>Right answer=(score+1)</li><li>Wrong answer=(score-0.5)</li></p>
    </div>
    </div>
  );
};

export default Home;
