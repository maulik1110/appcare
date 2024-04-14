import React, { useState, useEffect } from 'react';

const Banner = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to handle previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  // Auto change image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='rounded-lg mx-auto md:w-[100%] md:h-[55%] relative overflow-hidden'>
      <img src={data[currentIndex]} alt="slide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      {/* <button onClick={prevImage} style={{ position: 'absolute', top: '50%', left: '10%', transform: 'translateY(-50%)' }}>
        Prev
      </button>
      <button onClick={nextImage} style={{ position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)' }}>
        Next
      </button> */}
    </div>
  );
};

export default Banner;
