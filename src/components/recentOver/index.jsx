import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import arrowIcon from 'assets/img/arrow.svg';

const loadingArray = [1,1,1,1]
const RecentOver = ({ data,isLoading }) => {

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
          {
            isLoading ? <>
              {
                loadingArray?.map((item,index)=> (
                  <SwiperSlide key={index} >
                    <div className="overSliderInner loading d-flex align-items-center">
                      <div className="overDetail"></div>
                      <div className="d-flex gap-2 overBoxParent">
                        <div className="overBox"></div>
                        <div className="overBox"></div>
                        <div className="overBox"></div>
                        <div className="overBox"></div>
                        <div className="overBox"></div>
                        <div className="overBox"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </> : <>

            {data?.map((item)=>(
              <SwiperSlide>
              <div className="overSliderInner d-flex align-items-center">
                
                {item?.event==="overend" ? <div className="overDetail">
                  <span>{item?.over}</span>
                  <span>Ov</span>
                </div>:""}

                <div className="d-flex gap-2 overBoxParent">
                  {/* {item?.event==="ball" ?<div className="overBox zero">0</div>:""} */}

                  {/* <div className="overBox zero">0</div> */}
                  {/* <div className="overBox">1</div> */}
                  {/* <div className="overBox">2</div> */}
                  {/* <div className="overBox four">4</div> */}
                  
                  {/* <div className="overBox zero">0</div> */}

                  {item?.event === "wicket" ? (
                      <div className="overBox wicket">W</div>
                    ) : (
                      ""
                    )}
                    {item?.event === "ball" && item?.four ? (
                      <div className="overBox four">4</div>
                    ) : (
                      ""
                    )}
                    {item?.event === "ball" && item?.six ? (
                      <div className="overBox six">6</div>
                    ) : (
                      ""
                    )}
                    {item?.event === "ball" &&
                    !item?.six &&
                    !item?.four &&
                    !item?.noball &&
                    item?.legbye_run === "0" &&
                    !item?.wideball ? (
                      <div
                        className={`overBox ${item.bat_run === "0" ? "zero" : ""}`}
                      >
                        {item?.bat_run}
                      </div>
                    ) : (
                      ""
                    )}
                    {item?.event === "ball" && item?.legbye_run !== "0" ? (
                      <div className="overBox">{item?.legbye_run}lb</div>
                    ) : (
                      ""
                    )}
                    {item?.event === "ball" && item?.noball ? (
                      <div className="overBox">{item?.noball_run}nb</div>
                    ) : (
                      ""
                    )}
                    {item?.event === "ball" && item?.wideball ? (
                      <div className="overBox">{item?.wide_run}wd</div>
                    ) : (
                      ""
                    )}
                </div>
              </div>
            </SwiperSlide>
            ))}
            </>
          }
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