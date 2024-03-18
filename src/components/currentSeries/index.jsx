import React, { useEffect, useState } from 'react';
import trophyIcom from 'assets/img/trophy.png';
import arrowIcon from 'assets/img/arrow.svg';
import { getAPI } from 'utils/services';
import { API_ROUTES } from '../../constants';


const mdata = [
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
const CurrentSeries = () => {
  const [ seriesList,setSeriesList ] =useState([]);

  const getSeriesList =async()=>{
    try {
      const res = await getAPI(`${API_ROUTES.GET_SERIES_DATA}?limit=5`);

      setSeriesList(res.data.data);
    } catch (error) {
      console.log("error ---->",{ error });
    }
  }

  useEffect(()=>{
    getSeriesList();
  },[]);

  return (
    <>
      <div className="commonHeading">
        <img src={trophyIcom} alt="" />
        CURRENT SERIES
      </div>
      <div className="row g-2">
        {
          seriesList?.map((item)=> (
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