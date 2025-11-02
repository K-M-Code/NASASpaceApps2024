const HomeContent = () => {
    return (
        <section className="container mx-auto bg-primary rounded-xl">
            <div className="flex flex-col justify-center px-4 ">
                <div className="mx-auto">
                    <h2 className="text-black border-b-8 border-tertiary pb-2 my-4 text-2xl font-bold">What are we trying to achieve?</h2>
                </div>
                <div className="my-4">
                    <p>We aim to provide a platform where anyone can learn about the impact of Near Earth objects on their lives. We want to create an orrery model with live data from the NASA NEO API and provide a way to share that with others visually and interactively. We also want to make it so that people can take screenshots of their views of the orrery model and share them with others or use them as wallpapers. This will allow people to share their orrery experiences with others and help spread awareness about Near Earth Objects dangers and potentials. The web app should be a fun and interactive way to gain knowledge of how NEOs are tracked and information about them.</p>
                </div>
                <div className="my-4">
                    <p>We also aim to integrate the site with a AI ChatBot using a retrieval augmented generated based system which can be fed with various public domain knowledge base which people can ask their questions in natural language. We plan to use open-source solutions like Flowise or DiFY to create the ChatBot. The knowledge base will be from academic sources like NASA, ESA etc and will be powered by OpenAI or other AI providers.</p>
                </div>
                <div className="my-4">
                    <p>We also want to create a game system so that people can learn in a gamified manner. It would be a game applying the knowledge from the orrery model and having an open-world theme where people are free to explore the solar system. It can have various gameplay modes like Campaign, Sandbox, and Multiplayer. The game would be fun and educational. It would help people understand the need to study and research the NEOs.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HomeContent;