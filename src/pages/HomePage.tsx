/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from 'evergreen-ui';
import React, { useState } from 'react';

import { YuGiApi } from '@/api/yu-gi-api';
import { SearchBar } from '@/components/SearchBar';
import { YGOCard } from '@/components/YGOCard';

function HomePage() {
  const [searchResults, setSearchResults] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearch = async (searchText: string) => {
    setIsLoading(true);
    const result = await YuGiApi.searchSingleCardByName(searchText);
    setIsLoading(false);
    setSearchResults([result]);
  };

  console.log(searchResults);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
      <div style={{ marginTop: '16px' }} />

      <SearchBar
        searchText={searchText}
        isDisabled={false}
        isLoading={isLoading}
        onChange={e => setSearchText(e.target.value)}
        onSubmit={() => handleSearch(searchText)}
      />

      <div style={{ marginBottom: '8px' }} />

      <button className="btn btn-primary self-center w-32" onClick={() => handleSearch(searchText)}>
        Submit
      </button>

      <div>
        {searchResults.map((card: any) => {
          return (
            <>
              <YGOCard key={card.id} card={card} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
