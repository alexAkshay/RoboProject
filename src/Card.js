import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div>
      <img src={`https://robohash.org/${id}`} alt="profile_img_roboproject" />
      <h2>Name:- {name}</h2>
      <h3>Email:- {email}</h3>
    </div>
  );
};

export default Card;
