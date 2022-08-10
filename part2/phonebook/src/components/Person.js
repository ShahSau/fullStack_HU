import React from "react";

const Person = ({ person,number, onClick }) => {
  return <li>{person} {number} <button onClick={onClick}>delete</button></li>;
};

export default Person;