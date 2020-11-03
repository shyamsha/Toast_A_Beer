/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Card, } from "antd";
import { FeedViewBeer } from "../../FeedView/types";
import "../../../App.css"

const { Meta } = Card;

interface Props {
  beers: FeedViewBeer;
}
export default function GridItems(props: Props) {
  const { beers } = props;
  return (
    <div style={{padding:"8px 8px"}}>
      <Card
        style={{ width: 250 }}
        bodyStyle={{height:"100px"}}
        hoverable
        bordered
        cover={<img alt="media" src={beers.image_url} height="150px" width="80px" className="img"/>}
      >
        <div
          style={{ cursor: "pointer" }}
          // onClick={() => openNewInNewTab(ele.url)}
        >
          <Meta title={beers.name} description={beers.tagline} />
        </div>
      </Card>
    </div>
  );
}
