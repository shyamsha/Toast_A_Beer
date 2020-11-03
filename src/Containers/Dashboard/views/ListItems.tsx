/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Col, Divider, Row } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { FeedViewBeer } from "../../FeedView/types";

interface Props {
  beers: FeedViewBeer;
}
export default function ListItems(props: Props) {
  const { beers } = props;
  return (
    <div>
      <Row className="container">
        <Col span={6}>
          <div className="title">{beers.name}</div>
          <div className="subtitle">{beers.tagline}</div>
        </Col>
        <Col span={6}>
          <div className="title">First_Brewed</div>
          <div className="subtitle">{beers.first_brewed}</div>
        </Col>
        <Col span={6}>
          <div className="title">Yeast</div>
          <div className="subtitle">{beers.ingredients.yeast}</div>
        </Col>
        <Col span={6}>
          <div className="title">Sample Picture</div>
          <div className="subtitle">
            <Avatar size="large" src={beers.image_url} />
          </div>
        </Col>
      </Row>
      <Divider
        style={{
          margin: 0,
          height: "0.25rem",
          backgroundColor: "#e4e8f1",
        }}
      />
    </div>
  );
}
