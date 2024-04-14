// ReviewForm.jsx
import React, { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, experience });
    setName('');
    setExperience('');
  };

  return (
    <>
    <h1 className='text-4xl font-semibold text-center my-4'>We appreciate your feedback....</h1>
    <form className='my-4' onSubmit={handleSubmit}>
      <input 
      className="p-5 my-2 w-full bg-transparent border border-solid border-gray-300 rounded-lg outline-none focus:border-blue-500"
      type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      <textarea 
      className="p-5 my-2 w-full bg-transparent border border-solid border-gray-300 rounded-lg outline-none focus:border-blue-500"
      placeholder="Your Experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
      <button className='py-2 px-4 my-4 bg-blue-300 rounded-lg' type="submit">Submit Review</button>
    </form>
    </>

  );
};

export default ReviewForm;
