
import { useEffect, useState } from 'react';
import { useParams, Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Cart from '@/components/Cart';
import UserDashboard from '@/components/UserDashboard';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import StarRating from '@/components/StarRating';
import WishlistButton from '@/components/WishlistButton';

const products = [
  {
    id: '1',
    name: 'Shadow Blazer',
    price: 495,
    images: [
      '/lovable-uploads/bbca1e35-ddbf-4cb8-822b-cd37a7d34455.png',
      '/lovable-uploads/bbca1e35-ddbf-4cb8-822b-cd37a7d34455.png',
      '/lovable-uploads/bbca1e35-ddbf-4cb8-822b-cd37a7d34455.png'
    ],
    materials: 'Premium wool blend with structured shoulders',
    description: 'A statement blazer that commands attention. Crafted with precision tailoring and rebellious spirit.',
    measurements: {
      chest: '42"',
      length: '28"',
      shoulder: '18"'
    }
  }
];

const ProductPage = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [productRating] = useState(4.3);
  const [totalReviews] = useState(127);
  
  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  const sizes = ['S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.images[0]
    });

    toast.success('Added to cart!');
  };

  const handleRating = (rating: number) => {
    toast.success(`Thank you for rating this product ${rating} stars!`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-rebellious-red transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} />
          <span className="font-inter">Back to Collection</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[3/4] bg-gray-50 overflow-hidden shadow-editorial">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-50 overflow-hidden transition-opacity duration-300 ${
                    selectedImage === index ? 'ring-2 ring-rebellious-red' : 'hover:opacity-80'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
              
              {/* Size Guide Placeholder */}
              <div className="aspect-square bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer hover:border-rebellious-red transition-colors">
                <span className="font-inter text-xs text-gray-500 text-center px-2">
                  Size Guide
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-start justify-between mb-4">
                <h1 className="font-playfair text-4xl md:text-5xl font-medium text-gray-900">
                  {product.name}
                </h1>
                <WishlistButton 
                  product={{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.images[0]
                  }} 
                  size="lg" 
                />
              </div>
              <p className="font-inter text-2xl text-gray-900 mb-4">
                ${product.price}
              </p>
              <div className="mb-6">
                <StarRating 
                  rating={productRating} 
                  totalReviews={totalReviews}
                  onRate={handleRating}
                />
              </div>
              <p className="font-inter text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="font-inter font-medium text-gray-900 mb-3">Materials</h3>
              <p className="font-inter text-gray-600">{product.materials}</p>
            </div>

            <div>
              <h3 className="font-inter font-medium text-gray-900 mb-3">Measurements (M)</h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-inter text-gray-500">Chest</span>
                  <p className="font-inter font-medium">{product.measurements.chest}</p>
                </div>
                <div>
                  <span className="font-inter text-gray-500">Length</span>
                  <p className="font-inter font-medium">{product.measurements.length}</p>
                </div>
                <div>
                  <span className="font-inter text-gray-500">Shoulder</span>
                  <p className="font-inter font-medium">{product.measurements.shoulder}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-inter font-medium text-gray-900 mb-4">Size</h3>
              <div className="grid grid-cols-4 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border font-inter font-medium transition-all duration-300 ${
                      selectedSize === size
                        ? 'border-rebellious-red bg-rebellious-red text-white'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className={`w-full py-4 px-8 font-inter font-medium transition-all duration-300 transform ${
                selectedSize
                  ? 'bg-black text-white hover:bg-rebellious-red hover:scale-[1.02]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {selectedSize ? 'Add to Cart' : 'Choose Size'}
            </button>
          </div>
        </div>
      </div>

      <Cart />
      <UserDashboard />
    </div>
  );
};

export default ProductPage;
