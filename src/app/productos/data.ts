import { Product } from "../types/product";
import gorraBeige1Img1 from '@/assets/gorras/gorra-beige-1-v1.webp';
import gorraBeige1Img2 from '@/assets/gorras/gorra-beige-1-v2.webp';
import gorraBeige2Img1 from '@/assets/gorras/gorra-beige-2.webp';
import gorraBeige3Img1 from '@/assets/gorras/gorra-beige-3.webp';
import gorraBeige4Img1 from '@/assets/gorras/gorra-beige-4.webp';
import gorraNegra1Img1 from '@/assets/gorras/gorra-negra-1-v1.webp';
import gorraNegra1Img2 from '@/assets/gorras/gorra-negra-1-v2.webp';
import gorraNegra1Img3 from '@/assets/gorras/gorra-negra-1-v3.webp';
import gorraNegra2Img1 from '@/assets/gorras/gorra-negra-2-v1.webp';
import gorraNegra2Img2 from '@/assets/gorras/gorra-negra-2-v2.webp';
import gorraNegra3Img1 from '@/assets/gorras/gorra-negra-3.webp';
import gorraNegra4Img1 from '@/assets/gorras/gorra-negra-4.webp';
import gorraNegra5Img1 from '@/assets/gorras/gorra-negra-5.webp';
import gorraNegra6Img1 from '@/assets/gorras/gorra-negra-6.webp';
import gorraRosa1Img1 from '@/assets/gorras/gorra-rosa-1.webp';
import gorraRosa2Img1 from '@/assets/gorras/gorra-rosa-2-v1.webp';
import gorraRosa2Img2 from '@/assets/gorras/gorra-rosa-2-v2.webp';
import gorraRosa3Img1 from '@/assets/gorras/gorra-rosa-3-v1.webp';
import gorraRosa3Img2 from '@/assets/gorras/gorra-rosa-3.webp';
import gorroBlanco1Img1 from '@/assets/gorros/gorro-blanco-1-v1.webp';
import gorroNaranja1Img1 from '@/assets/gorros/gorro-naranja-1.webp';
import gorroNaranja2Img1 from '@/assets/gorros/gorro-naranja-2-v1.webp';
import gorroNaranja2Img2 from '@/assets/gorros/gorro-naranja-2-v2.webp';
import gorroNegro1Img1 from '@/assets/gorros/gorro-negro-1.webp';
import gorroNegroImg1 from '@/assets/gorros/gorro-negro-v1.webp';
import pilusoAmarillo1Img1 from '@/assets/pilusos/piluso-amarillo-1.webp';
import pilusoMarron1Img1 from '@/assets/pilusos/piluso-marron-1-v1.webp';
import pilusoMarron1Img2 from '@/assets/pilusos/piluso-marron-1-v2.webp';
import pilusoNegro1Img1 from '@/assets/pilusos/piluso-negro-1.webp';
import pilusoRojo1Img1 from '@/assets/pilusos/piluso-rojo-1.webp';

