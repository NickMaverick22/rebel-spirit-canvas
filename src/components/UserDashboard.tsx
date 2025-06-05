
import { X } from 'lucide-react';
import { useState } from 'react';
import { useUser } from '@/contexts/UserContext';
import { toast } from 'sonner';

const UserDashboard = () => {
  const { user, signIn, signUp, signOut, dashboardOpen, setDashboardOpen } = useUser();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!dashboardOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await signUp(email, password, name);
        toast.success('Account created successfully!');
      } else {
        await signIn(email, password);
        toast.success('Signed in successfully!');
      }
      setEmail('');
      setPassword('');
      setName('');
    } catch (error) {
      toast.error('Authentication failed. Please try again.');
    }
  };

  const copyReferralLink = () => {
    if (user?.referralLink) {
      navigator.clipboard.writeText(user.referralLink);
      toast.success('Referral link copied to clipboard!');
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
        onClick={() => setDashboardOpen(false)}
      />
      
      {/* Dashboard Slide-out */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="font-playfair text-2xl font-medium text-gray-900">
              {user ? 'Dashboard' : 'Account'}
            </h2>
            <button
              onClick={() => setDashboardOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {user ? (
              // Signed In View
              <div className="space-y-8">
                <div>
                  <h3 className="font-playfair text-xl font-medium text-gray-900 mb-2">
                    Welcome back, {user.name}
                  </h3>
                  <p className="font-inter text-gray-600">{user.email}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-inter font-medium text-gray-900 mb-2">
                    Rewards Points
                  </h4>
                  <p className="font-playfair text-2xl font-medium text-rebellious-red">
                    {user.points} pts
                  </p>
                </div>

                <div>
                  <h4 className="font-inter font-medium text-gray-900 mb-3">
                    Your Referral Link
                  </h4>
                  <div className="flex gap-2">
                    <input
                      value={user.referralLink}
                      readOnly
                      className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 text-sm font-inter text-gray-700"
                    />
                    <button
                      onClick={copyReferralLink}
                      className="px-4 py-2 bg-black text-white font-inter text-sm hover:bg-rebellious-red transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                  <p className="font-inter text-xs text-gray-500 mt-2">
                    Share this link to earn points when friends make purchases
                  </p>
                </div>

                <div className="space-y-3">
                  <button className="w-full text-left font-inter text-gray-700 hover:text-rebellious-red transition-colors py-2">
                    Order History
                  </button>
                  <button className="w-full text-left font-inter text-gray-700 hover:text-rebellious-red transition-colors py-2">
                    Saved Items
                  </button>
                  <button className="w-full text-left font-inter text-gray-700 hover:text-rebellious-red transition-colors py-2">
                    Account Settings
                  </button>
                </div>

                <button
                  onClick={signOut}
                  className="w-full mt-8 py-3 border border-gray-300 font-inter text-gray-700 hover:border-rebellious-red hover:text-rebellious-red transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              // Sign In/Up View
              <div>
                <div className="flex mb-6">
                  <button
                    onClick={() => setIsSignUp(false)}
                    className={`flex-1 py-2 font-inter font-medium transition-colors ${
                      !isSignUp ? 'text-rebellious-red border-b-2 border-rebellious-red' : 'text-gray-500'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setIsSignUp(true)}
                    className={`flex-1 py-2 font-inter font-medium transition-colors ${
                      isSignUp ? 'text-rebellious-red border-b-2 border-rebellious-red' : 'text-gray-500'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {isSignUp && (
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 font-inter text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rebellious-red transition-colors"
                      required
                    />
                  )}
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 font-inter text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rebellious-red transition-colors"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 font-inter text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rebellious-red transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 px-6 font-inter font-medium hover:bg-rebellious-red transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    {isSignUp ? 'Create Account' : 'Sign In'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
