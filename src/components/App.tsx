// import React, { useState, useEffect } from 'react';
// import { AppProps } from 'next/app';
// import Head from 'next/head';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useRouter } from 'next/router';

// // Mock data for products
// const products = [
//   { id: 1, name: 'Vibrant T-Shirt', price: 29.99, category: 'Clothing', image: '/placeholder.svg' },
//   { id: 2, name: 'Colorful Sneakers', price: 59.99, category: 'Footwear', image: '/placeholder.svg' },
//   { id: 3, name: 'Stylish Backpack', price: 49.99, category: 'Accessories', image: '/placeholder.svg' },
//   { id: 4, name: 'Trendy Sunglasses', price: 39.99, category: 'Accessories', image: '/placeholder.svg' },
//   { id: 5, name: 'Cozy Hoodie', price: 54.99, category: 'Clothing', image: '/placeholder.svg' },
//   { id: 6, name: 'Denim Jeans', price: 69.99, category: 'Clothing', image: '/placeholder.svg' },
// ];

// const categories = ['Clothing', 'Footwear', 'Accessories'];

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <Head>
//         <title>Vibrant eCommerce</title>
//         <meta name="description" content="Discover vibrant style with our trendy products" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </>
//   );
// }

// function Layout({ children }: { children: React.ReactNode }) {
//   const [cartItems, setCartItems] = useState<{ id: number; quantity: number }[]>([]);

//   const addToCart = (productId: number) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((item) => item.id === productId);
//       if (existingItem) {
//         return prevItems.map((item) =>
//           item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prevItems, { id: productId, quantity: 1 }];
//     });
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header cartItems={cartItems} />
//       <main className="flex-grow">{children}</main>
//       <Footer />
//     </div>
//   );
// }

// function Header({ cartItems }: { cartItems: { id: number; quantity: number }[] }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         <Link href="/" className="text-2xl font-bold text-primary">
//           VibrantShop
//         </Link>
//         <nav className="hidden md:flex space-x-4">
//           <Link href="/" className="text-gray-600 hover:text-primary">
//             Home
//           </Link>
//           <Link href="/shop" className="text-gray-600 hover:text-primary">
//             Shop
//           </Link>
//           <Link href="/about" className="text-gray-600 hover:text-primary">
//             About Us
//           </Link>
//           <Link href="/contact" className="text-gray-600 hover:text-primary">
//             Contact
//           </Link>
//         </nav>
//         <div className="flex items-center space-x-4">
//           <form className="hidden md:flex">
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//             <button
//               type="submit"
//               className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
//             >
//               Search
//             </button>
//           </form>
//           <Link href="/cart" className="text-gray-600 hover:text-primary">
//             Cart ({totalItems})
//           </Link>
//         </div>
//         <button
//           className="md:hidden text-gray-600 hover:text-primary"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           Menu
//         </button>
//       </div>
//       {isMenuOpen && (
//         <div className="md:hidden bg-white py-2">
//           <nav className="flex flex-col space-y-2 px-4">
//             <Link href="/" className="text-gray-600 hover:text-primary">
//               Home
//             </Link>
//             <Link href="/shop" className="text-gray-600 hover:text-primary">
//               Shop
//             </Link>
//             <Link href="/about" className="text-gray-600 hover:text-primary">
//               About Us
//             </Link>
//             <Link href="/contact" className="text-gray-600 hover:text-primary">
//               Contact
//             </Link>
//           </nav>
//           <form className="px-4 py-2 flex">
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//             <button
//               type="submit"
//               className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
//             >
//               Search
//             </button>
//           </form>
//         </div>
//       )}
//     </header>
//   );
// }

// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/about" className="hover:text-primary">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="hover:text-primary">
//                   Contact Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/privacy" className="hover:text-primary">
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/terms" className="hover:text-primary">
//                   Terms of Service
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a href="#" className="hover:text-primary">
//                 Facebook
//               </a>
//               <a href="#" className="hover:text-primary">
//                 Twitter
//               </a>
//               <a href="#" className="hover:text-primary">
//                 Instagram
//               </a>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
//             <form className="flex">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-grow px-4 py-2 rounded-l-md focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary-dark focus:outline-none"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//         <div className="mt-8 text-center">
//           <p>&copy; 2023 VibrantShop. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function HomePage() {
//   return (
//     <div>
//       <HeroSection />
//       <FeaturedProducts />
//       <Categories />
//       <Promotions />
//     </div>
//   );
// }

