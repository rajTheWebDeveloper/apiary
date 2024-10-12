import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import HeroImage from '../../public/HeroImage.jpg'
import Honey from '../../public/honey.jpg'
import '@mantine/carousel/styles.css';


export default function ImageCarousel() {
  return (
    <div className='w-full h-[250px] md:h-[400px] flex'>
        <Carousel height="100%" loop style={{ flex: 1 }}>
        <Carousel.Slide>
            <Image className="w-full h-full object-cover" src={HeroImage} alt="" />
        </Carousel.Slide>
        <Carousel.Slide>
            <Image className="w-[100%] h-[100%] object-cover" src={Honey} alt="" />
        </Carousel.Slide>
        <Carousel.Slide>
            <img className="w-[100%] h-[100%] object-cover" src="https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9uZXl8ZW58MHx8MHx8fDA%3D" alt="" />
        </Carousel.Slide>
    </Carousel>
    </div>
  );
}