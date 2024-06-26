import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import SearchList from "./SearchList";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchListA, setSearchListA] = useState(false);
  const TitleArray = ["video1", "video2", "Animation video", "Movies"].filter(
    (q) => q.toUpperCase().includes(searchQuery.toLocaleUpperCase())
  );
  return (
    <>
      <div className="SearchBar_Container">
        <div className="SearchBar_Container2">
          <div className="search_div">
            <input
              type="text"
              value={searchQuery}
              className="iBox_SearchBar"
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              onClick={(e) => setSearchListA(true)}
            />
            <FaSearch
              className="searchIcon_SearchBar"
              onClick={(e) => setSearchListA(false)}
            />
            <BsMicFill className="Mic_SearchBar" />
            {searchQuery && searchListA && (
              <SearchList
                setSearchQuery={setSearchQuery}
                TitleArray={TitleArray}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
