import React from 'react'
import noDataImg from 'assets/img/nodata.svg'

const NoDataFound = () => {
  return (
    <>
      <div className="noDataFound d-flex flex-column align-items-center py-4 text-center">
        <img src={noDataImg} alt="" />
        <div className="txt mt-3">OOPS! NO DATA FOUND</div>
      </div>
    </>
  )
}

export default NoDataFound