// function HeroSection() {
//   return (
//     <section className="bg-secondary py-20">
//       <div className="container mx-auto px-4 text-center">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Vibrant Style</h1>
//         <p className="text-xl mb-8">Explore our collection of trendy and colorful products</p>
//         <Link
//           href="/shop"
//           className="inline-block px-8 py-3 bg-accent text-white rounded-md hover:bg-accent-dark transition duration-300"
//         >
//           Shop Now
//         </Link>
//       </div>
//     </section>
//   );
// }

// function FeaturedProducts() {
//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {products.slice(0, 4).map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ProductCard({ product }: { product: typeof products[0] }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//       <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//         <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
//         <button className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// function Categories() {
//   return (
//     <section className="bg-gray-100 py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {categories.map((category) => (
//             <Link key={category} href={`/shop?category=${category}`} className="block">
//               <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <Image
//                   src="/placeholder.svg"
//                   alt={category}
//                   width={400}
//                   height={200}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-xl font-semibold text-center">{category}</h3>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Promotions() {
//   return (
//     <section className="bg-accent text-white py-16">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
//         <p className="text-xl mb-8">Get 20% off on all new arrivals!</p>
//         <Link
//           href="/shop"
//           className="inline-block px-8 py-3 bg-white text-accent rounded-md hover:bg-gray-100 transition duration-300"
//         >
//           Shop New Arrivals
//         </Link>
//       </div>
//     </section>
//   );
// }

// function ShopPage() {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [sortBy, setSortBy] = useState('name');

