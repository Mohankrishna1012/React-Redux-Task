import React from "react";
import "./home.css";
import { useSelector } from "react-redux";
import Card from "./Card";

const Home = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <>
      <div className="offer">
        <div class="wrapper">
          <div class="cardy">
            <p>🎄❄️🎅🎁Christmas Deals🎄❄️🎅🎁</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {products.map((item, index) => {
            return <Card key={index} product={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
