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

  const IconText = ({ icon, text }: { icon: any; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const beerLikes=()=>{}

  return (
    <div>
      <List.Item
        key={beer.id}
        actions={[
          <IconText icon={LikeOutlined} text="156" key="list-like" />,
          <IconText icon={MessageOutlined} text="2" key="list-message" />,
        ]}
        extra={<img width={50} alt="logo" src={beer.image_url} />}
      >
        <List.Item.Meta title={beer.name} description={beer.tagline} />
        {beer.description}
      </List.Item>
    </div>
  );
}
