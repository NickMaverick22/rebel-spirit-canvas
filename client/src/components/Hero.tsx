
const Hero = () => {
  return (
    <section className="relative bg-warm-gray overflow-hidden">
      {/* Collection Banner - Full Width */}
      <div className="w-full relative group">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-10"></div>
        <img 
          src="/lovable-uploads/61d5afa5-dc28-405e-9efe-1b34b9e146d9.png"
          alt="Rebellious Collection - Curated pieces for the fearless"
          className="w-full h-auto object-cover transition-sophisticated group-hover:scale-105 filter contrast-110"
        />
        {/* Elegant overlay text - optional, can be added later */}
        <div className="absolute bottom-12 left-12 z-20 opacity-0 group-hover:opacity-100 transition-sophisticated">
          <h2 className="font-playfair text-white text-2xl md:text-4xl font-medium tracking-wide drop-shadow-lg">
            Curated Collection
          </h2>
          <p className="font-inter text-white/90 text-sm md:text-base mt-2 tracking-wider">
            For the fearless & sophisticated
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
