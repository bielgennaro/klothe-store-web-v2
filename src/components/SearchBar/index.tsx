import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value)
    }

    useEffect(() => {
        console.log(searchTerm);
      }, [searchTerm]);

  return (
    <div
      className="search-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh",
      }}
    >
      <div className="flex items-center gap-2 border border-gray-700 rounded-lg p-2 w-[40rem] focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent text-white">
        <input
          className="flex-1 outline-none text-white"
          type="text"
          placeholder="Search your dream accessory here..."
          onChange={handleChange}
          alt="Search bar"
        />
        <Button type="submit">
          <SearchIcon />
        </Button>
      </div>
    </div>
  )
}

export default SearchBar;