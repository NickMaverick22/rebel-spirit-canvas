
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

const CountdownPage = () => {
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Mock countdown to next drop (7 days from now)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In real app, this would save to Supabase emails table
      console.log('Email signup:', email, 'source: countdown_page');
      toast.success('You\'ll be the first to know when the next drop goes live!');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-16">
          <img 
            src="/lovable-uploads/c690406b-488b-44a7-bb45-c70060a14e7f.png" 
            alt="Rebellious Spirits" 
            className="h-12 w-auto mx-auto opacity-90 brightness-0 invert"
          />
        </div>

        {/* Countdown */}
        <div className="mb-16">
          <h1 className="font-playfair text-4xl md:text-6xl font-light text-white mb-8 tracking-wide">
            NEXT DROP INCOMING
          </h1>
          
          <div className="grid grid-cols-4 gap-4 md:gap-8 mb-8">
            {[
              { value: timeLeft.days, label: 'DAYS' },
              { value: timeLeft.hours, label: 'HOURS' },
              { value: timeLeft.minutes, label: 'MINUTES' },
              { value: timeLeft.seconds, label: 'SECONDS' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 md:p-6 mb-2">
                  <span className="font-inter text-2xl md:text-4xl font-light text-white">
                    {item.value.toString().padStart(2, '0')}
                  </span>
                </div>
                <span className="font-inter text-xs md:text-sm text-gray-300 tracking-wider">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Email Signup */}
        <div className="max-w-md mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-light text-white mb-8">
            Be First to Know
          </h2>
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Drop your email to be notified"
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-inter text-white placeholder-gray-300 focus:outline-none focus:border-rebellious-red transition-colors duration-300"
              required
            />
            <button
              type="submit"
              className="w-full py-4 bg-white text-black font-inter font-medium hover:bg-rebellious-red hover:text-white transition-all duration-300 transform hover:scale-[1.02] rounded-lg"
            >
              NOTIFY ME
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;
