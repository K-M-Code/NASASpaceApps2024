const HomeContent = () => {
    return (
        <section className="container mx-auto bg-primary rounded-xl">
            <div className="flex flex-col justify-center px-4 ">
                <div className="mx-auto">
                    <h2 className="text-black border-b-8 border-tertiary pb-2 my-4 text-2xl font-bold">What are we trying to achieve?</h2>
                </div>
                <div className="my-4">
                    <p>Our aim is to provide a platform where anyone can learn about Near Earth Object&apos;s impact on their lives. We want to create a orrery model with live data from the NASA NEO API and provide a way to share that with others in an visual and interactive way. We also want to make it so that people can take screenshots of their views of the orrery model and share them with others. This will allow people to share their orrery experiences with others and help to spread awareness about the dangers and potentials of Near Earth Objects. The web app should be a fun and interactive way to gain knowledge of how NEO&apos;s are tracked and information about them.</p>
                </div>
                <div className="my-4">
                    <p>We want to create a fun and interactive way to learn about Near Earth Objects. We want to make it so that people can explore the orrery model and learn about the different types of Near Earth Objects. We also want to make it so that people can take screenshots of their views of the orrery model and share them with others. This will allow people to share their orrery experiences with others and help to spread awareness about the dangers of Near Earth Objects.</p>
                </div>
            </div>
        </section>
    );
};

export default HomeContent;