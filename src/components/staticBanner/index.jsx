import React from 'react'
import bgImg from 'assets/img/staticBg.jpg'

const StaticBanner = ({text}) => {
  return (
    <>
      <div className="container">
        <div className="bannerImg">
          <img className='w-100 h-100 object-fit-cover' src={bgImg} alt="" />
          <div className="bannetTxt">{text}</div>
        </div>
      </div>
    </>
  )
}

export default StaticBanner