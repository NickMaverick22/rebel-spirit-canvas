
import { Link } from 'react-router-dom';
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
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block animate-fade-in"
            >
              <div className="bg-white shadow-editorial hover:shadow-hover transition-all duration-500 transform hover:-translate-y-1">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <WishlistButton product={product} size="md" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-medium text-gray-900 mb-2 group-hover:text-rebellious-red transition-colors duration-300">
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
