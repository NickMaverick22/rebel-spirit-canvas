import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import { CartProvider } from '@/contexts/CartContext';
import { UserProvider } from '@/contexts/UserContext';
import { WishlistProvider } from '@/contexts/WishlistContext';
import { Toaster } from '@/components/ui/sonner';

createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <WishlistProvider>
      <UserProvider>
        <BrowserRouter>
          <App />
          <Toaster />
        </BrowserRouter>
      </UserProvider>
    </WishlistProvider>
  </CartProvider>
);