export const products: Product[] = [
  {
    id: '1',
    name: 'Gorra Beige 1',
    price: 25.99,
    imageUrl: gorraBeige1Img1.src,
    images: [gorraBeige1Img1.src, gorraBeige1Img2.src],
    colors: ['Beige'],
    isNew: false,
    isBestseller: false,
    description: 'Excelente gorra beige 1 de alta calidad con un estilo único.',
    category: 'Gorras'
  },
  {
    id: '2',
    name: 'Gorra Beige 2',
    price: 25.99,
    imageUrl: gorraBeige2Img1.src,
    images: [gorraBeige2Img1.src],
    colors: ['Beige'],
    isNew: false,
    isBestseller: false,
    description: 'Excelente gorra beige 2 de alta calidad con un estilo único.',
    category: 'Gorras'
  },
  {
    id: '3',
    name: 'Gorra Beige 3',
    price: 25.99,
    imageUrl: gorraBeige3Img1.src,
    images: [gorraBeige3Img1.src],
    colors: ['Beige'],
    isNew: false,
    isBestseller: true,
    description: 'Excelente gorra beige 3 de alta calidad con un estilo único.',
    category: 'Gorras'
  },
  {
    id: '4',
    name: 'Gorra Beige 4',
    price: 25.99,
    imageUrl: gorraBeige4Img1.src,
    images: [gorraBeige4Img1.src],
    colors: ['Beige'],
    isNew: true,
    isBestseller: false,
    description: 'Excelente gorra beige 4 de alta calidad con un estilo único.',
    category: 'Gorras'
  },
  {
    id: '5',
    name: 'Gorra Negra 1',
    price: 25.99,
    imageUrl: gorraNegra1Img1.src,
    images: [gorraNegra1Img1.src, gorraNegra1Img2.src, gorraNegra1Img3.src],
    colors: ['Negra'],
    isNew: false,
    isBestseller: false,
    description: 'Excelente gorra negra 1 de alta calidad con un estilo único.',
    category: 'Gorras'
  },
  {
    id: '6',
    name: 'Gorra Negra 2',
    price: 25.99,
    imageUrl: gorraNegra2Img1.src,
    images: [gorraNegra2Img1.src, gorraNegra2Img2.src],
    colors: ['Negra'],
    isNew: false,
    isBestseller: true,
    description: 'Excelente gorra negra 2 de alta calidad con un estilo único.',
    category: 'Gorras'
  },
  {
    id: '7',
    name: 'Gorra Negra 3',
    price: 25.99,
    imageUrl: gorraNegra3Img1.src,
    images: [gorraNegra3Img1.src],
    colors: ['Negra'],
    isNew: false,
    isBestseller: false,
    description: 'Excelente gorra negra 3 de alta calidad con un estilo único.',
    category: 'Gorras'
  },
  {
    id: '8',
    name: 'Gorra Negra 4',
    price: 25.99,
    imageUrl: gorraNegra4Img1.src,
    images: [gorraNegra4Img1.src],
    colors: ['Negra'],
    isNew: true,
    isBestseller: false,
    description: 'Excelente gorra negra 4 de alta calidad con un estilo único.',
    category: 'Gorras'
  },
  {
    id: '9',
    name: 'Gorra Negra 5',
    price: 25.99,
    imageUrl: gorraNegra5Img1.src,
    images: [gorraNegra5Img1.src],
    colors: ['Negra'],
    isNew: false,
    isBestseller: true,
    description: 'Excelente gorra negra 5 de alta calidad con un estilo único.',
    category: 'Gorras'
  },
  {
    id: '10',
    name: 'Gorra Negra 6',
    price: 25.99,
    imageUrl: gorraNegra6Img1.src,
    images: [gorraNegra6Img1.src],
    colors: ['Negra'],
    isNew: false,
    isBestseller: false,
    description: 'Excelente gorra negra 6 de alta calidad con un estilo único.',
    category: 'Gorras'
  },
  {
    id: '11',
    name: 'Gorra Rosa 1',
    price: 25.99,
    imageUrl: gorraRosa1Img1.src,
    images: [gorraRosa1Img1.src],
    colors: ['Rosa'],
    isNew: false,
    isBestseller: false,
    description: 'Excelente gorra rosa 1 de alta calidad con un estilo único.',
    category: 'Gorras'
  },
  {
    id: '12',
    name: 'Gorra Rosa 2',
    price: 25.99,
    imageUrl: gorraRosa2Img1.src,
    images: [gorraRosa2Img1.src, gorraRosa2Img2.src],
    colors: ['Rosa'],
    isNew: true,
    isBestseller: true,
    description: 'Excelente gorra rosa 2 de alta calidad con un estilo único.',
    category: 'Gorras'
  },
  {
    id: '13',
    name: 'Gorra Rosa 3',
    price: 25.99,
    imageUrl: gorraRosa3Img1.src,
    images: [gorraRosa3Img1.src, gorraRosa3Img2.src],
    colors: ['Rosa'],
    isNew: false,
    isBestseller: false,
    description: 'Excelente gorra rosa 3 de alta calidad con un estilo único.',
    category: 'Gorras'
  },
  {
    id: '14',
    name: 'Gorro Blanco 1',
    price: 19.99,
    imageUrl: gorroBlanco1Img1.src,
    images: [gorroBlanco1Img1.src],
    colors: ['Blanco'],
    isNew: false,
    isBestseller: false,
    description: 'Excelente gorro blanco 1 de alta calidad con un estilo único.',
    category: 'Gorros'
  },
  {
    id: '15',
    name: 'Gorro Naranja 1',
    price: 19.99,
    imageUrl: gorroNaranja1Img1.src,
    images: [gorroNaranja1Img1.src],
    colors: ['Naranja'],
    isNew: false,
    isBestseller: true,
    description: 'Excelente gorro naranja 1 de alta calidad con un estilo único.',
    category: 'Gorros'
  },
  {
    id: '16',
    name: 'Gorro Naranja 2',
    price: 19.99,
    imageUrl: gorroNaranja2Img1.src,
    images: [gorroNaranja2Img1.src, gorroNaranja2Img2.src],
    colors: ['Naranja'],
    isNew: true,
    isBestseller: false,
    description: 'Excelente gorro naranja 2 de alta calidad con un estilo único.',
    category: 'Gorros'
  },
  {
    id: '18',
    name: 'Gorro Negro',
    price: 19.99,
    imageUrl: gorroNegroImg1.src,
    images: [gorroNegro1Img1.src, gorroNegroImg1.src],
    colors: ['Negro'],
    isNew: false,
    isBestseller: true,
    description: 'Excelente gorro negro de alta calidad con un estilo único.',
    category: 'Gorros'
  },
  {
    id: '19',
    name: 'Piluso Amarillo 1',
    price: 22.99,
    imageUrl: pilusoAmarillo1Img1.src,
    images: [pilusoAmarillo1Img1.src],
    colors: ['Amarillo'],
    isNew: false,
    isBestseller: false,
    description: 'Excelente piluso amarillo 1 de alta calidad con un estilo único.',
    category: 'Pilusos'
  },
  {
    id: '20',
    name: 'Piluso Marron 1',
    price: 22.99,
    imageUrl: pilusoMarron1Img1.src,
    images: [pilusoMarron1Img1.src, pilusoMarron1Img2.src],
    colors: ['Marron'],
    isNew: true,
    isBestseller: false,
    description: 'Excelente piluso marron 1 de alta calidad con un estilo único.',
    category: 'Pilusos'
  },
  {
    id: '21',
    name: 'Piluso Negro 1',
    price: 22.99,
    imageUrl: pilusoNegro1Img1.src,
    images: [pilusoNegro1Img1.src],
    colors: ['Negro'],
    isNew: false,
    isBestseller: true,
    description: 'Excelente piluso negro 1 de alta calidad con un estilo único.',
    category: 'Pilusos'
  },
  {
    id: '22',
    name: 'Piluso Rojo 1',
    price: 22.99,
    imageUrl: pilusoRojo1Img1.src,
    images: [pilusoRojo1Img1.src],
    colors: ['Rojo'],
    isNew: false,
    isBestseller: false,
    description: 'Excelente piluso rojo 1 de alta calidad con un estilo único.',
    category: 'Pilusos'
  },
];
