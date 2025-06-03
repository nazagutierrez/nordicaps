import { Product } from '../../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Alpine Cap',
    price: 39.99,
    imageUrl: 'https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=600',
    colors: ['Black', 'Grey', 'Navy'],
    isNew: true,
    description: 'Classic Nordic-inspired cap with embroidered mountain design.',
    category: 'Outdoor'
  },
  {
    id: '2',
    name: 'Fjord Beanie',
    price: 34.99,
    imageUrl: 'https://images.pexels.com/photos/1070058/pexels-photo-1070058.jpeg?auto=compress&cs=tinysrgb&w=600',
    colors: ['Charcoal', 'Forest Green', 'Burgundy'],
    isBestseller: true,
    description: 'Warm knitted beanie perfect for cold Nordic winters.',
    category: 'Winter'
  },
  {
    id: '3',
    name: 'Oslo Snapback',
    price: 45.99,
    imageUrl: 'https://images.pexels.com/photos/1493112/pexels-photo-1493112.jpeg?auto=compress&cs=tinysrgb&w=600',
    colors: ['Grey', 'Black', 'White'],
    description: 'Urban snapback with minimalist Nordic design elements.',
    category: 'Urban'
  },
  {
    id: '4',
    name: 'Tundra Trapper',
    price: 59.99,
    imageUrl: 'https://images.pexels.com/photos/1687719/pexels-photo-1687719.jpeg?auto=compress&cs=tinysrgb&w=600',
    colors: ['Black', 'Brown'],
    isNew: true,
    description: 'Insulated trapper hat with faux fur lining for extreme cold.',
    category: 'Winter'
  },
  {
    id: '5',
    name: 'Stockholm Flat Cap',
    price: 42.99,
    imageUrl: 'https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=600',
    colors: ['Navy', 'Brown', 'Grey'],
    isBestseller: true,
    description: 'Classic flat cap with modern Nordic twists in design.',
    category: 'Casual'
  },
  {
    id: '6',
    name: 'Bergen Bucket Hat',
    price: 38.99,
    imageUrl: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600',
    colors: ['Black', 'White', 'Beige'],
    description: 'Stylish bucket hat inspired by coastal Norwegian aesthetics.',
    category: 'Summer'
  },
  {
    id: '7',
    name: 'Midnight Sun Cap',
    price: 44.99,
    imageUrl: 'https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=600',
    colors: ['Navy', 'Black', 'Grey'],
    isNew: true,
    description: 'Baseball cap with unique midnight sun embroidery.',
    category: 'Casual'
  },
  {
    id: '8',
    name: 'Aurora Beanie',
    price: 36.99,
    imageUrl: 'https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg?auto=compress&cs=tinysrgb&w=600',
    colors: ['Green', 'Blue', 'Purple'],
    description: 'Colorful knitted beanie inspired by the Northern Lights.',
    category: 'Winter'
  }
];