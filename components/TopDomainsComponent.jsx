"use client"
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const TopDomainsComponent = () => {
  return (
    <section className="tw-py-24 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="title-center-circle">
              <h2 className='tw-font-extrabold tw-text-5xl text-uppercase text-center'>
                OUR TOP BRANDS
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className='tw-px-4 tw-py-12 tw-rounded-md'>
                <a href="#" className='tw-no-underline tw-inline-block'>
                  <Image
                    src="https://cdn.vnoc.com/logos/logo-Applications.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className='img-fluid'
                    alt=""
                    priority={true}
                  />
                </a>
                <h4 className='tw-capitalize'>
                  applications.com
                </h4>
                <p>
                  Join our exclusive community of like minded people on
                </p>
                <div className='text-center tw-space-x-2 w-100'>
                  <a href="#" className="btn btn-success">Visit</a>
                  <a href="#" className="btn btn-success">Details</a>
                </div>
              </SwiperSlide>
              <SwiperSlide className='tw-px-4 tw-py-12 tw-rounded-md'>
                <a href="#" className='tw-no-underline tw-inline-block'>
                  <Image
                    src="https://cdn.vnoc.com/logos/logo-SocialBar1.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className='img-fluid'
                    alt=""
                    priority={true}
                  />
                </a>
                <h4 className='tw-capitalize'>
                  socialbar.com
                </h4>
                <p>
                  Join our exclusive community of like minded people on
                </p>
                <div className='text-center tw-space-x-2 w-100'>
                  <a href="#" className="btn btn-success">Visit</a>
                  <a href="#" className="btn btn-success">Details</a>
                </div>
              </SwiperSlide>
              <SwiperSlide className='tw-px-4 tw-py-12 tw-rounded-md'>
                <a href="#" className='tw-no-underline tw-inline-block'>
                  <Image
                    src="https://vnoclogos.s3-us-west-1.amazonaws.com/logo-digitalcast2.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className='img-fluid'
                    alt=""
                    priority={true}
                  />
                </a>
                <h4 className='tw-capitalize'>
                  digitalcast.com
                </h4>
                <p>
                  Join our exclusive community of like minded people on
                </p>
                <div className='text-center tw-space-x-2 w-100'>
                  <a href="#" className="btn btn-success">Visit</a>
                  <a href="#" className="btn btn-success">Details</a>
                </div>
              </SwiperSlide>
              <SwiperSlide className='tw-px-4 tw-py-12 tw-rounded-md'>
                <a href="#" className='tw-no-underline tw-inline-block'>
                  <Image
                    src="https://cdn.vnoc.com/logos/logo-handyman.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className='img-fluid'
                    alt=""
                    priority={true}
                  />
                </a>
                <h4 className='tw-capitalize'>
                  handyman.com
                </h4>
                <p>
                  Join our exclusive community of like minded people on
                </p>
                <div className='text-center tw-space-x-2 w-100'>
                  <a href="#" className="btn btn-success">Visit</a>
                  <a href="#" className="btn btn-success">Details</a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopDomainsComponent