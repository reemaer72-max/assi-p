import React from "react";


export const user = {
  name: "Rima",
};

export const calculateTotal = (expenses) => {
  return expenses.reduce((total, item) => total + item, 0);
};

export const isEven = (num) => num % 2 === 0;

const About = () => {
  return (
    <div>
      <h1>About this project</h1>

      <p>This project is developed by Rima and team.</p>
      <p>Email: rima@gmail.com</p>

      <button>Contact developer</button>
    </div>
  );
};

export default About;