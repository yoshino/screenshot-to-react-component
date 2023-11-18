import React from 'react';

type SearchBarProps = {
  placeholder: string;
  onSearch: (value: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form onSubmit={handleSearchSubmit} style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f0f0f0', padding: '4px 8px', borderRadius: '4px' }}>
      <span style={{ marginRight: '8px', color: '#555', fontSize: '14px' }}>すべて</span>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder={placeholder}
        style={{ flexGrow: 1, border: 'none', padding: '8px', fontSize: '14px' }}
      />
      <button type="submit" style={{ backgroundColor: '#febd69', border: 'none', padding: '8px 16px', borderRadius: '0 4px 4px 0', cursor: 'pointer' }}>
        <span style={{ color: '#0F1111', fontSize: '14px' }}>🔍</span>
      </button>
    </form>
  );
};