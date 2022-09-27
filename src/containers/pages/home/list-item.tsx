import moment from "moment";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Snippet } from "Types/types";

interface Props {
  item: Snippet;
}
  
export const ListItem = ({ item }: Props) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1224px)' })

  return (
    <li className="item">
      <div className="thumb">
        <img src={isBigScreen ? item.thumbnails?.medium?.url : item.thumbnails?.default?.url} alt="" />
      </div>
      <div className="item-info">
        <h3 className="title">{item.title}</h3>
        <span className="sub-title">{item.channelTitle},{ moment(item.publishedAt).fromNow()}</span>
        <p className="des">
          {item?.description}
        </p>
      </div>
    </li>
  );
};

export default ListItem;
