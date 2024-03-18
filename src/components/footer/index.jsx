import { ROUTE_CONST } from 'constants'
import React from 'react'
import { Link } from 'react-router-dom'
import facebook from 'assets/img/facebook.svg'
import insta from 'assets/img/insta.svg'
import youtube from 'assets/img/youtube.svg'
import twitter from 'assets/img/twiter.svg'


const Footer = () => {
  return (
    <>
      <div className="footer container-fluid">
        <div className="container px-0">
          <div className="row justify-content-center justify-content-sm-between align-items-center">
            <div className="col-sm copyRightTxt text-center text-sm-start mb-2 mb-sm-0">© 2024 CricGram · All Rights Reserved.</div>
            <div className="col-sm-auto">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <Link className='socialLink' to={'/'}>
                  <img src={facebook} alt="" />
                </Link>
                <Link className='socialLink' to={'/'}>
                  <img src={insta} alt="" />
                </Link>
                <Link className='socialLink' to={'/'}>
                  <img src={youtube} alt="" />
                </Link>
                <Link className='socialLink' to={'/'}>
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