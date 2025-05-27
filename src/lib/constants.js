import { v4 as uuidv4 } from 'uuid';
export const initialItems = [
  { id: uuidv4(), name: 'good mood', packed: true },
  { id: uuidv4(), name: 'water bottle', packed: false },
  { id: uuidv4(), name: 'phone charger', packed: false },
];

export const buttonGroup = [
  'Mark all as complete',
  'Mark all as incomplete',
  'Reset to initial',
  'Remove all items',
];
