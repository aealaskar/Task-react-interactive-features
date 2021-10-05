import { useState } from "react";
import React from "react";
import ProductItem from "./ProductItem";

export default function ProductDetails(props) {
  return (
    <div className="detail">
      <h5>{props.detail.name}</h5>
      <img src={props.detail.image} />
      <p>{props.detail.price} KD</p>
      <p>{props.detail.description}</p>
    </div>
  );
}
