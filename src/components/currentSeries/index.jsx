import React, { useEffect, useState } from 'react';
import trophyIcom from 'assets/img/trophy.png';
import arrowIcon from 'assets/img/arrow.svg';
import axios from 'axios';
import { baseUrl } from 'pages/home';
import { token } from 'pages/home';



const CurrentSeries = () => {

  const [series,setSeries] = useState([]);

  const handleSeries=()=>{
    axios.get(`${baseUrl}/v2/competitions?token=${token}&per_page=5`)
    .then((res)=>{
      console.log('<<<res>>>',res?.data?.response)
    setSeries(res?.data?.response?.items)
    })
    .catch((err)=>console.log(err))
  }
  useEffect(()=>{
    handleSeries()
  },[])



  return (
    <>
      <div className="commonHeading">
        <img src={trophyIcom} alt="" />
        CURRENT SERIES
      </div>
      <div className="row g-2">
        {
          series?.map((item)=> (
            <div className="col-12" key={item?.cid}>
              <div className="currentSeriesCard">
                <span>{item?.title}</span>
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