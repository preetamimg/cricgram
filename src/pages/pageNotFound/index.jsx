import { ROUTE_CONST } from 'constants'
import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
      <div className="container-fluid pageNotFound h-100">
        <div className="container h-100">
          <div className="row align-items-center flex-column justify-content-center h-100">
            <div className="col-auto">
              <div className="errorTxt">
                404
              </div>
            </div>
            <div className="col-auto">
              <Link to={ROUTE_CONST.HOME_PAGE} className="errorBtn">Homepage</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageNotFound