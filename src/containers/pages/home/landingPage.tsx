import React from "react";
import { usePlayList } from "shared/hooks/usePlyList";
import FilterIcon from "shared/assets/images/filter-icon.svg";
import ListItem from "./list-item";
import { Item } from "Types/types";

const Home = () => {
   const {playList,isLoading,isSuccess } = usePlayList()

  return (
    <div className="home">
      <div className="container">
        <div className="head-info">
          <div className="filter-result">About {playList?.pageInfo?.totalResults} results</div>
          <button className="filter">
            <img src={FilterIcon} alt="filter-icon" />
            filter
          </button>
        </div>
        <div className="select-info">
          <select name="types" >
            <option value="all">All</option>
            <option value="playlist">PlayList</option>
            <option value="channel">Channel</option>
            <option value="video">Video</option>
          </select>
          <select name="dates" >
            <option value="anytime">Any time</option>
            
          </select>
        </div>

        <div className="play-list">
          {(isSuccess && !isLoading) &&(<ul>
            {playList?.items?.map((p:Item) => (
              <ListItem item={p.snippet} key={p.id.videoId} />
            ))}
          </ul>)}
        </div>
      </div>
    </div>
  );
};

export default Home;


