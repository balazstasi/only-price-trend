export const rarityFormatter = (rarity: string) => {
  switch (rarity) {
    case 'Common':
      return <span style={{ color: '#212121' }}>C</span>;
    case 'Rare':
      return <span style={{ color: '#455a64' }}>C</span>;
    case 'Super Rare':
      return <span style={{ color: '#388e3c' }}>SR</span>;
    case 'Ultra Rare':
      return <span style={{ color: '#6a1b9a' }}>UR</span>;
    case 'Secret Rare':
      return <span style={{ color: '#ffd600' }}>SR</span>;
    case 'Ultimate Rare':
      return <span style={{ color: '#d50000' }}>UtR</span>;
    case 'Ghost Rare':
      return <span style={{ color: '#e0e0e0' }}>GR</span>;
    case 'Gold Rare':
      return <span style={{ color: '#c8a600' }}>GR</span>;
    case 'Prismatic Secret Rare':
      return <span style={{ color: '#ffd600' }}>PSR</span>;
  }

  return rarity;
};
