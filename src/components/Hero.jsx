
import { Link } from 'react-router-dom';
import hero1 from '../assets/slider-image-1.jpeg'
import hero2 from '../assets/slider-image-2.jpeg';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/james-qualtrough-qvXPDFVMics-unsplash.jpg';
import hero5 from '../assets/nipun-haldar-qFhmYV6mOnI-unsplash.jpg';
import hero6 from '../assets/yours-B9EHePG56zA-unsplash.jpg';
// import hero4 from '../assets/hero4.webp';
const carouselImages = [hero4,hero5,hero6,hero3];
export default function Hero() {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* info */}
          <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl '>
          We’re changing the way people shop.
        </h1>

        <p className='mt-8 max-w-xl text-lg leading-8'>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo.
        </p>
        <div className='mt-10 '>
          <Link to='products' className='btn btn-primary '>
            Our Products
          </Link>
        </div>
      </div>
          {/* slider */}
          <div className="hidden lg:carousel h-[28rem] carousel-center p-4 space-x-4 bg-neutral rounded-box">
                {carouselImages.map((image)=>{
                  return <div key={image} className=' carousel-item '>
                    <img className=' rounded-box h-full w-80  object-cover' src={image} alt="" />
                  </div>
                })}
          </div>
    </div>
  )
}