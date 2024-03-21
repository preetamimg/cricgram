import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import MatchCard from 'components/matchCard';
import arrowIcon from 'assets/img/arrow.svg';
import axios from 'axios';
import { BASE_URL } from 'constants';
import { API_ENDPOINT, TOKEN } from '../../constants';
import {useParams} from 'react-router-dom';


const ReletedMatch = () => {

  const [seriesMatches,setSeriesMatches]=useState([]);
  const {cid} = useParams();

  const seriesMatchesAPi =()=>{
    axios.get(`${BASE_URL}${API_ENDPOINT.COMPETITIONS}/${cid}/${API_ENDPOINT.MATCHES}?token=${TOKEN}&per_page=10`)
    .then((res)=>{
      console.log(res?.data?.response)
      setSeriesMatches(res?.data?.response)
    })
    .catch((err)=>console.log(err))
  }


  useEffect(()=>{
    seriesMatchesAPi()
  },[])

 
  return (
    <>
      <div className="container-fluid relatedMatchesSlider mt-5">
        <div className="container px-0 position-relative">
          <Swiper 
            navigation={{
              nextEl: ".relatedNext",
              prevEl: ".relatedPrev",
            }}
            // loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Navigation, Pagination]} 
            spaceBetween={15}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              576: {
                slidesPerView: 1.5
              },
              768: {
                slidesPerView: 2
              },
              992: {
                slidesPerView: 3
              },
              1200: {
                slidesPerView: 4
              },
            }}
            >
            {
              seriesMatches?.items?.map((item)=> {
                console.log(item)
               return <SwiperSlide>
                  <MatchCard 
                   key={item?.match_id}
                   ID={item?.match_id}
                   live={item?.live}
                   match={item?.match_number}
                   StartDate={item?.date_start}
                   endDate={item?.date_end_ist}
                   venue={item?.venue?.location}
                   stadium={item?.venue?.name}
                   teamALogo={item?.teama?.logo_url}
                   teamAID={item?.teama?.team_id}
                   teamAName={item?.teama?.name}
                   TeamAscore={item?.teama?.scores_full}
                   teamBLogo={item?.teamb?.logo_url}
                   teamBID={item?.teamb?.team_id}
                   teamBName={item?.teamb?.name}
                   TeamBscore={item?.teamb?.scores_full}
                   result={item?.result}
                   subtitle={item?.subtitle}
                  // data={item}
                  />
                </SwiperSlide>
                })
            }
          </Swiper>
          <div className="relatedNav relatedPrev">
            <img src={arrowIcon} alt="" />
          </div>
          <div className="relatedNav relatedNext">
            <img src={arrowIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ReletedMatch