import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'assets/img/logo.png'
import { ROUTE_CONST } from 'constants'
import hamburgerIcon from 'assets/img/hamburger.png'

const Header = () => {
  const navLinks = [
    {
      id: 'nav1',
      name: 'fantasy cricket',
      url: '/'
    },
    {
      id: 'nav2',
      name: 'cricket news',
      url: '/'
    },
    {
      id: 'nav3',
      name: 'players',
      url: '/'
    },
    {
      id: 'nav4',
      name: 'fantasy apps',
      url: '/'
    }
  ]
  return (
    <>
        <div className="header container-fluid fixed-top">
          <div className="container px-0">
            <div className="row align-items-center">
              <div className="col-auto">
                <Link to={ROUTE_CONST.HOME} className='navBrand'>
                  <img className='h-100 object-fit-contain' src={logo} alt="" />
                </Link>
              </div>
              <div className="col d-flex justify-content-end">
                <ul className="list-unstyled navUl m-0 p-0 d-none d-lg-flex align-items-center gap-4">
                  {
                    navLinks?.map((item)=> (
                      <li className='navLi' key={item?.id}>
                        <Link className='navLinks text-decoration-none' to={item?.url}>{item?.name}</Link>
                      </li>
                    ))
                  }
                </ul>
                <button className='shadow-none border-0 menuBtn d-lg-none'>
                  <img src={hamburgerIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Header