import React, { useState } from "react";
import { MessageOutlined, LikeOutlined } from "@ant-design/icons";
import { List, Space } from "antd";
import { FeedViewBeer } from "../types";

interface Props {
  beer: FeedViewBeer;
}

export default function FeedViewItem(props: Props) {
  const { beer } = props;
  const [like, setLike] = useState(0);
  // const [mesg, setMesg] = useState("");

  const beerLikes = () => {
    if (like === 0) {
      setLike(1);
    } else if (like === 1) {
      setLike(0);
    }
  };
  const beerMessage = () => {

  };

  return (
    <div>
      <List.Item
        key={beer.id}
        actions={[
          <Space>
            <LikeOutlined onClick={beerLikes} />
            {like}
            <MessageOutlined onClick={beerMessage}/>
            {2}
          </Space>,
        ]}
        extra={<img width={50} alt="logo" src={beer.image_url} />}
      >
        <List.Item.Meta title={beer.name} description={beer.tagline} />
        {beer.description}
      </List.Item>
    </div>
  );
}
