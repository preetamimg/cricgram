import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import banner1 from 'assets/img/banner/image4.png'
import banner2 from 'assets/img/banner/image5.png'
import banner3 from 'assets/img/banner/image1m.png'
import banner4 from 'assets/img/banner/image2m.png'


const banners = [
  {
    id: 'banner1',
    img : banner1,
    type: 'desktop'
  },
  {
    id: 'banner2',
    img : banner2,
    type: 'desktop'
  },
  {
    id: 'banner3',
    img : banner3,
    type: 'mobile'
  },  {
    id: 'banner4',
    img : banner4,
    type: 'mobile'
  },
]

const HeroBanner = () => {
  return (
    <>
      <div className="heroBanner container-fluid">
        <div className="container px-0">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {
              banners?.map((item)=> (
                <SwiperSlide key={item?.id} className={item?.type === 'desktop' ? 'd-none d-lg-block' : 'd-lg-none'}>
                  <div className="heroBannerImages">
                    <img className='w-100 h-100 object-fit-cover' src={item?.img} alt="" />
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default HeroBanner