import { Car } from '../../cars/interface/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'honda',
    model: 'Civic',
  },
  {
    id: uuid(),
    brand: 'jeep',
    model: 'Cherokee',
  },
];
