import heroImage from '@/public/image/hero.jpg';
const HeroSection = () => {
  return (
    <div
      className="hero h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20">
        <div className="flex justify-center text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold bg-secondary text-white">Welcome to VAMK&apos;d Space Apps Hackathon Web App!</h1>
            <p className="py-6">
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;