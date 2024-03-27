import React from 'react'
import StaticBanner from 'components/staticBanner'
import CurrentSeries from 'components/currentSeries'
import AdsComp from 'components/ads'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <>
      <StaticBanner text={'Contact Us'}/>
      <div className="container-fluid mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-9">
              <div className="staticBox">
                <div className="title">Contact Us</div>
                <div className="text">Communication is always a better way to connect & we are always here to listen from you continuously. And we are trying our best to make it as easy as possible for our readers to connect with us.</div>
                <div className="text">For any assistance, Suggestions & any query related to the content at CricGram.com, you can directly contact us at our:</div>
                <div className="text">E-mail ID:- <Link className='textLink' to={'mailto:cricgram@gmail.com'}> cricgram@gmail.com</Link> </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 mt-4 mt-lg-0">
              <CurrentSeries />
              {/* <AdsComp/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs