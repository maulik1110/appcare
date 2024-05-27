import React from 'react'
import Body from './compinent/Body'
// import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
// const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='overflow-hidden overflow-y-auto'>
      <Body/>
    </div>
  )
}

export default App