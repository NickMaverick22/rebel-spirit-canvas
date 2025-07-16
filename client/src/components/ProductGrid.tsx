
import { Link } from 'wouter';
import WishlistButton from './WishlistButton';

const products = [
  {
    id: '1',
    name: 'Shadow Blazer',
    price: 495,
    image: '/lovable-uploads/bbca1e35-ddbf-4cb8-822b-cd37a7d34455.png'
  },
  {
    id: '2',
    name: 'Midnight Leather Jacket',
    price: 695,
    image: '/lovable-uploads/a267ed2f-f3da-4c14-a71d-60f7569f1a94.png'
  },
  {
    id: '3',
    name: 'Rebel Trousers',
    price: 345,
    image: '/lovable-uploads/86035809-6419-4e45-ae49-45e3ca0c068e.png'
  },
  {
    id: '4',
    name: 'Genesis Coat',
    price: 795,
    image: '/lovable-uploads/18427915-1293-4f5d-9716-6ad58cdbcf13.png'
  },
  {
    id: '5',
    name: 'Statement Boots',
    price: 550,
    image: '/lovable-uploads/54274b88-62d4-4d59-ac4f-3fad86db6e25.png'
  },
  {
    id: '6',
    name: 'Minimalist Dress',
    price: 425,
    image: '/lovable-uploads/b46483f3-966a-47c2-890d-5961256a06d1.png'
  },
  {
    id: '7',
    name: 'Rebel Sneakers',
    price: 295,
    image: '/lovable-uploads/d8edef61-2a31-4b77-842f-dba6764120b9.png'
  }
];

const ProductGrid = () => {
  return (
    <section className="bg-warm-gray py-16 md:py-24">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal mb-4 tracking-wide">
            The Collection
          </h2>
          <div className="w-24 h-px bg-rebellious-red mx-auto mb-6"></div>
          <p className="font-inter text-cool-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Carefully curated pieces that embody sophistication and rebellion. 
            Each item tells a story of craftsmanship and bold expression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white shadow-editorial hover:shadow-luxury transition-sophisticated transform hover:-translate-y-2 rounded-lg overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden bg-cool-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-sophisticated group-hover:scale-110 filter brightness-100 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-sophisticated"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-sophisticated">
                    <WishlistButton product={product} size="md" />
                  </div>
                  {/* Product overlay on hover */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-sophisticated">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-charcoal px-3 py-1 text-xs font-inter font-medium rounded-full">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-playfair text-xl lg:text-2xl font-medium text-charcoal mb-3 group-hover:text-rebellious-red transition-sophisticated leading-tight">
                    {product.name}
                  </h3>
                  <p className="font-inter text-lg text-cool-gray-700 font-medium">
                    ${product.price.toLocaleString()}
                  </p>
                  <div className="mt-4 pt-4 border-t border-cool-gray-100">
                    <span className="font-inter text-xs text-cool-gray-500 uppercase tracking-wider">
                      Limited Edition
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
