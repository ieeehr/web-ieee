import React from "react"
import PropTypes from "prop-types"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper"
import { Link } from "gatsby"
import "swiper/swiper-bundle.min.css"
SwiperCore.use([EffectCoverflow, Navigation, Pagination])
const CoverflowEffect = () => {
  const [width, setWidth] = React.useState(0)
  React.useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  const SlideBody = props => {
    if (props.to)
      return props.newPage ? (
        <a href={props.to} target="_blank" rel="noreferrer">
          <div>
            <img
              className="bg-contain"
              style={{
                borderRadius: "1rem",
              }}
              src={props.imgSrc}
              alt="img"
            />
          </div>
        </a>
      ) : (
        <Link to={props.to}>
          <div>
            <img
              className="bg-contain"
              style={{
                borderRadius: "1rem",
              }}
              src={props.imgSrc}
              alt="img"
            />
          </div>
        </Link>
      )
    else
      return (
        <div>
          <img
            className="bg-contain"
            style={{
              borderRadius: "1rem",
            }}
            src={props.imgSrc}
            alt="img"
          />
        </div>
      )
  }
  SlideBody.propTypes = {
    to: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    newPage: PropTypes.bool,
  }

  let slideritems = [
    {
      to: "https://docs.google.com/forms/d/e/1FAIpQLScxJdfy9qZdY0Z6qL5VBYflzUkwpgEsycgqy_5UKMUaMg07xg/viewform",
    imgSrc:"https://ik.imagekit.io/u4sib0gco/Images/Cell%20me%20the%20answer.jpeg?updatedAt=1740211401051",
      
    newPage: true,
    
  },
  {
    to: "https://docs.google.com/forms/d/e/1FAIpQLSfJxmVPkEsp1OPJ8VNptzvkbWx2qk8bIHG58gXZll8X6d30PA/viewform",
    imgSrc:
      "https://ik.imagekit.io/u4sib0gco/Images/Webwiz.jpeg?updatedAt=1740211412774",
    newPage: true,
  },
    {
      
      to: "https://www.instagram.com/ieeesbgect/p/DFSmXKaP7eF/?hl=en",
      imgSrc:
        "https://ik.imagekit.io/rrjiefo85/AGM.jpg?updatedAt=1737998692429",
      newPage: true,
    },
    
    

    {
        to: "https://forms.gle/inywKHL3RdR4wfx96",
        imgSrc:
          "https://ik.imagekit.io/rrjiefo85/IEEE/Vega.jpg?tr=w-1080,h-1080",
        newPage: true,
    },

    // {
    //   to: "https://www.ieee.fisat.ac.in/droid4.0",
    //   imgSrc:
    //     "https://ik.imagekit.io/rrjiefo85/IEEE/Droid.jpg?updatedAt=1738002142313",
    //   newPage: true,
    // },
    // {
    //   to: "http://www.akcomsocsc.live/",
    //   imgSrc:
    //     "https://ik.imagekit.io/rrjiefo85/IEEE/FPGA.jpg?updatedAt=1738002426895",
    //   newPage: true,
    // },
    {
      to: "https://bit.ly/PCB_SPS",
      imgSrc:
        "https://ik.imagekit.io/rrjiefo85/IEEE/PCB.jpg?updatedAt=1738004161914",
      newPage: true,
    },
    {
      to: "https://bit.ly/doppelPager",
      imgSrc:
        "https://ik.imagekit.io/rrjiefo85/IEEE/DoppelPager.jpg?updatedAt=1738004704550",
      newPage: true,
    },
    {
      to: "https://forms.gle/Vo1Akvw5rADN45Mg8",
      imgSrc:
        "https://ik.imagekit.io/rrjiefo85/IEEE/Squid.jpg?updatedAt=1738004705148",
      newPage: true,
    },
    {
      to: "https://forms.gle/FTiNk7HhgCZhx6sT9",
      imgSrc:
        "https://ik.imagekit.io/rrjiefo85/IEEE/Commquest.jpg?updatedAt=1738004705907",
      newPage: true,
    },
    {
      to: "https://bit.ly/Electroclash_SPS",
      imgSrc:
        "https://ik.imagekit.io/rrjiefo85/IEEE/Thermin.jpg?updatedAt=1738004705971",
      newPage: true,
    },
    {
      to: "https://forms.gle/hvoGDKGaatKtxTbU7",
      imgSrc:
        "https://ik.imagekit.io/rrjiefo85/IEEE/Electric.jpg?updatedAt=1738004705703",
      newPage: true,
    },
  ]

  return (
    <div className="pt-10 pb-5 px-2 sm:px-10">
      <div className="rounded-lg shadow-2xl glass-effect">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto sm:py-16">
            <h1 className="font-medium text-3xl mb-8 text-gray-900 text-left ml-8 ">
              Recent Events{" "}
            </h1>

            <div className="flex justify-center align-center ">
              <div className="min-w-full md:w-4/6">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={width > 640 ? 3 : 1}
                  pagination={{
                    clickable: true,
                  }}
                  className="mySwiper"
                >
                  {slideritems.map((item, index) => (
                    <SwiperSlide key={index}>
                      <SlideBody
                        to={item.to}
                        imgSrc={item.imgSrc}
                        newPage={item.newPage}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <p className="text-xs pt-1 sm:text-sm">
                  Click on Event Poster to Register
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
export default CoverflowEffect
