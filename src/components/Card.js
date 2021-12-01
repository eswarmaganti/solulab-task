import React from "react";

const Card = (props) => {
  const {
    membership,
    image,
    icon,
    price,
    priceInDollar,
    desc,
    limited,
    remaining,
  } = props.data;
  return (
    <div className="card-wrapper">
      <div className="card ">
        <div className="card-header">
          <img src={image} alt="" />
          <div className="card-head-content">
            <h1>{membership}</h1>
            <div className="flex gap-1 justify-center">
              <img src={icon} alt="" className="h-6" />
              <h4 className="text-medium text-xl">{price}</h4>
              <p className="text-medium ">({priceInDollar})</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative w-10/12 px-10 pt-10 pb-24  mx-auto border-b-2 border-l-2 border-r-2 border-primary rounded-b-3xl ">
        <ul>
          {desc.map((item, index) => {
            return (
              <li className="font-medium py-2" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
        <div className="absolute card-actions text-center ">
          <h1 className="uppercase font-medium">Limited to {limited}</h1>
          <button className="btn btn-primary w-full my-2">Buy</button>
          <h1 className="font-medium">{remaining} reamining</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
