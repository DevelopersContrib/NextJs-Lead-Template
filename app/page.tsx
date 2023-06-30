"use client"
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Logo from '../components/logo';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserCog, faCogs, faGlobe, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { getData, getDomain } from '../lib/data';


export default async function Home() {
  const c = await getData();
  const domain = await getDomain();
  const background = c.data.background_url!==null?c.data.background_url:'https://cdn.vnoc.com/background/tech4.jpg';
  const description = c.data.description;
  const title = c.data.title;
  const follow_link = "https://www.contrib.com/signup/follow/"+domain;
  return (
    <>
      <Navigation />
      <section
        style={{ backgroundImage: `url('${background}')` }}
        className="tw-min-h-[calc(100vh-40px)] tw-bg-cover tw-bg-no-repeat tw-relative tw-text-white tw-bg-[50%] tw-py-12 tw-flex tw-w-full tw-items-center"
      >
        <div className="tw-bg-[rgba(0,0,0,0.55)] tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-absolute"></div>
        <div className="container tw-relative">
          <div className="row tw-mb-8">
            <div className="col-xl-12 tw-text-center">
            <Logo />
              <h5 className='tw-font-semibold text-capitalize mb-3'>
                {title}
              </h5>
            </div>
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-8 offset-xl-2">
                  <div className="tw-bg-[rgba(0,0,0,0.75)] tw-p-8 tw-rounded-lg">
                    {/* Start:: Forms */}
                    <div className="">
                      <div className="input-group input-group-lg mb-3">
                        <input type="text" className="form-control" placeholder="Email address..." />
                        <button
                          className="btn btn-danger tw-px-[3rem!important]"
                          type="button"
                        >Submit</button>
                      </div>
                    </div>
                    {/* Start:: Thank you message */}
                    <div className='text-center tw-hidden'>
                      <FontAwesomeIcon icon={faCircleNotch} spin className='tw-w-8 tw-h-[2rem!important]' />
                      <h3>Thanks, your spot is reserved!</h3>
                      <p>
                        Share {domain} with you friends to move up in line and reserve your username.
                      </p>
                      <div className="mb-3">
                        <a href={follow_link} className="btn btn-warning">Continue to Follow {domain} Brand</a>
                      </div>
                    </div>
                    <p className="text-center mb-0 small text-secondary">
                    {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='tw-py-24'>
        <div className="container">
          <div className="row lg:tw-items-center">
            <div className="col-xl-6 mb-4 mb-xl-0">
              <Image
                src="https://cdn.vnoc.com/background/contrib/why-us.png"
                width={470}
                height={496}
                alt=''
                className='img-fluid'
              />
            </div>
            <div className="col-xl-6 mb-4 mb-xl-0">
              <h2 className='tw-font-extrabold tw-text-5xl mb-3'>
                Follow, Build, and Help Launch
              </h2>
              <p className='text-secondary'>
                Follow {domain} and other great ventures on the Contrib platform.
              </p>
              <p className='text-secondary'>
                Build {domain} and Help cofound a relevant new Startup, Part-Time.
              </p>
              <p className='text-secondary'>
                Launch {domain} and you could be front and center in the process. Launch domain.com with us today!
              </p>
              <a href={follow_link} target="_blank" className="btn btn-primary btn-lg">
                Learn About {domain}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='tw-py-24 bg-light'>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="title-center-circle">
                <h2 className='tw-font-extrabold tw-text-5xl text-uppercase text-center'>
                  {domain} team
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-5">
            <div className="col-xl-4">
              <h3 className='tw-font-extrabold mb-3 text-secondary'>Our Awesome Team that Help You to Make Right Choice</h3>
              <div className="tw-bg-[#EEEDED] tw-p-12 tw-rounded-md tw-mb-4 tw-mt-8">
                <div className="tw-d-block mb-3">
                  <FontAwesomeIcon icon={faUsers} className="tw-w-20 tw-h-[5rem!important] tw-text-blue-500" />
                </div>
                <div className='text-secondary'>
                  <strong>{domain}</strong> is a bit different than most startups. We are small, diverse team working remotely and loving what we do. We only cowork with others who also have this same passion.
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="row">
                <div className="col-xl-6">
                  <div className="tw-bg-[#EEEDED] tw-p-12 tw-rounded-md tw-mb-8 tw-mt-8">
                    <div className="tw-d-block mb-3">
                      <FontAwesomeIcon icon={faUserCog} className="tw-w-20 tw-h-[5rem!important] tw-text-blue-500" />
                    </div>
                    <div className='text-secondary'>
                      <strong>{domain}</strong> seeks to contract and hire the best people and then trust them: it&ampos;s the thinking behind the work at their own time policy.
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="tw-bg-[#EEEDED] tw-p-12 tw-rounded-md tw-mb-4">
                    <div className="tw-d-block mb-3">
                      <FontAwesomeIcon icon={faCogs} className="tw-w-20 tw-h-[5rem!important] tw-text-blue-500" />
                    </div>
                    <div className='text-secondary'>
                      The <strong>{domain}</strong> team loves building things and focus on being the most productive individual, not the amount of time spent in the office.
                    </div>
                  </div>
                </div>
              </div>
              <p className='text-secondary'>
                We put a lot of effort into making {domain} a fun place to work for people who like getting things done. So if you&apos;re game with this then enter your email address and be a part of the global team.
              </p>
            </div>
          </div>
        </div>
      </section>
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
      <section className="tw-py-24 bg-light">
        <div className="container">
          <div className="row mb-3">
            <div className="col-xl-4 mb-3">
              <div className="d-flex">
                <div className="tw-mr-4">
                  <FontAwesomeIcon icon={faGlobe} className="tw-w-8 tw-h-[2rem!important] text-secondary" />
                </div>
                <div className="">
                  <h5 className="tw-font-semibold">Contrib Marketplace</h5>
                  <p className='mb-0'>
                    Browse Jobs, Ideas and Micro Tasks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 mb-3">
              <div className="d-flex">
                <div className="tw-mr-4">
                  <FontAwesomeIcon icon={faGlobe} className="tw-w-8 tw-h-[2rem!important] text-secondary" />
                </div>
                <div className="">
                  <h5 className="tw-font-semibold">Contribute</h5>
                  <p className='mb-0'>
                    Contribute using your skills, services, apps and/or capital.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 mb-3">
              <div className="d-flex">
                <div className="tw-mr-4">
                  <FontAwesomeIcon icon={faGlobe} className="tw-w-8 tw-h-[2rem!important] text-secondary" />
                </div>
                <div className="">
                  <h5 className="tw-font-semibold">Crypto Marketplace</h5>
                  <p className='mb-0'>
                    Contribute to blockchain projects on premium urls today
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tw-shadow-[-4px_49px_79px_0px_rgba(0,0,0,0.15)] tw-p-14 tw-rounded-md tw-bg-white">
                <div className="row gy-3">
                  <div className="col-xl-3 d-flex tw-flex-col text-center">
                    <h2 className="tw-font-extrabold tw-text-3xl">5250</h2>
                    <div>NO. OF MEMBERS</div>
                  </div>
                  <div className="col-xl-3 d-flex tw-flex-col text-center">
                    <h2 className="tw-font-extrabold tw-text-3xl">310</h2>
                    <div>NO. OF CAMPAIGNS</div>
                  </div>
                  <div className="col-xl-3 d-flex tw-flex-col text-center">
                    <h2 className="tw-font-extrabold tw-text-3xl">395</h2>
                    <div>REWARDS GIVEN</div>
                  </div>
                  <div className="col-xl-3 d-flex tw-flex-col text-center">
                    <h2 className="tw-font-extrabold tw-text-3xl">3599072</h2>
                    <div>TOTAL IMPRESSIONS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
