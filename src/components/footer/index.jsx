import { ROUTE_CONST } from 'constants'
import React from 'react'
import { Link } from 'react-router-dom'
import facebook from 'assets/img/facebook.svg'
import insta from 'assets/img/insta.svg'
import youtube from 'assets/img/youtube.svg'
import twitter from 'assets/img/twiter.svg'
import telegram from 'assets/img/telegram.svg'



const Footer = () => {
  return (
    <>
      <div className="footer container-fluid">
        <div className="container px-0">
          <div className="row justify-content-center justify-content-sm-between align-items-center">
            <div className="col-sm copyRightTxt text-center text-sm-start mb-2 mb-sm-0">© 2024 CricGram · All Rights Reserved.</div>
            <div className="col-sm-auto">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <Link className='socialLink' target='_blank' to={'https://telegram.me/CricGram/'}>
                  <img src={telegram} alt="" />
                </Link>
                <Link className='socialLink' target='_blank' to={'https://www.facebook.com/cricgram/'}>
                  <img src={facebook} alt="" />
                </Link>
                <Link className='socialLink' target='_blank' to={'https://www.instagram.com/cricgramofficial/'}>
                  <img src={insta} alt="" />
                </Link>
                <Link className='socialLink' target='_blank' to={'https://www.youtube.com/channel/UCsL-STnrhMCTRecZLCSBCJw'}>
                  <img src={youtube} alt="" />
                </Link>
                <Link className='socialLink' target='_blank' to={'https://twitter.com/cricgram'}>
                  <img src={twitter} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer