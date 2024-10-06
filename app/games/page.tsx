    import Image from 'next/image'
    import Link from 'next/link'

    import Header from '@/components/frontend/Header'
    import Footer from '@/components/frontend/Footer'
    import gamesHeroImage from '@/public/image/gamesHero.jpg'
    import GamesImage1 from '@/public/image/games1.jpeg'
    import GamesImage2 from '@/public/image/games2.jpeg'
    import GamesImage3 from '@/public/image/games3.jpeg'
    import GamesImage4 from '@/public/image/games4.jpeg'

    const gamesSections = [
    {
        id: 1,
        title: 'Storyline & Objective',
        text1: `In the near future, Earth has become more vigilant in monitoring space for potential threats. Players are members of the "Cosmic Guardians," an elite space organization tasked with detecting, studying, and managing Near-Earth Objects. Players must make strategic decisions about how to deal with these objects, including deflecting dangerous asteroids, tracking comets, and launching space missions to study NEOs.`,
        text2: `Players take on the role of "Cosmic Guardians," responsible for monitoring and defending Earth from various Near-Earth Objects (NEOs), including Near-Earth Comets (NEC), Near-Earth Asteroids (NEA), and Potentially Hazardous Asteroids (PHA). Through fun, interactive gameplay, players will learn about the science behind NEOs, their characteristics, and the importance of planetary defense.`,
        text3: `Genre: Educational, Strategy, Simulation`,
        image: GamesImage1,
        link: ''
    },
    {
        id: 2,
        title: 'Core Gameplay Mechanics',
        text1: `Mechanics: The game starts with a basic space radar system where NEOs appear as dots. Players must collect data, classify them as comets, asteroids, or PHAs, and assess their threat levels. Comets (NECs) Recognizable by their tails, comets have highly elliptical orbits. Players must monitor their infrequent passes near Earth and study their volatile compositions. Asteroids (NEAs): Players observe their more frequent orbits near Earth and determine which ones contain valuable resources or pose a threat. Potentially Hazardous Asteroids (PHA): The game highlights PHAs as the highest threat, with special missions to divert or destroy them.`,
        text2: `Players must allocate resources (rockets, satellites, space probes) to accomplish different tasks. Players launch missions to deflect potentially dangerous asteroids using various methods (gravity tractors, nuclear detonations, or kinetic impactors). Timing and trajectory adjustments are crucial. When a NEC enters the solar system, players must send probes to study its composition and gather data for future research. Players can mine specific asteroids for rare materials, learning about the composition and potential benefits of NEAs.`,
        image: GamesImage2,
        link: ''
    },
    {
        id: 3,
        title: 'Educational Goals',
        text1: `Players will learn to differentiate between NECs, NEAs, and PHAs and understand their behaviors, orbits, and physical characteristics. The game will teach the real-world strategies for defending Earth against potential NEO impacts, emphasizing scientific methods like asteroid deflection and how space agencies monitor threats. Through fun and challenging missions, players will learn about space physics, orbital mechanics, the solar system's structure, and how space missions are planned. The game also introduces the concept of asteroid mining and how the materials from space bodies could support future space missions and industries.`,
        text2: `In Campaign mode a series of structured missions will be presented where players progress through increasing challenges. Each level introduces new NEO types, new mission objectives (e.g., deflecting an asteroid, tracking a comet, or mining resources), and gradually ramps up the difficulty. In Sandbox Mode players can explore the solar system at their own pace, tracking NEOs and experimenting with different defense strategies without mission constraints. In Multiplayer Mode cooperative missions where players can work together to manage planetary defense will be available. Players can trade resources, share satellite data, and collaborate on larger missions, such as deflecting a massive PHA or setting up asteroid mining operations.`,
        text3: `Game Modes: Campaign, Sandbox, Multiplayer`,
        image: GamesImage3,
        link: ''
    },
    {
        id: 4,
        title: 'Benefits & Advantages',
        text1: `"Cosmic Guardians: Defend Earth from Near-Earth Objects" blends real-world science with fun, engaging gameplay. By teaching players about Near-Earth Comets, Near-Earth Asteroids, and Potentially Hazardous Asteroids, the game not only entertains but also raises awareness about planetary defense and the importance of space science.`,
        text2: `Inspired by games like Kerbal Space Program and Asteroid Defense, this game hopes to evoke the nostalgia for older generation while also being educational and informative for youngsters. This hope to evoke more interest in space sciences and research while offering people and an opportunity to learn more about the science behind NEOs, their characteristics, and the importance of planetary defense.`,
        text3: `Benefits: Educational, For All Age Groups, For All Skill Levels`,
        image: GamesImage4,
        link: ''
    }
    ]

    const GamesPage = () => {
    return (
        <>
        <Header />

        <div className='relative z-20 flex items-center overflow-hidden bg-black'>
            <div className='container relative mx-auto flex px-6 py-16'>
            <div className='relative z-20 flex flex-col sm:w-2/3 lg:w-2/5'>
                <span className='mb-12 h-2 w-20 bg-primary'></span>
                <h1 className='flex flex-col text-4xl font-black uppercase leading-none text-white sm:text-6xl'>
                Learn about
                <span className='text-6xl sm:text-8xl'>Neo</span>
                </h1>
                <p className='text-sm text-white'>
                Why is understanding about Near Earth Object&apos;s important? How do they impact your life? Learn about them with our NEO Defender Game.
                </p>
                <div className='mt-8 flex'>
                <a
                    href='#'
                    className='text-md mr-4 rounded-lg border-2 border-transparent bg-primary px-4 py-2 uppercase text-black transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white'
                >
                    Play Now
                </a>
                <a
                    href='#'
                    className='text-md rounded-lg border-2 border-primary bg-transparent px-4 py-2 uppercase text-primary transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary hover:text-black'
                >
                    Learn more
                </a>
                </div>
            </div>
            <div className='absolute right-0 top-0 h-full overflow-clip md:bottom-16 md:top-auto lg:-bottom-40 lg:h-auto lg:w-full lg:bg-contain'>
                <img src={gamesHeroImage.src} className='m-auto' />
            </div>
            </div>
        </div>
        <div className='container mx-auto my-20'>
            <div className='flex flex-col justify-center gap-10'>
            <div>
                <h1 className='w-fit border-b-8 border-primary pb-4 text-center text-2xl sm:text-4xl font-bold text-white mx-auto'>
                Cosmic Guardians: Defend Earth from Near-Earth Objects
                </h1>
            </div>

            <div className='mx-4 -mt-16 mb-20'>
                {gamesSections.map((section, index) => (
                <div className='container mx-auto mt-20' key={section.id}>
                    <div className='w-full rounded-xl bg-white p-4 shadow-lg'>
                    <div
                        className={`flex flex-col justify-center gap-10 lg:flex-row ${
                        index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                        }`}
                    >
                        {section.image && (
                        <div className='content-image flex basis-1/3 items-center justify-center rounded-xl sm:basis-1/4'>
                            <Image
                            src={section.image}
                            alt={section.title}
                            className='max-h-full rounded-lg object-contain'
                            />
                        </div>
                        )}
                        <div className='content-text basis-2/3 sm:basis-3/4'>
                        {section.title && (
                            <h1 className='mb-4 px-4 text-3xl font-bold'>
                            {section.title}
                            </h1>
                        )}
                        {section.text1 && (
                            <p className='mb-4 px-4'>{section.text1}</p>
                        )}
                        {section.text2 && (
                            <p className='mb-4 px-4'>{section.text2}</p>
                        )}
                        {section.text3 && (
                            <p className='mb-4 px-4 font-bold'>{section.text3}</p>
                        )}
                        {section.link && (
                            <div className='mb-4 px-4 pt-4'>
                            <Link
                                href={section.link}
                                className='rounded bg-primary px-4 py-2 text-black shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-transparent hover:bg-tertiary hover:text-white hover:shadow-xl'
                            >
                                Read More
                            </Link>
                            </div>
                        )}
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        <Footer />
        </>
    )
    }

    export default GamesPage
