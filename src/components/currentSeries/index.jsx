import React from 'react'
import trophyIcom from 'assets/img/trophy.png'
import arrowIcon from 'assets/img/arrow.svg'


const CurrentSeries = () => {
  const data = [
    {
      id: 'cs1',
      name: 'England tour of India',
      url: '/'
    },
    {
      id: 'cs2',
      name: `Women's Premier League`,
      url: '/'
    },
    {
      id: 'cs3',
      name: 'Indian Premier League',
      url: '/'
    },
    {
      id: 'cs4',
      name: 'Sri Lanka tour of Bangladesh',
      url: '/'
    },
    {
      id: 'cs5',
      name: 'Pakistan Super League',
      url: '/'
    },
  ]
  return (
    <>
      <div className="commonHeading">
        <img src={trophyIcom} alt="" />
        CURRENT SERIES
      </div>
      <div className="row g-2">
        {
          data?.map((item)=> (
            <div className="col-12">
              <div className="currentSeriesCard">
                <span>{item?.name}</span>
                <img src={arrowIcon} alt="" />
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default CurrentSeries