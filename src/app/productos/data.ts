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
    name: 'Gorra Classic Beige',
    price: 15000,
    imageUrl: gorraBeige1Img1.src,
    images: [gorraBeige1Img1.src, gorraBeige1Img2.src],
    colors: ['Beige'],
    isNew: false,
    isBestseller: false,
    description: 'Diseño atemporal de 6 paneles con correa ajustable. Ideal para uso diario y un look relajado.',
    category: 'Gorras'
  },
  {
    id: '2',
    name: 'Gorra Vintage Sand',
    price: 16500,
    imageUrl: gorraBeige2Img1.src,
    images: [gorraBeige2Img1.src],
    colors: ['Beige'],
    isNew: false,
    isBestseller: false,
    description: 'Gorra estilo vintage con acabado desgastado. Perfecta para un outfit casual con mucha onda.',
    category: 'Gorras'
  },
  {
    id: '3',
    name: 'Gorra Urban Camel',
    price: 19000,
    imageUrl: gorraBeige3Img1.src,
    images: [gorraBeige3Img1.src],
    colors: ['Beige'],
    isNew: false,
    isBestseller: true,
    description: 'Modelo estructurado con visera curva. Combina fácilmente con cualquier prenda urbana.',
    category: 'Gorras'
  },
  {
    id: '4',
    name: 'Gorra Minimalista Arena',
    price: 14350,
    imageUrl: gorraBeige4Img1.src,
    images: [gorraBeige4Img1.src],
    colors: ['Beige'],
    isNew: true,
    isBestseller: false,
    description: 'Diseño limpio y sin logos. Confeccionada en algodón premium súper transpirable.',
    category: 'Gorras'
  },
  {
    id: '5',
    name: 'Gorra Trucker Midnight',
    price: 13000,
    imageUrl: gorraNegra1Img1.src,
    images: [gorraNegra1Img1.src, gorraNegra1Img2.src, gorraNegra1Img3.src],
    colors: ['Negra'],
    isNew: false,
    isBestseller: false,
    description: 'Estilo trucker con malla trasera para mayor frescura en días cálidos y ajuste snapback.',
    category: 'Gorras'
  },
  {
    id: '6',
    name: 'Gorra Essential Black',
    price: 18200,
    imageUrl: gorraNegra2Img1.src,
    images: [gorraNegra2Img1.src, gorraNegra2Img2.src],
    colors: ['Negra'],
    isNew: false,
    isBestseller: true,
    description: 'Nuestra gorra más versátil. Completamente negra, elegante y adaptable a todo estilo.',
    category: 'Gorras'
  },
  {
    id: '7',
    name: 'Gorra Shadow Pro',
    price: 15500,
    imageUrl: gorraNegra3Img1.src,
    images: [gorraNegra3Img1.src],
    colors: ['Negra'],
    isNew: false,
    isBestseller: false,
    description: 'Material resistente al agua con diseño deportivo. Ajuste ergonómico para mayor comodidad.',
    category: 'Gorras'
  },
  {
    id: '8',
    name: 'Gorra Streetwear Obsidian',
    price: 19450,
    imageUrl: gorraNegra4Img1.src,
    images: [gorraNegra4Img1.src],
    colors: ['Negra'],
    isNew: true,
    isBestseller: false,
    description: 'Gorra de 5 paneles inspirada en la moda urbana contemporánea y la cultura skater.',
    category: 'Gorras'
  },
  {
    id: '9',
    name: 'Gorra Classic Noir',
    price: 17200,
    imageUrl: gorraNegra5Img1.src,
    images: [gorraNegra5Img1.src],
    colors: ['Negra'],
    isNew: false,
    isBestseller: true,
    description: 'Estructura rígida y corona alta para un look moderno que nunca pasa desapercibido.',
    category: 'Gorras'
  },
  {
    id: '10',
    name: 'Gorra Retro Black',
    price: 15900,
    imageUrl: gorraNegra6Img1.src,
    images: [gorraNegra6Img1.src],
    colors: ['Negra'],
    isNew: false,
    isBestseller: false,
    description: 'Visera semi-plana y detalles estilo retro. Una pieza infaltable en tu colección.',
    category: 'Gorras'
  },
  {
    id: '11',
    name: 'Gorra Pink Blush',
    price: 20999,
    imageUrl: gorraRosa1Img1.src,
    images: [gorraRosa1Img1.src],
    colors: ['Rosa'],
    isNew: false,
    isBestseller: false,
    description: 'Tono rosa pastel con acabado súper suave. Ligera, delicada y cómoda para el día a día.',
    category: 'Gorras'
  },
  {
    id: '12',
    name: 'Gorra Sport Rose',
    price: 14000,
    imageUrl: gorraRosa2Img1.src,
    images: [gorraRosa2Img1.src, gorraRosa2Img2.src],
    colors: ['Rosa'],
    isNew: true,
    isBestseller: true,
    description: 'Ajuste dinámico y tela de secado rápido. La aliada perfecta para actividades al aire libre.',
    category: 'Gorras'
  },
  {
    id: '13',
    name: 'Gorra Cotton Magenta',
    price: 16500,
    imageUrl: gorraRosa3Img1.src,
    images: [gorraRosa3Img1.src, gorraRosa3Img2.src],
    colors: ['Rosa'],
    isNew: false,
    isBestseller: false,
    description: '100% algodón premium con un vibrante tono rosa que resalta y le da vida a tu outfit.',
    category: 'Gorras'
  },
  {
    id: '14',
    name: 'Gorro Beanie Snow',
    price: 13000,
    imageUrl: gorroBlanco1Img1.src,
    images: [gorroBlanco1Img1.src],
    colors: ['Blanco'],
    isNew: false,
    isBestseller: false,
    description: 'Gorro tejido de invierno en color blanco puro. Mantiene el calor sin perder el estilo.',
    category: 'Gorros'
  },
  {
    id: '15',
    name: 'Gorro Sunset Knit',
    price: 12000,
    imageUrl: gorroNaranja1Img1.src,
    images: [gorroNaranja1Img1.src],
    colors: ['Naranja'],
    isNew: false,
    isBestseller: true,
    description: 'Color naranja vibrante para destacar en los días fríos. Tejido ultra suave y elástico.',
    category: 'Gorros'
  },
  {
    id: '16',
    name: 'Gorro Fisherman Orange',
    price: 15500,
    imageUrl: gorroNaranja2Img1.src,
    images: [gorroNaranja2Img1.src, gorroNaranja2Img2.src],
    colors: ['bordo'],
    isNew: true,
    isBestseller: false,
    description: 'Estilo pescador con doblez grueso. Aporta un toque de color y personalidad a tu look.',
    category: 'Gorros'
  },
  {
    id: '18',
    name: 'Gorro Essential Beanie',
    price: 13000,
    imageUrl: gorroNegroImg1.src,
    images: [gorroNegro1Img1.src, gorroNegroImg1.src],
    colors: ['Negro'],
    isNew: false,
    isBestseller: true,
    description: 'El clásico gorro de lana negro. Un básico atemporal que combina absolutamente con todo.',
    category: 'Gorros'
  },
  {
    id: '19',
    name: 'Piluso Sunny Days',
    price: 15000,
    imageUrl: pilusoAmarillo1Img1.src,
    images: [pilusoAmarillo1Img1.src],
    colors: ['Amarillo'],
    isNew: false,
    isBestseller: false,
    description: 'Bucket hat en tono amarillo brillante, ideal para protegerte del sol con mucha onda.',
    category: 'Pilusos'
  },
  {
    id: '20',
    name: 'Piluso Earth Explorer',
    price: 17500,
    imageUrl: pilusoMarron1Img1.src,
    images: [pilusoMarron1Img1.src, pilusoMarron1Img2.src],
    colors: ['Marron'],
    isNew: true,
    isBestseller: false,
    description: 'Tono tierra neutro, confeccionado en lona súper resistente para tus aventuras al aire libre.',
    category: 'Pilusos'
  },
  {
    id: '21',
    name: 'Piluso Street Black',
    price: 15000,
    imageUrl: pilusoNegro1Img1.src,
    images: [pilusoNegro1Img1.src],
    colors: ['Negro'],
    isNew: false,
    isBestseller: true,
    description: 'El icónico bucket hat negro. Un accesorio básico e indispensable para cualquier temporada.',
    category: 'Pilusos'
  },
  {
    id: '22',
    name: 'Piluso Cherry Pop',
    price: 16500,
    imageUrl: pilusoRojo1Img1.src,
    images: [pilusoRojo1Img1.src],
    colors: ['Rojo'],
    isNew: false,
    isBestseller: false,
    description: 'Piluso de algodón en color rojo intenso. Súper cómodo, fresco y llamativo para el verano.',
    category: 'Pilusos'
  },
];

