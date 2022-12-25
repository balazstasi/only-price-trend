import { atom } from 'jotai';

import { YuGiApi } from '@/api/yu-gi-api';

export const cards = atom({
  selectedCard: null,
  searchResults: [],
});

const YGOStore = () => {
  getCardByName: atom(async (name: string) => {
    const result = await YuGiApi.getCardByName(name);
    return result;
  });
};

export { YGOStore };
