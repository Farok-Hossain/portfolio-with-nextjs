import Link from "next/link";
import React from "react";

const PCard = () => {
  return (
    <div>
      <div className="card card-compact w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            <a href="https://bistro-restaurant-866e3.web.app/">Live Link A</a>
            <Link href="https://bistro-restaurant-866e3.web.app/">
              Live Link
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCard;
