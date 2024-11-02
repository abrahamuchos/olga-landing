import bus1Img from '../assets/img/bus-1.png';
import bus2Img from '../assets/img/bus-2.png';

export default function Bus() {

  return (
    <section className='w-full h-[150px] bg-checkered bg-cover bg-center flex flex-nowrap justify-around content-start items-end
      md:justify-around
      lg:justify-center
      xl:h-[300px]'
    >
      <img
        src={bus1Img}
        alt="bus-1"
        className='h-[100px] lg:h-[200px] '
      />
      <img
        src={bus2Img}
        alt="bus-1"
        className='h-[100px]  lg:h-[200px] lg:ml-10 xl:ml-32'
      />
    </section>
  );
}



