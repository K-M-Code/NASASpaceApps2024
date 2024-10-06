    /**
     * v0 by Vercel.
     * @see https://v0.dev/t/yxFzkdPKUlF
     * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
     */
    import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
    } from '@/components/ui/accordion'

    interface FaqQuestion {
    id: string
    question: string
    answer: string
    options?: {
        title: string
        description: string
        linkURL?: string
        linkText?: string
    }[]
    linkURL?: string
    linkText?: string
    }

    const faqQuestions: FaqQuestion[] = [
    {
        id: 'faq-1',
        question:
        'NASA Dart Study Shows Asteroid Dimorphos Shape Changed After Dart Impact',
        answer:
        'After NASA’s historic Double Asteroid Redirection Test, a JPL-led study has shown that the shape of asteroid Dimorphos has changed and its orbit has shrunk. When NASA’s DART (Double Asteroid Redirection Test) deliberately smashed into a 560-foot-wide (170-meter-wide) asteroid on Sept. 26, 2022, it made its mark in more ways than one. The demonstration showed that a kinetic impactor could deflect a hazardous asteroid should one ever be on a collision course with Earth. Now a new study published in the Planetary Science Journal shows the impact changed not only the motion of the asteroid, but also its shape.',
        linkURL:
        'https://www.jpl.nasa.gov/news/nasa-study-asteroids-orbit-shape-changed-after-dart-impact/',
        linkText: 'NASA Dart Impact Study'
    },
    {
        id: 'faq-2',
        question: 'ESA Hera Planetary Defense Mission - Solving asteroid mysteries',
        answer:
        'There’s a mystery out there in deep space – and solving it will make Earth safer. That’s why the European Space Agency’s Hera mission is taking shape – to go where one particular spacecraft has gone before. The spacecraft will revisit Dimorphos to gather vital close-up data about the deflected body, to turn DART’s grand-scale experiment into a well-understood and potentially repeatable planetary defense technique.',
        linkURL: 'https://www.esa.int/Space_Safety/',
        linkText: 'ESA Hera Planetary Defense'
    },
    {
        id: 'faq-3',
        question: "What are NEO's?",
        answer:
        'NEOs are a type of celestial body that originate from the outer regions of the solar system, particularly from the Kuiper Belt or Oort Cloud. Unlike asteroids, comets are composed of ice, dust, and rocky material, and they often develop a visible atmosphere or "coma" and a tail when they come close to the Sun. As a Near-Earth Object (NEO), an NEC is a comet whose orbit brings it close to Earth\'s vicinity. Due to their highly elliptical orbits, these comets spend much of their time in the outer solar system, only occasionally passing near Earth. Although NECs are less common than Near-Earth Asteroids (NEAs), their high velocities, combined with the volatile materials they release as they near the Sun, make them a subject of interest and concern when studying potential impact hazards.',
        linkURL: 'https://en.wikipedia.org/wiki/Near-Earth_object',
        linkText: 'Near Earth Objects Wikipedia'
    },
    {
        id: 'faq-4',
        question: 'Informational Websites in regards to NEOs',
        answer: 'Below are some websites that are useful in regards to NEOs.',
        options: [
        {
            title: 'Center for NEO Studies (CNEOS) JPL NASA',
            description:'',
            linkURL: 'https://nextjs.org/docs/basic-features/data-fetching/get-static-props',
            linkText: 'CNEOS'
        },
        {
            title: 'European Space Agency - ESA Space Safety',
            description:'',
            linkURL: 'https://www.esa.int/Space_Safety/',
            linkText: 'ESA Space Safety'
        },
        {
            title: 'The United Nations Office for Outer Space Affairs (UNOOSA)',
            description:'',
            linkURL: 'https://www.unoosa.org/oosa/sk/ourwork/topics/neos/index.html',
            linkText: 'UNOOSA'
        },
        {
            title: 'International Astronomical Union - IAU',
            description:'',
            linkURL: 'https://www.iau.org/public/themes/neo/',
            linkText: 'IAU'
        },
        {
            title: 'Importance of Investing in Planetary Defense',
            description:'',
            linkURL: 'https://newspaceeconomy.ca/2024/06/03/the-importance-of-investing-in-planetary-defense-safeguarding-earths-future/',
            linkText: 'New Space Economy Article'
        }
        ]
    }
    ]

    const FAQSection = () => {
    return (
        <section className='container mx-auto' id='faq'>
        <div className='m-4 rounded-xl bg-white p-8'>
            <h2 className='mb-4 text-2xl font-bold'>FAQs & Resources</h2>
            <Accordion type='single'>
            {faqQuestions.map(question => (
                <AccordionItem key={question.id} value={question.id}>
                <AccordionTrigger className='text-left text-lg font-medium'>
                    {question.question}
                </AccordionTrigger>
                <AccordionContent className='my-2'>
                    <p className='text-muted-foreground'>{question.answer}</p>
                    {question.options && question.options.length > 0 && (
                    <ul className='mt-4 list-disc pl-6 text-muted-foreground'>
                        {question.options.map(option => (
                        <li key={option.title}>
                            <strong>{option.title}</strong>
                            <p className='text-muted-foreground'>
                            {option.description}
                            </p>
                            <p className='my-4'>
                            <a
                                className='rounded bg-primary px-4 py-2 text-black shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-transparent hover:bg-tertiary hover:text-white hover:shadow-xl'
                                href={option.linkURL}
                                target='_blank'
                            >
                                {option.linkText}
                            </a>
                            </p>
                        </li>
                        ))}
                    </ul>
                    )}
                    {question.linkURL && question.linkText && (
                    <p className='my-4'>
                        <a
                        className='rounded bg-primary px-4 py-2 text-black shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-transparent hover:bg-tertiary hover:text-white hover:shadow-xl'
                        href={question.linkURL}
                        target='_blank'
                        >
                        {question.linkText}
                        </a>
                    </p>
                    )}
                </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </div>
        </section>
    )
    }

    export default FAQSection
