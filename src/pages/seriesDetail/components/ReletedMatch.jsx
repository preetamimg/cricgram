import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import MatchCard from 'components/matchCard';
import arrowIcon from 'assets/img/arrow.svg';

const ReletedMatch = ({ data }) => {

  return (
    <>
      <div className="container-fluid relatedMatchesSlider">
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
              data?.map((item)=> (
                <SwiperSlide>
                  <MatchCard data={item}/>
                </SwiperSlide>
              ))
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

export default ReletedMatch;