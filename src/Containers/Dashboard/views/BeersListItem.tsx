/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FeedViewBeer } from "../../FeedView/types";
import GridItems from "./GridItems";
import ListItems from "./ListItems";

interface Props {
  beers: FeedViewBeer;
  checked: boolean;
}
export default function BeersListItem(props: Props) {
  const { beers, checked } = props;
  return (
    <div>
      {checked ? <ListItems beers={beers} /> : <GridItems beers={beers} />}
    </div>
  );
}
