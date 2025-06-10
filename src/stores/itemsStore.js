import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { initialItems } from '../lib/constants';

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (newItemText) => {
        const newItem = {
          id: new Date().getTime(),
          name: newItemText,
          packed: false,
        };

        set((state) => ({ items: [...state.items, newItem] }));
      },
      removeItem: (id) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id);
          return { items: newItems };
        });
      },
      toggleItemPacked: (id) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }

            return item;
          });
          return { items: newItems };
        });
      },
      removeAllItems: () => {
        if (window.confirm('Are you sure you want to remove all items?')) {
          set(() => ({ items: [] }));
        }
      },
      resetItems: () => {
        if (window.confirm('Are you sure you want to reset to initial items?')) {
          set(() => ({ items: initialItems }));
        }
      },
      markAllPacked: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: true };
          });

          return { items: newItems };
        });
      },
      markAllUnpacked: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: false };
          });

          return { items: newItems };
        });
      },
      setItems: (items) => set(() => ({ items })),
    }),
    {
      name: 'items',
    }
  )
);

export default useItemsStore;
