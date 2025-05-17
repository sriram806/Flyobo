import React, { createContext, useState, useContext, useEffect } from 'react';
import { Place, Package } from '../types';

type SavedItem = Place | Package;

interface SavedItemsContextType {
  savedItems: SavedItem[];
  addToSaved: (item: SavedItem) => void;
  removeFromSaved: (id: string) => void;
  isSaved: (id: string) => boolean;
}

const SavedItemsContext = createContext<SavedItemsContextType | undefined>(undefined);

export const useSavedItems = () => {
  const context = useContext(SavedItemsContext);
  if (context === undefined) {
    throw new Error('useSavedItems must be used within a SavedItemsProvider');
  }
  return context;
};

export const SavedItemsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);

  // Load saved items from localStorage
  useEffect(() => {
    const storedItems = localStorage.getItem('flyobo_saved_items');
    if (storedItems) {
      setSavedItems(JSON.parse(storedItems));
    }
  }, []);

  // Save to localStorage when items change
  useEffect(() => {
    localStorage.setItem('flyobo_saved_items', JSON.stringify(savedItems));
  }, [savedItems]);

  const addToSaved = (item: SavedItem) => {
    setSavedItems((prevItems) => {
      // Check if item already exists
      if (prevItems.some((prevItem) => prevItem.id === item.id)) {
        return prevItems;
      }
      return [...prevItems, item];
    });
  };

  const removeFromSaved = (id: string) => {
    setSavedItems((prevItems) => 
      prevItems.filter((item) => item.id !== id)
    );
  };

  const isSaved = (id: string) => {
    return savedItems.some((item) => item.id === id);
  };

  const value = {
    savedItems,
    addToSaved,
    removeFromSaved,
    isSaved,
  };

  return <SavedItemsContext.Provider value={value}>{children}</SavedItemsContext.Provider>;
};