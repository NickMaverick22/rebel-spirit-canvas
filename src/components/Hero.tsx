
const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Collection Banner */}
      <div className="w-full">
        <img 
          src="/lovable-uploads/61d5afa5-dc28-405e-9efe-1b34b9e146d9.png"
          alt="Rebellious Collection - Curated pieces for the fearless"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-8 tracking-tight">
            Fashion that
            <span className="block font-medium text-rebellious-red">
              defies convention
            </span>
          </h1>
          
          <p className="font-inter text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Each piece tells a story of rebellion. Meticulously crafted for those who dare to stand apart.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-8 py-4 bg-black text-white font-inter font-medium text-lg transition-all duration-500 hover:bg-rebellious-red transform hover:scale-105 hover:shadow-xl">
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                Explore Collection
              </span>
            </button>
            
            <button className="px-8 py-4 border border-gray-900 text-gray-900 font-inter font-medium text-lg transition-all duration-500 hover:border-rebellious-red hover:text-rebellious-red transform hover:scale-105">
              Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-px h-32 bg-gray-200 transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-px h-32 bg-gray-200 transform -translate-y-1/2"></div>
    </section>
  );
};

export default Hero;