//   const filteredProducts = products.filter(
//     (product) => selectedCategory === 'All' || product.category === selectedCategory
//   );

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     if (sortBy === 'name') {
//       return a.name.localeCompare(b.name);
//     } else if (sortBy === 'price_asc') {
//       return a.price - b.price;
//     } else if (sortBy === 'price_desc') {
//       return b.price - a.price;
//     }
//     return 0;
//   });

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Shop Our Products</h1>
//       <div className="flex flex-col md:flex-row gap-8">
//         <div className="w-full md:w-1/4">
//           <h2 className="text-xl font-semibold mb-4">Categories</h2>
//           <ul className="space-y-2">
//             <li>
//               <button
//                 className={`w-full text-left py-2 px-4 rounded ${
//                   selectedCategory === 'All' ? 'bg-primary text-white' : 'hover:bg-gray-100'
//                 }`}
//                 onClick={() => setSelectedCategory('All')}
//               >
//                 All
//               </button>
//             </li>
//             {categories.map((category) => (
//               <li key={category}>
//                 <button
//                   className={`w-full text-left py-2 px-4 rounded ${
//                     selectedCategory === category ? 'bg-primary text-white' : 'hover:bg-gray-100'
//                   }`}
//                   onClick={() => setSelectedCategory(category)}
//                 >
//                   {category}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="w-full md:w-3/4">
//           <div className="flex justify-between items-center mb-4">
//             <p>{sortedProducts.length} products</p>
//             <select
//               className="border rounded px-2 py-1"
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//             >
//               <option value="name">Sort by Name</option>
//               <option value="price_asc">Sort by Price: Low to High</option>
//               <option value="price_desc">Sort by Price: High to Low</option>
//             </select>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {sortedProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ProductPage({ product }: { product: typeof products[0] }) {
//   const [quantity, setQuantity] = useState(1);

//   const handleAddToCart = () => {
//     // Implement add to cart functionality
//     console.log(`Added ${quantity} ${product.name}(s) to cart`);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col md:flex-row gap-8">
//         <div className="w-full md:w-1/2">
//           <Image
//             src={product.image}
//             alt={product.name}
//             width={600}
//             height={600}
//             className="w-full h-auto rounded-lg shadow-md"
//           />
//         </div>
//         <div className="w-full md:w-1/2">
//           <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//           <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
//           <p className="text-gray-600 mb-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
//             dolore magna aliqua.
//           </p>
//           <div className="flex items-center mb-6">
//             <label htmlFor="quantity" className="mr-4">
//               Quantity:
//             </label>
//             <input
//               type="number"
//               id="quantity"
//               min="1"
//               value={quantity}
//               onChange={(e) => setQuantity(parseInt(e.target.value))}
//               className="border rounded px-2 py-1 w-16 text-center"
//             />
//           </div>
//           <button
//             onClick={handleAddToCart}
//             className="w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold mb-4">Related Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {products
//             .filter((p) => p.id !== product.id && p.category === product.category)
//             .slice(0, 4)
//             .map((relatedProduct) => (
//               <ProductCard key={relatedProduct.id} product={relatedProduct} />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function CartPage() {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: 'Vibrant T-Shirt', price: 29.99, quantity: 2 },
//     { id: 2, name: 'Colorful Sneakers', price: 59.99, quantity: 1 },
//   ]);

//   const updateQuantity = (id: number, newQuantity: number) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
//     );
//   };

//   const removeItem = (id: number) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const tax = subtotal * 0.1; // Assuming 10% tax
//   const total = subtotal + tax;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="flex flex-col lg:flex-row gap-8">
//           <div className="w-full lg:w-2/3">
//             {cartItems.map((item) => (
//               <div key={item.id} className="flex items-center justify-between border-b py-4">
//                 <div className="flex items-center">
//                   <Image src="/placeholder.svg" alt={item.name} width={80} height={80} className="mr-4" />
//                   <div>
//                     <h3 className="font-semibold">{item.name}</h3>
//                     <p className="text-gray-600">${item.price.toFixed(2)}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <input
//                     type="number"
//                     min="1"
//                     value={item.quantity}
//                     onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
//                     className="border rounded px-2 py-1 w-16 text-center mr-4"
//                   />
//                   <button
//                     onClick={() => removeItem(item.id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="w-full lg:w-1/3">
//             <div className="bg-gray-100 rounded-lg p-6">
//               <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//               <div className="flex justify-between mb-2">
//                 <span>Subtotal</span>
//                 <span>${subtotal.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between mb-2">
//                 <span>Tax</span>
//                 <span>${tax.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between font-semibold text-lg mt-4">
//                 <span>Total</span>
//                 <span>${total.toFixed(2)}</span>
//               </div>
//               <Link
//                 href="/checkout"
//                 className="block w-full text-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300 mt-6"
//               >
//                 Proceed to Checkout
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function CheckoutPage() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     address: '',
//     city: '',
//     country: '',
//     zipCode: '',
//     cardName: '',
//     cardNumber: '',
//     expDate: '',
//     cvv: '',
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Implement form validation and submission logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Checkout</h1>
//       <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label htmlFor="firstName" className="block mb-1">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>
//             <div>
//               <label htmlFor="lastName" className="block mb-1">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>
//             <div className="md:col-span-2">
//               <label htmlFor="email" className="block mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>
//             <div className="md:col-span-2">
//               <label htmlFor="address" className="block mb-1">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>
//             <div>
//               <label htmlFor="city" className="block mb-1">
//                 City
//               </label>
//               <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>
//             <div>
//               <label htmlFor="country" className="block mb-1">
//                 Country
//               </label>
//               <input
//                 type="text"
//                 id="country"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>
//             <div>
//               <label htmlFor="zipCode" className="block mb-1">
//                 ZIP Code
//               </label>
//               <input
//                 type="text"
//                 id="zipCode"
//                 name="zipCode"
//                 value={formData.zipCode}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="md:col-span-2">
//               <label htmlFor="cardName" className="block mb-1">
//                 Name on Card
//               </label>
//               <input
//                 type="text"
//                 id="cardName"
//                 name="cardName"
//                 value={formData.cardName}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>
//             <div className="md:col-span-2">
//               <label htmlFor="cardNumber" className="block mb-1">
//                 Card Number
//               </label>
//               <input
//                 type="text"
//                 id="cardNumber"
//                 name="cardNumber"
//                 value={formData.cardNumber}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>
//             <div>
//               <label htmlFor="expDate" className="block mb-1">
//                 Expiration Date
//               </label>
//               <input
//                 type="text"
//                 id="expDate"
//                 name="expDate"
//                 value={formData.expDate}
//                 onChange={handleInputChange}
//                 required
//                 placeholder="MM/YY"
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>
//             <div>
//               <label htmlFor="cvv" className="block mb-1">
//                 CVV
//               </label>
//               <input
//                 type="text"
//                 id="cvv"
//                 name="cvv"
//                 value={formData.cvv}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full border rounded px-3 py-2"
//               />
//             </div>
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300"
//         >
//           Place Order
//         </button>
//       </form>
//     </div>
//   );
// }

// export default function Component() {
//   const router = useRouter();
//   const { pathname } = router;

//   return (
//     <div className="min-h-screen flex flex-col">
//       {pathname === '/' && <HomePage />}
//       {pathname === '/shop' && <ShopPage />}
//       {pathname.startsWith('/product/') && <ProductPage product={products[0]} />}
//       {pathname === '/cart' && <CartPage />}
//       {pathname === '/checkout' && <CheckoutPage />}
//     </div>
//   );
// }