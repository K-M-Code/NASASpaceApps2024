    import Image from 'next/image'
    import InfoImage1 from '@/public/image/InfoImage1.jpg'
    import InfoImage2 from '@/public/image/InfoImage2.jpg'
    import InfoImage3 from '@/public/image/InfoImage3.svg'
    import InfoImage4 from '@/public/image/InfoImage4.jpg'

    const infoSections = [
    {
        id: 1,
        title: 'Orrery Models',
        text1: `An orrery is a mechanical model of the Solar System that illustrates or predicts the relative positions and motions of the planets and moons, usually according to the heliocentric model. It may also represent the relative sizes of these bodies; however, since accurate scaling is often not practical due to the actual large ratio differences, a scaled-down approximation may be used instead. The Greeks had working planetaria, but the first modern example was produced c. 1712 by John Rowley. He named it orrery for Charles Boyle, 4th Earl of Orrery (in County Cork, Ireland). The plaque on it reads "Orrery invented by Graham 1700 improved by Rowley and presented by him to John Earl of Orrery after whom it was named by at the suggestion of Richard Steele."`,
        text2: `They are typically driven by a clockwork mechanism with a globe representing the Sun at the centre, and with a planet at the end of each of the arms. An orrery should properly include the Sun, the Earth and the Moon (plus optionally other planets). A model that only includes the Earth, the Moon, and the Sun is called a tellurion or tellurium, and one which only includes the Earth and the Moon is a lunarium. A jovilabe is a model of Jupiter and its moons. The Antikythera mechanism, discovered in 1901 in a wreck off the Greek island of Antikythera in the Mediterranean Sea, exhibited the diurnal motions of the Sun, Moon, and the five planets known to the ancient Greeks. It has been dated between 205 to 87 BC. The mechanism is considered one of the first orreries. It was geocentric and used as a mechanical calculator to calculate astronomical positions.`,
        image: InfoImage1,
        link: 'https://en.wikipedia.org/wiki/Orrery'
    },
    {
        id: 2,
        title: 'Near-Earth Comets (NEC)',
        text1: `Near-Earth Comets (NECs) are a type of celestial body that originate from the outer regions of the solar system, particularly from the Kuiper Belt or Oort Cloud. Unlike asteroids, comets are composed of ice, dust, and rocky material, and they often develop a visible atmosphere or "coma" and a tail when they come close to the Sun. As a Near-Earth Object (NEO), an NEC is a comet whose orbit brings it close to Earth's vicinity. Due to their highly elliptical orbits, these comets spend much of their time in the outer solar system, only occasionally passing near Earth. Although NECs are less common than Near-Earth Asteroids (NEAs), their high velocities, combined with the volatile materials they release as they near the Sun, make them a subject of interest and concern when studying potential impact hazards.`,
        text2: `NECs are harder to detect than asteroids due to their infrequent visits to the inner solar system and the fact that their bright comas can obscure their true size. When they pass close to Earth, they can also leave behind trails of debris, which can lead to meteor showers. The unpredictability of their long-period orbits, combined with the difficulty in determining their exact size and structure, adds to the complexity of monitoring these objects. Despite their rarity, NECs remain important to the study of planetary defense and space exploration due to their unique compositions and potential as impact threats.`,
        text3: `NEO Basics by Center for NEO Studies (CNEOS) JPL NASA`,
        image: InfoImage2,
        link: 'https://cneos.jpl.nasa.gov/about/basics.html'
    },
    {
        id: 3,
        title: 'Near-Earth Asteroids (NEA)',
        text1: `Near-Earth Asteroids (NEAs) are rocky bodies that orbit the Sun and whose orbits bring them close to Earth's path. NEAs are more numerous than NECs and form the majority of Near-Earth Objects (NEOs). These asteroids originate from the asteroid belt between Mars and Jupiter, but gravitational interactions with planets or collisions with other asteroids can alter their trajectories, sending them towards the inner solar system. NEAs are of great interest both from a scientific perspective, as they contain primordial material from the early solar system, and from a planetary defense standpoint, as their close approaches to Earth pose a potential impact risk.`,
        text2: `There are different categories of NEAs based on their orbits, with the three main groups being Atira, Amor, and Apollo asteroids. While most NEAs are not large enough to cause significant damage if they were to enter Earth's atmosphere, some have diameters exceeding 140 meters, making them capable of causing regional destruction in the event of an impact. Studying NEAs helps scientists understand more about the early solar system, as well as develop strategies for deflecting or mitigating potential impacts. NEAs also present opportunities for future space exploration and resource utilization due to the valuable metals and minerals some of them contain.`,
        text3: `Near-Earth Object Coordination Centre by ESA`,
        image: InfoImage3,
        link: 'https://www.esa.int/Space_Safety/Near-Earth_Object_Coordination_Centre'
    },
    {
        id: 4,
        title: 'Potentially Hazardous Asteroids (PHA)',
        text1: `Potentially Hazardous Asteroids (PHAs) are a specific subset of Near-Earth Asteroids (NEAs) that pose a higher risk of impacting Earth. An asteroid is classified as a PHA if it meets two criteria: its orbit brings it within 0.05 astronomical units (about 7.5 million kilometers) of Earth's orbit, and it has a diameter of at least 140 meters. PHAs are considered particularly dangerous because of their size, which is large enough to cause significant damage upon impact, and their relatively close proximity to Earth, which increases the likelihood of a collision over time.`,
        text2: `While PHAs are constantly monitored by astronomers and space agencies, the risk they pose varies. Some PHAs' orbits can be affected by gravitational forces, including those from Earth and other planets, making their future paths uncertain. Fortunately, no known PHA currently poses an imminent threat to Earth, but continued tracking and study are essential for early detection and developing potential deflection technologies. The study of PHAs also aids in understanding how to protect Earth from future collisions and highlights the importance of international collaboration in monitoring these objects.`,
        text3: `Double Asteroid Redirection Test (DART) by NASA`,
        image: InfoImage4,
        link: 'https://science.nasa.gov/mission/dart/'
    }
    ]

    const InfoSection1 = () => {
    return (
        <div className='mx-4 -mt-16 mb-20'>
        {infoSections.map((section, index) => (
            <div className='container mx-auto mt-20' key={section.id}>
            <div className='w-full rounded-xl bg-white p-4 shadow-lg'>
                <div
                className={`flex flex-col justify-center gap-10 lg:flex-row ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                >
                <div className='content-image flex basis-1/3 items-center justify-center rounded-xl sm:basis-1/4'>
                    <Image
                    src={section.image}
                    alt={section.title}
                    className='max-h-full rounded-lg object-contain'
                    />
                </div>
                <div className='content-text basis-2/3 sm:basis-3/4'>
                    <h1 className='mb-4 px-4 text-3xl font-bold'>
                    {section.title}
                    </h1>
                    <p className='mb-4 px-4'>{section.text1}</p>
                    <p className='mb-4 px-4'>{section.text2}</p>
                    <p className='mb-4 px-4 font-bold'>{section.text3}</p>
                    <div className='mb-4 px-4 pt-4'>
                    <a
                        href={section.link}
                        target='_blank'
                        className='rounded bg-primary px-4 py-2 text-black shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-transparent hover:bg-tertiary hover:text-white hover:shadow-xl'
                    >
                        Read More
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>
    )
    }

    export default InfoSection1
