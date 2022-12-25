import { rarityFormatter } from '@/utils/rarityFormatter';

interface YGOCardProps {
  card: {
    name: string;
    type: string;
    desc: string;
    atk: number;
    def: number;
    level: number;
    card_prices: Array<any>;
    card_images: Array<any>;
    card_sets: Array<any>;
  };
}

// [
//   {
//     set_name: 'Duel Overload',
//     set_code: 'DUOV-EN063',
//     set_rarity: 'Ultra Rare',
//     set_rarity_code: '(UR)',
//     set_price: '5.92',
//   },
//   {
//     set_name: 'OTS Tournament Pack 3',
//     set_code: 'OP03-EN001',
//     set_rarity: 'Ultimate Rare',
//     set_rarity_code: '(UtR)',
//     set_price: '300.34',
//   },
//   {
//     set_name: 'Stardust Overdrive',
//     set_code: 'SOVR-EN034',
//     set_rarity: 'Common',
//     set_rarity_code: '(C)',
//     set_price: '4.75',
//   },
// ];

export const YGOCard = (props: YGOCardProps) => {
  const { card } = props;
  const { name, desc, card_prices: prices, card_images: images, card_sets: sets } = card;
  const cardImageUrl = images[0]?.image_url;

  const calculatePrice = (setPrice: string) => {
    if (setPrice !== '0') {
      return setPrice;
    } else {
      if (+prices[0]?.cardmarket_price !== 0) {
        return prices[0]?.cardmarket_price + '€ (CardMarket)';
      } else {
        return '$' + prices[0]?.tcgplayer_price + ' (TCGPlayer)';
      }
    }
  };

  return (
    <div className="flex flex-col place-items-center">
      <h1 className="text-3xl font-semibold p-2 text-center">{name}</h1>
      <div>
        <img
          src={cardImageUrl}
          width={400}
          className="justify-center justify-contents-center self-center p-4"
          alt={name}
        />
      </div>
      <div className="flex flex-row justify-center">
        <div className="w-full p-2">
          <p className="border-2 border-slate-500 border-sm rounded-xl p-2 bg-slate-300 text-slate-900 mb-2">
            {desc}
          </p>
          <div>
            {sets.map(
              ({ set_code: code, set_rarity: rarity, set_price: price, set_name: name }: any) => (
                <div key={code} className="self-center">
                  <div className="p-1 bg-slate-300 rounded-xl text-slate-900 border-2 border-slate-500">
                    <p>
                      {`${name} (${code})`} <b className="text-black"> | </b>
                      {<b>{rarityFormatter(rarity)}</b>} <b className="text-black"> | </b>
                      {`${calculatePrice(price)}`}
                    </p>
                  </div>
                  <div className="h-1 bg-transparent" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
