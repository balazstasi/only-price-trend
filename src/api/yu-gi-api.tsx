import { YgoProDeckURL } from '@/constants';

type YuGiResult = any;

type YuGiApiType = {
  searchSingleCardByName: (name: string) => Promise<YuGiResult>;
  searchCardsByName: (name: string) => Promise<YuGiResult>;
};

const YuGiApi: YuGiApiType = {
  searchSingleCardByName: async (name: string) => {
    const response = await fetch(`${YgoProDeckURL}?fname=${name}`);
    const result = await response.json();

    return result.data[0];
  },

  searchCardsByName: async (name: string) => {
    const response = await fetch(`${YgoProDeckURL}?name=${name}`);
    const result = await response.json();

    return result.data;
  },
};

export { YuGiApi };
