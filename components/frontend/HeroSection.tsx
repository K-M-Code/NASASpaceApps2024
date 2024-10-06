import Link from 'next/link'
import Image from 'next/image'
// import heroImage1 from '@/public/image/Hero1.png'
// import heroImage2 from '@/public/image/Hero2.png'
// import heroImage3 from '@/public/image/Hero3.png'
import heroBG from '@/public/image/HeroBG2.jpg'

const HeroSection = () => {
  return (
    <section className='min-h-[75vh] md:min-h-[75svh] lg:min-h[50vh] lg:max-h-[500px]'>
      <div className='text-white'>
      <Image
                className='absolute object-cover top-0 left-0 w-screen min-h-screen lg:max-h-[600px] -z-10 opacity-60'
                src={heroBG}
                alt='Image'
                // sizes='100vw'
              />
        <div className='container mx-auto mt-60 flex flex-col items-center md:mt-72 md:flex-row '>
          <div className='flex w-full flex-col items-start justify-center p-8 lg:w-1/2'>
            <h1 className='py-2 drop-shadow-lg font-extrabold text-4xl text-yellow-400 md:text-5xl'>
              NASA Space Apps 2024
            </h1>
            <h2 className='mb-2 text-4xl leading-relaxed md:text-5xl md:leading-snug'>
              VAMK&apos;d
            </h2>
            <p className='mb-4 text-xl text-white font-bold drop-shadow-md md:text-2xl'>
              Our attempt at the Orrery Web App Challenge
            </p>
            <Link
              href='orrery'
              className='rounded bg-primary px-4 py-2 text-black shadow-lg hover:border-transparent hover:bg-white hover:text-secondary hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out'
            >
              Explore Now
            </Link>
          </div>
          <div className='mb-6 ml-0 mt-12 justify-center p-8 md:mb-0 md:ml-12 md:mt-0 lg:w-1/2'>
            <div className='flex  flex-wrap content-center'>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection