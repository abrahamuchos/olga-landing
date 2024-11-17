import cloudUp from '../assets/img/clouds.svg';
import logo2 from '../assets/img/logo-2.svg';
import emoticon1 from '../assets/img/emoji-1.png';
import emoticon2 from '../assets/img/emoji-2.png';

export default function Footer() {

  return (
    <div className="pt-10 lg:pt-24 bg-creamOlga">
      <footer className='bg-white h-[140px] w-full relative'>
        <div className="absolute bottom-[90%] w-full
          md:bottom-[85%]
          lg:bottom-[76%]
          2xl:bottom-[70%]
          3xl:bottom-[60%]
          "
        >
          <img src={cloudUp} alt="clouds" className="w-full"/>
        </div>

        <div className="max-container pt-[50px] px-6 flex flex-col items-center z-10
          md:flex-row md:justify-between"
        >
          <div>
            <img src={logo2} alt="logo-olga" className='w-[106px]'/>
          </div>
          <div className='flex items-center'>
            <p>No toques los emoticones</p>
            <img src={emoticon1} alt="emoticon" className='w-45px'/>
            <img src={emoticon2} alt="emoticon" className='w-45px'/>
          </div>
        </div>
      </footer>
    </div>

  );
}



