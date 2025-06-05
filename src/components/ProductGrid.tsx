
import { Link } from 'react-router-dom';

const products = [
  {
    id: '1',
    name: 'Shadow Blazer',
    price: 495,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=1200&fit=crop'
  },
  {
    id: '2',
    name: 'Midnight Leather Jacket',
    price: 695,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1200&fit=crop'
  },
  {
    id: '3',
    name: 'Rebel Trousers',
    price: 345,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=1200&fit=crop'
  },
  {
    id: '4',
    name: 'Genesis Coat',
    price: 795,
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=1200&fit=crop'
  },
  {
    id: '5',
    name: 'Statement Boots',
    price: 550,
    image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=1200&fit=crop'
  },
  {
    id: '6',
    name: 'Minimalist Dress',
    price: 425,
    image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=800&h=1200&fit=crop'
  }
];

const ProductGrid = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block animate-fade-in"
            >
              <div className="bg-white shadow-editorial hover:shadow-hover transition-all duration-500 transform hover:-translate-y-1">
                <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-playfair text-xl md:text-2xl font-medium text-gray-900 mb-2 group-hover:text-rebellious-red transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="font-inter text-lg text-gray-600">
                    ${product.price}
                  </p>
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
