import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useTasks } from "../context/TaskContext";

const Search = () => {
  const [filter, setFilter] = useState("");

  const { fetchTasks } = useTasks();

  // handler for search
  const handleSearch = (e) => {
    setFilter(e.target.value);
    fetchTasks(e.target.value);
  };

  return (
    <div className="searchbar-box">
      <MdSearch size={20} />
      <input
        type="text"
        className="search-input"
        placeholder="Search tasks by title..."
        value={filter}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
