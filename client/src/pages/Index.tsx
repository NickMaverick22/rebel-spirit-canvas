
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
import UserDashboard from '@/components/UserDashboard';
import CountdownPage from './CountdownPage';

const Index = () => {
  const [isDropActive, setIsDropActive] = useState(true); // Mock drop state

  useEffect(() => {
    window.scrollTo(0, 0);
    // In real app, this would check Supabase drops table for is_active
    console.log('Checking drop status...');
  }, []);

  // Show countdown page when drop is not active
  if (!isDropActive) {
    return <CountdownPage />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductGrid />
      <Footer />
      <Cart />
      <UserDashboard />
    </div>
  );
};

export default Index;
