import React, { useState } from 'react';

interface SearchBarProps {
  searchText: string;
  isDisabled: boolean;
  isLoading: boolean;
  onChange: (e: { target: { value: string } }) => void;
  onSubmit: () => void;
}

export const SearchBar = (props: SearchBarProps) => {
  const { searchText, isDisabled, onSubmit, onChange } = props;

  return (
    <input
      className="input input-bordered w-1/2 max-w-s self-center"
      placeholder="Search Card"
      value={searchText}
      disabled={isDisabled}
      onChange={onChange}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          onSubmit();
        }
      }}
    />
  );
};
