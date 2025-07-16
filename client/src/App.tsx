
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import WishlistPage from "./pages/WishlistPage";
import CountdownPage from "./pages/CountdownPage";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./contexts/CartContext";
import { UserProvider } from "./contexts/UserContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { queryClient } from "@/lib/queryClient";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        <WishlistProvider>
          <CartProvider>
            <Toaster />
            <Sonner />
            <Router>
              <Switch>
                <Route path="/" component={Index} />
                <Route path="/countdown" component={CountdownPage} />
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/wishlist" component={WishlistPage} />
                <Route component={NotFound} />
              </Switch>
            </Router>
          </CartProvider>
        </WishlistProvider>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
