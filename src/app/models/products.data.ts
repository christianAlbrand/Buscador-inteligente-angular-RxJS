import { Product } from './product';

export const PRODUCTS: Product[] = [
  // Electrónica
  { id: 1, name: 'Laptop Pro 15"', category: 'Electrónica', price: 18999, description: 'Laptop de alto rendimiento con 16 GB de RAM y SSD de 512 GB.', image: 'https://picsum.photos/seed/laptop/400/300' },
  { id: 2, name: 'Audífonos Bluetooth', category: 'Electrónica', price: 1299, description: 'Audífonos inalámbricos con cancelación de ruido y 30 h de batería.', image: 'https://picsum.photos/seed/headphones/400/300' },
  { id: 3, name: 'Smartwatch Fit', category: 'Electrónica', price: 2499, description: 'Reloj inteligente con monitor de ritmo cardiaco y GPS.', image: 'https://picsum.photos/seed/smartwatch/400/300' },
  { id: 4, name: 'Teclado Mecánico', category: 'Electrónica', price: 1599, description: 'Teclado mecánico retroiluminado con switches rojos.', image: 'https://picsum.photos/seed/keyboard/400/300' },

  // Hogar
  { id: 5, name: 'Cafetera Express', category: 'Hogar', price: 2199, description: 'Cafetera de 15 bares con vaporizador de leche integrado.', image: 'https://picsum.photos/seed/coffeemaker/400/300' },
  { id: 6, name: 'Lámpara de Escritorio', category: 'Hogar', price: 459, description: 'Lámpara LED regulable con puerto de carga USB.', image: 'https://picsum.photos/seed/desklamp/400/300' },
  { id: 7, name: 'Aspiradora Robot', category: 'Hogar', price: 5999, description: 'Aspiradora inteligente con mapeo láser y control por app.', image: 'https://picsum.photos/seed/vacuum/400/300' },
  { id: 8, name: 'Juego de Sábanas', category: 'Hogar', price: 799, description: 'Sábanas de algodón de 400 hilos, tamaño queen size.', image: 'https://picsum.photos/seed/bedsheets/400/300' },

  // Deportes
  { id: 9, name: 'Tenis Running', category: 'Deportes', price: 1899, description: 'Tenis ligeros con amortiguación para correr largas distancias.', image: 'https://picsum.photos/seed/runningshoes/400/300' },
  { id: 10, name: 'Pelota de Fútbol', category: 'Deportes', price: 349, description: 'Balón oficial talla 5, resistente al agua.', image: 'https://picsum.photos/seed/soccerball/400/300' },
  { id: 11, name: 'Tapete de Yoga', category: 'Deportes', price: 399, description: 'Tapete antiderrapante de 6 mm con correa de transporte.', image: 'https://picsum.photos/seed/yogamat/400/300' },
  { id: 12, name: 'Mancuernas Ajustables', category: 'Deportes', price: 2899, description: 'Par de mancuernas ajustables de 2 a 24 kg.', image: 'https://picsum.photos/seed/dumbbells/400/300' },

  // Ropa
  { id: 13, name: 'Chamarra de Mezclilla', category: 'Ropa', price: 899, description: 'Chamarra clásica de mezclilla con corte regular.', image: 'https://picsum.photos/seed/jacket/400/300' },
  { id: 14, name: 'Playera Básica', category: 'Ropa', price: 199, description: 'Playera de algodón peinado, disponible en varios colores.', image: 'https://picsum.photos/seed/tshirt/400/300' },
  { id: 15, name: 'Pantalón Cargo', category: 'Ropa', price: 649, description: 'Pantalón cargo cómodo con múltiples bolsillos.', image: 'https://picsum.photos/seed/pants/400/300' },
  { id: 16, name: 'Gorra Deportiva', category: 'Ropa', price: 249, description: 'Gorra ajustable con tela transpirable.', image: 'https://picsum.photos/seed/cap/400/300' },

  // Libros
  { id: 17, name: 'Clean Code', category: 'Libros', price: 749, description: 'Guía para escribir código limpio y mantenible.', image: 'https://picsum.photos/seed/cleancode/400/300' },
  { id: 18, name: 'Angular en la Práctica', category: 'Libros', price: 599, description: 'Aprende a crear aplicaciones web modernas con Angular.', image: 'https://picsum.photos/seed/angularbook/400/300' },
  { id: 19, name: 'Aprendiendo RxJS', category: 'Libros', price: 549, description: 'Programación reactiva con observables y operadores.', image: 'https://picsum.photos/seed/rxjsbook/400/300' },
  { id: 20, name: 'El Programador Pragmático', category: 'Libros', price: 689, description: 'Consejos prácticos para convertirte en mejor desarrollador.', image: 'https://picsum.photos/seed/pragmatic/400/300' },
];