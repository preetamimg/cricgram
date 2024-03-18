import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from 'assets/img/logo.png'
import { Link } from 'react-router-dom';
import { ROUTE_CONST } from 'constants';

const MobileSidebar = ({showMobileSidebar, setShowMobileSidebar, navLinks}) => {
  const handleClose = () => setShowMobileSidebar(false);
  return (
    <>
      <Offcanvas className='mobileSidebar' show={showMobileSidebar} onHide={handleClose}>
        <Offcanvas.Header>
          <div className="row w-100 align-items-center mx-0 g-0">
            <div className="col">
              <Link className='logo' to={ROUTE_CONST.HOME_PAGE}>
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="col-auto">
              <div onClick={handleClose} className="closeBtn"></div>
            </div>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className='list-unstyled m-0 p-0'>
            {
              navLinks?.map((item)=> (
                <li className='navLi' key={item?.id}>
                  <Link className='navLinks text-decoration-none' to={item?.url}>{item?.name}</Link>
                </li>
              ))
            }
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default MobileSidebar