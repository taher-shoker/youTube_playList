import React from "react";
import SearchIcon from "shared/assets/images/search_blue.svg";
import { useRecoilState } from "recoil";
import { filterAtom } from "store/Filter";

interface Props {
  value?: string;
  show:boolean,
  onChange: (query: string) => void;
  showSearchBox:()=> void
}

function SearchInput({ onChange, value,show,showSearchBox}: Props) {
  const [filters, setFilters] = useRecoilState(filterAtom);

const onReset = ()=>{
  setFilters({...filters,q:''})
}
  return (
    <div className="search-box">
     {show &&( <label className='input-search' htmlFor="a">
        <input
          type="text"
          placeholder="search"
          id="search-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="search">
          <img src={SearchIcon} alt="search icon" />
        </span>
        <span className="clear" onClick={onReset}>x</span>
      </label>)}
      <button className="search-btn" onClick={showSearchBox}>
        <svg id="search_blue" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path id="Path_3813" data-name="Path 3813" d="M0,0H24V24H0Z" fill="none" />
          <path
            id="Path_3814"
            data-name="Path 3814"
            d="M15.5,14h-.79l-.28-.27a6.518,6.518,0,1,0-.7.7l.27.28v.79l4.25,4.25a1.054,1.054,0,0,0,1.49-1.49Zm-6,0A4.5,4.5,0,1,1,14,9.5,4.494,4.494,0,0,1,9.5,14Z"
            fill="#fff"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchInput;
