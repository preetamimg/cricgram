import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import arrowIcon from 'assets/img/arrow.svg'

const RecentOver = ({overs}) => {

  console.log('o-o-o-o-o--oo',overs)
  return (
    <>
      <div className="recentOvers mt-2">
        <div className="row align-items-center position-relative">
          <div className="col-auto recentTxt">
            Recent
          </div>
          <div className="col overflow-hidden">
          <Swiper
          slidesPerView={'auto'}
          spaceBetween={15}
          className="mySwiper"
          navigation={{
            nextEl: ".overNext",
            prevEl: ".overPrev",
        }}
          modules={[Navigation]}
        >
              {overs?.slice(0,31)?.map((overs)=>(
          <SwiperSlide key={overs.id}>
            <div className="overSliderInner d-flex align-items-center">
              {overs.event === 'overend' ?
              <div className="overDetail">
                <span>{overs.over}</span>
                <span>Ov</span>
              </div>
              :
              null
              }
              {overs.event !== 'overend' ? 
              <div className="d-flex gap-2 overBoxParent">
                
                <div className={`overBox ${overs?.run == '0' ? 'zero' : 'overBox' || overs?.run == '4' ? 'four' : 'overBox' }`}>{overs?.run}</div>
                 {/* <div className="overBox zero">0</div>
                <div className="overBox">1</div>
                <div className="overBox">2</div>
                <div className="overBox four">4</div>
                <div className="overBox zero">0</div> */}
              </div>
              :
              null
}
            </div>
          </SwiperSlide>
              ))} 
          {/* <SwiperSlide>
            <div className="overSliderInner d-flex align-items-center">
              <div className="overDetail">
                <span>4</span>
                <span>Ov</span>
              </div>
              <div className="d-flex gap-2 overBoxParent">
                <div className="overBox  four">4</div>
                <div className="overBox">1</div>
                <div className="overBox">2</div>
                <div className="overBox zero">0</div>
                <div className="overBox">1</div>
                <div className="overBox wicket">w</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overSliderInner d-flex align-items-center">
              <div className="overDetail">
                <span>3</span>
                <span>Ov</span>
              </div>
              <div className="d-flex gap-2 overBoxParent">
                <div className="overBox zero">0</div>
                <div className="overBox zero">0</div>
                <div className="overBox">1</div>
                <div className="overBox">2</div>
                <div className="overBox four">4</div>
                <div className="overBox zero">0</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overSliderInner d-flex align-items-center">
              <div className="overDetail">
                <span>2</span>
                <span>Ov</span>
              </div>
              <div className="d-flex gap-2 overBoxParent">
                <div className="overBox six">6</div>
                <div className="overBox">2</div>
                <div className="overBox zero">0</div>
                <div className="overBox zero">0</div>
                <div className="overBox">1</div>
                <div className="overBox zero">0</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overSliderInner d-flex align-items-center">
              <div className="overDetail">
                <span>1</span>
                <span>Ov</span>
              </div>
              <div className="d-flex gap-2 overBoxParent">
                <div className="overBox zero">0</div>
                <div className="overBox zero">0</div>
                <div className="overBox">1</div>
                <div className="overBox">2</div>
                <div className="overBox four">4</div>
                <div className="overBox zero">0</div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
          </div>
          <div className="overNavBtn overNext">
            <img src={arrowIcon} alt="" />
          </div>
          <div className="overNavBtn overPrev">
            <img src={arrowIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default RecentOver