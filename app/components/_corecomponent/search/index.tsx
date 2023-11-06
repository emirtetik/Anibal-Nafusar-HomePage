"use client";
import { useState, FormEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Aranan kelime: ${searchTerm}`);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex  items-center px-8 ">
      <input
        type="text"
        placeholder="Ara..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border-2 border-gray-300 max-w-[180px] textColor  rounded-sm p-0.5 pl-8 flex-grow  focus:outline-none shadow-dark"
      />
      <button type="submit" className="p-2">
        <AiOutlineSearch className="h-5 w-5 text-gray-500 " />
      </button>
    </form>
  );
};

export default Search;
