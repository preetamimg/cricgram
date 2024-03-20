import React, { useEffect, useState } from 'react';
import trophyIcom from 'assets/img/trophy.png';
import arrowIcon from 'assets/img/arrow.svg';
import { getAPI } from 'utils/services';
import { API_ROUTES, ROUTE_CONST } from '../../constants';
import { useNavigate } from 'react-router-dom';


const CurrentSeries = () => {
  const [ seriesList,setSeriesList ] =useState([]);
  const navigate = useNavigate();

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
            <div className="col-12" onClick={()=>navigate(`${ROUTE_CONST.CRICKET_SERIES}/${item.series_key}/${item?.name.replaceAll(" ","-")}?tab=Home`)} key={item?._id} >
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