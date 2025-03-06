import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import HeroImage from '../../public/HeroImage.jpg'
import HeroMain from '../../public/hero-main.jpeg'
import img2 from '../../public/img2.jpeg'
import img3 from '../../public/img3.jpeg'
import img4 from '../../public/img4.jpeg'
import img5 from '../../public/img5.jpeg'
import img6 from '../../public/img6.jpeg'
import img7 from '../../public/img7.jpeg'
import img8 from '../../public/img8.jpeg'
import '@mantine/carousel/styles.css';


export default function ImageCarousel() {
  return (
    <div className='w-full h-[250px] md:h-[400px] flex'>
        <Carousel height="100%" loop style={{ flex: 1 }}>
        <Carousel.Slide>
            <Image className="w-full h-full object-cover" src={HeroImage} alt="" />
        </Carousel.Slide>
        <Carousel.Slide>
            <Image className="w-full h-full object-cover" src={img2} alt="" />
        </Carousel.Slide>
        <Carousel.Slide>
            <Image className="w-[100%] h-[100%] object-cover" src={img3} alt="" />
        </Carousel.Slide>
        <Carousel.Slide>
            <Image className="w-[100%] h-[100%] object-cover" src={img4} alt="" />
        </Carousel.Slide>
        <Carousel.Slide>
            <Image className="w-[100%] h-[100%] object-cover" src={img5} alt="" />
        </Carousel.Slide>
        <Carousel.Slide>
            <Image className="w-[100%] h-[100%] object-cover" src={img6} alt="" />
        </Carousel.Slide>
        <Carousel.Slide>
            <Image className="w-[100%] h-[100%] object-cover" src={img7} alt="" />
        </Carousel.Slide>
        <Carousel.Slide>
            <Image className="w-[100%] h-[100%] object-cover" src={img8} alt="" />
        </Carousel.Slide>
    </Carousel>
    </div>
  );
}