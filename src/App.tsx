
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import CountdownPage from "./pages/CountdownPage";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./contexts/CartContext";
import { UserProvider } from "./contexts/UserContext";
import { WishlistProvider } from "./contexts/WishlistContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        <WishlistProvider>
          <CartProvider>
            <Toaster />
            <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/countdown" element={<CountdownPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </BrowserRouter>
          </CartProvider>
        </WishlistProvider>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
