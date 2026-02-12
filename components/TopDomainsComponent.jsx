"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import LoadingState from "./LoadingState";

const TopDomainsComponent = ({ domains }) => {
  return (
    <section className="top-domains-section home-section bg-white">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <span className="section-label d-block text-center">Partners</span>
            <div className="title-center-circle">
              <h2 className="section-title text-uppercase text-center">
                Our top brands
              </h2>
            </div>
            <p className="section-subtitle mx-auto text-center mb-0">
              Join our exclusive community of like-minded people across these ventures.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-xl-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {!domains && <LoadingState />}
              {domains.data.domains.map((domain) => (
                <SwiperSlide key={domain.domain}>
                  <div className="top-domains-slide">
                    <a
                      href={domain.brand_link}
                      className="tw-no-underline tw-inline-block"
                    >
                      <Image
                        src={domain.logo}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="img-fluid"
                        alt={domain.domain}
                        priority={true}
                      />
                    </a>
                    <h4 className="tw-capitalize">{domain.domain}</h4>
                    <p>Join our exclusive community of like-minded people.</p>
                    <div className="text-center tw-space-x-2 w-100">
                      <a href={domain.site_link} className="btn btn-success btn-sm">
                        Visit
                      </a>
                      <a href={domain.brand_link} className="btn btn-success btn-sm">
                        Details
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDomainsComponent;
