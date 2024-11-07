import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.css";
import guest1 from "../assets/img/guest-1.png";
import guest2 from "../assets/img/guest-2.png";
import guest3 from "../assets/img/guest-3.png";
import guest4 from "../assets/img/guest-4.png";
import guest5 from "../assets/img/guest-5.png";
import guest6 from "../assets/img/guest-6.png";
import guest7 from "../assets/img/guest-7.png";
import guest8 from "../assets/img/guest-8.png";

export default function SpecialGuest() {
  const RightArrow = ({onClick}) => (
    <div className={`arrow-right`} onClick={onClick}>
      <div className='inner-arrow-right'></div>
    </div>
  );

  const LeftArrow = ({onClick}) => (
    <div className={`arrow-left`} onClick={onClick}>
      <div className='inner-arrow-left'></div>
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    nextArrow: <RightArrow/>,
    prevArrow: <LeftArrow/>,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
        }
      },
    ]
  }

  return (
    <section className='bg-creamOlga h-[150px]'>
      <div className='max-container slider-container'>
        <Slider {...settings}>
          <div>
            <img src={guest1} alt="invitado 1" className='w-[123px] h-[123px]'/>
          </div>
          <div>
            <img src={guest2} alt="invitado 2" className='w-[123px] h-[123px]'/>
          </div>
          <div>
            <img src={guest3} alt="invitado 3" className='w-[123px] h-[123px]'/>
          </div>
          <div>
            <img src={guest4} alt="invitado 4" className='w-[123px] h-[123px]'/>
          </div>
          <div>
            <img src={guest5} alt="invitado 5" className='w-[123px] h-[123px]'/>
          </div>
          <div>
            <img src={guest6} alt="invitado 6" className='w-[123px] h-[123px]'/>
          </div>
          <div>
            <img src={guest7} alt="invitado 7" className='w-[123px] h-[123px]'/>
          </div>
          <div>
            <img src={guest8} alt="invitado 8" className='w-[123px] h-[123px]'/>
          </div>
        </Slider>
      </div>
    </section>

  );
}



