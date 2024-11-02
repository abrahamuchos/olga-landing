import logo from '../assets/img/Logo.svg';
import heroImg from '../assets/img/hero.svg';
import heroLgImg from '../assets/img/hero-lg.svg';
import cloudImg from '../assets/img/clouds.svg'

export default function Hero() {

  return (
    <>
      <div className='w-full h-[65vh] bg-white relative max-container
        lg:h-[80vh]
        xl:h-[90vh]'
      >
        <nav className="pt-3 pl-6 mb-10
        xl:pt-6 lg:pl-7
        2xl:pt-9 2xl:pl-14"
        >
          <img src={logo} alt="olga-logo" className='w-[52px]'/>
        </nav>

        <div className='absolute m-auto left-[10%] right-0 top-[30%]
        md:left-[28%] md:top-[25%]
        lg:left-[12%] lg:top-[15%]
        xl:left-[17%] xl:top-[19%]'
        >
          <img
            src={heroImg}
            alt="image-hero"
            className='w-[300px] lg:hidden'
          />
          <img
            src={heroLgImg}
            alt="image-hero"
            className='lg:w-[750px] xl:w-[850px]  max-lg:hidden'
          />
        </div>

      </div>
      <div className="w-full h-[76px] bg-white relative">
        <div className="w-full absolute m-0 top-[82%]
          sm:top-[80%]
          md:top-[72%]
          lg:top-[55%]
          xl:top-[50%]
          2xl:top-[10%]"
        >
          <img src={cloudImg} alt="clouds" className='w-full'/>
        </div>
      </div>


      <div className='w-full h-[100vh] bg-blue-600'>
        <h1>Hello World</h1>
      </div>
    </>
  );
}



