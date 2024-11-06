import Card from "./Card.jsx";

import paint1Img from "../assets/img/paint-1.png";
import paint2Img from "../assets/img/paint-2.png";
import logoEvent1Img from "../assets/img/logo-sone-que-volaba.svg";
import logoEvent2Img from "../assets/img/logo-seria-increible.svg";
import chargeCursorImg from "../assets/img/cursor-chargue.svg";

export default function Events() {

  return (
    <section className='max-container bg-creamOlga'>
      {/*Title*/}
      <div className="flex flex-col items-center w-full py-10 mb-6">
        <h1 className='text-xl md:text-2xl text-blackOlga text-center mb-6'>Los escuchamos y yendo no, llegando</h1>
        <h2 className='text-base md:text-xl text-blackOlga text-center'>Te spoileamos a dónde primero...</h2>
      </div>
      {/*End Title*/}

      {/*Events*/}
      <div className="flex justify-center items-center gap-14 py-12 relative
        max-lg:flex-col"
      >
        <div className='max-xl:hidden absolute margin-0 bottom-[88%] left-[89%] z-10'>
          <img src={chargeCursorImg} alt="cursor cargando" className='w-[62px]'/>
        </div>

        <Card
          image={{src: paint1Img, alt: "Evento soñé que volaba cover"}}
          logoSrc={logoEvent1Img}
          places={["Córdoba", "Santa Fé", "Mendoza"]}
        />

        <Card
          image={{src: paint2Img, alt: "Evento seria increible cover"}}
          logoSrc={logoEvent2Img}
          places={["Salta", "Jujuy", "Formosa"]}
          ribbonOption='purple'
        />
      </div>
      {/*End Events*/}

    </section>
  );
}



