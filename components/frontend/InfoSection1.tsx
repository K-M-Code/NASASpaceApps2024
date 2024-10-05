    import Image from 'next/image'
    import InfoImage1 from '@/public/image/hero.jpg'
    import Link from 'next/link'

    const InfoSection1 = () => {
    return (
        <div className='mx-4 -mt-16'>
        <div className='container mx-auto'>
            <div className='w-full rounded-xl bg-white p-4 shadow-lg'>
            <div className='flex flex-col justify-center gap-10 lg:flex-row'>
                <div className='content-image basis-1/3 rounded-xl sm:basis-1/4'>
                <Image
                    src={InfoImage1}
                    alt='Orrery Image'
                    className='max-h-full rounded-lg object-contain'
                />
                </div>
                <div className='content-text basis-2/3 sm:basis-3/4'>
                <h1 className='mb-4 px-4 text-3xl font-bold'>Orrery Models</h1>
                <p className='mb-4 px-4'>
                    An orrery is a mechanical model of the Solar System that
                    illustrates or predicts the relative positions and motions of
                    the planets and moons, usually according to the heliocentric
                    model. It may also represent the relative sizes of these bodies;
                    however, since accurate scaling is often not practical due to
                    the actual large ratio differences, a scaled-down approximation
                    may be used instead. The Greeks had working planetaria, but the
                    first modern example was produced c. 1712 by John Rowley. He
                    named it orrery for Charles Boyle, 4th Earl of Orrery (in County
                    Cork, Ireland). The plaque on it reads &quot;Orrery invented by
                    Graham 1700 improved by Rowley and presented by him to John Earl
                    of Orrery after whom it was named by at the suggestion of
                    Richard Steele.&quot;
                </p>

                <p className='mb-4 px-4'>
                    They are typically driven by a clockwork mechanism with a globe
                    representing the Sun at the centre, and with a planet at the end
                    of each of the arms. An orrery should properly include the Sun,
                    the Earth and the Moon (plus optionally other planets). A model
                    that only includes the Earth, the Moon, and the Sun is called a
                    tellurion or tellurium, and one which only includes the Earth
                    and the Moon is a lunarium. A jovilabe is a model of Jupiter and
                    its moons.
                </p>

                <p className='mb-4 px-4'>
                    The Antikythera mechanism, discovered in 1901 in a wreck off the
                    Greek island of Antikythera in the Mediterranean Sea, exhibited
                    the diurnal motions of the Sun, Moon, and the five planets known
                    to the ancient Greeks. It has been dated between 205 to 87 BC.
                    The mechanism is considered one of the first orreries. It was
                    geocentric and used as a mechanical calculator to calculate
                    astronomical positions.
                </p>

                <div className='mt-4 px-4'>
                    <Link
                    href='https://en.wikipedia.org/wiki/Orrery'
                    className='rounded bg-primary px-4 py-2 text-black shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-transparent hover:bg-tertiary hover:text-white hover:shadow-xl'
                    >
                    Explore Now
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
    }

    export default InfoSection1
