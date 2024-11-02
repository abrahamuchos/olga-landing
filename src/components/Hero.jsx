import logo from '../assets/img/Logo.svg';
import heroImg from '../assets/img/hero.svg';
import heroLgImg from '../assets/img/hero-lg.svg';
import cloudImg from '../assets/img/clouds.svg';

export default function Hero() {

  return (
    <>
      <div className='w-full h-[65vh] bg-white relative max-container
        lg:h-[80vh]
        xl:h-[90vh]'
      >
        <nav className="pt-3 pl-6
          xl:pt-6 lg:pl-7
          2xl:pt-9 2xl:pl-14"
        >
          <img src={logo} alt="olga-logo" className='w-[52px] xl:w-[65px]'/>
        </nav>

        <picture className='absolute m-auto left-0 right-0 top-0 bottom-0 h-[232px] w-[300px]
          sm:w-[550px] md:h-[274px]
          lg:w-[750px] lg:h-[374px]
          xl:w-[850px] xl:h-[422px]'>
          <source media='(max-width: 639px)' srcSet={heroImg}/>
          <source media='(min-width: 640px)' srcSet={heroLgImg}/>
          <img src={heroImg} alt="hero image"/>
        </picture>
      </div>

      <div className="w-full h-[35px] bg-white relative 2xl:h-[130px]">
        <div className="w-full absolute m-0 top-[27px] left-0 right-0
          sm:top-[20px]
          md:top-[13px]
          lg:top-[10px]
          xl:top-[1px]
          2xl:top-[65%]
          3xl:top-[45%]"
        >
          <img src={cloudImg} alt="clouds" className='w-full'/>
        </div>
      </div>
    </>
  );
}



